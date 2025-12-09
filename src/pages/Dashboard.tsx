import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { 
  Loader2, 
  RefreshCw, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Trash2,
  MessageCircle,
  FileText,
  Users,
  CheckCircle,
  Clock,
  TrendingUp
} from "lucide-react";

interface CustomerInquiry {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  address: string | null;
  inquiry_type: string;
  desired_solution: string | null;
  status: string;
  notes: string | null;
  source: string;
  created_at: string;
}

const statusLabels: Record<string, string> = {
  all: "Alle",
  new: "Ny",
  contacted: "Kontaktet",
  scheduled: "Befaring planlagt",
  completed: "Fullført",
  cancelled: "Kansellert",
};

const statusColors: Record<string, string> = {
  new: "bg-blue-500",
  contacted: "bg-yellow-500",
  scheduled: "bg-purple-500",
  completed: "bg-green-500",
  cancelled: "bg-gray-500",
};

const inquiryTypeLabels: Record<string, string> = {
  installasjon: "Installasjon",
  befaring: "Befaring",
  rådgivning: "Rådgivning",
  service: "Service",
};

export default function Dashboard() {
  const [inquiries, setInquiries] = useState<CustomerInquiry[]>([]);
  const [filteredInquiries, setFilteredInquiries] = useState<CustomerInquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [sourceFilter, setSourceFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const { toast } = useToast();

  const fetchInquiries = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("customer_inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching inquiries:", error);
      toast({
        title: "Feil",
        description: "Kunne ikke hente henvendelser",
        variant: "destructive",
      });
    } else {
      setInquiries(data || []);
    }
    setIsLoading(false);
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("customer_inquiries")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error("Error updating status:", error);
      toast({
        title: "Feil",
        description: "Kunne ikke oppdatere status",
        variant: "destructive",
      });
    } else {
      setInquiries(prev =>
        prev.map(inquiry =>
          inquiry.id === id ? { ...inquiry, status } : inquiry
        )
      );
      toast({
        title: "Oppdatert",
        description: "Status er oppdatert",
      });
    }
  };

  const deleteInquiry = async (id: string) => {
    const { error } = await supabase
      .from("customer_inquiries")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting inquiry:", error);
      toast({
        title: "Feil",
        description: "Kunne ikke slette henvendelsen",
        variant: "destructive",
      });
    } else {
      setInquiries(prev => prev.filter(inquiry => inquiry.id !== id));
      toast({
        title: "Slettet",
        description: "Henvendelsen er slettet",
      });
    }
  };

  // Apply filters
  useEffect(() => {
    let filtered = [...inquiries];

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter(i => i.status === statusFilter);
    }

    // Source filter
    if (sourceFilter !== "all") {
      filtered = filtered.filter(i => i.source === sourceFilter);
    }

    // Date filter
    if (dateFilter !== "all") {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      
      filtered = filtered.filter(i => {
        const createdAt = new Date(i.created_at);
        
        switch (dateFilter) {
          case "today":
            return createdAt >= today;
          case "week":
            const weekAgo = new Date(today);
            weekAgo.setDate(weekAgo.getDate() - 7);
            return createdAt >= weekAgo;
          case "month":
            const monthAgo = new Date(today);
            monthAgo.setMonth(monthAgo.getMonth() - 1);
            return createdAt >= monthAgo;
          default:
            return true;
        }
      });
    }

    setFilteredInquiries(filtered);
  }, [inquiries, statusFilter, sourceFilter, dateFilter]);

  useEffect(() => {
    fetchInquiries();

    const channel = supabase
      .channel("customer_inquiries_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "customer_inquiries",
        },
        (payload) => {
          console.log("Realtime update:", payload);
          if (payload.eventType === "INSERT") {
            setInquiries(prev => [payload.new as CustomerInquiry, ...prev]);
            toast({
              title: "Ny henvendelse",
              description: `${(payload.new as CustomerInquiry).name} har sendt en henvendelse`,
            });
          } else if (payload.eventType === "UPDATE") {
            setInquiries(prev =>
              prev.map(inquiry =>
                inquiry.id === payload.new.id ? (payload.new as CustomerInquiry) : inquiry
              )
            );
          } else if (payload.eventType === "DELETE") {
            setInquiries(prev =>
              prev.filter(inquiry => inquiry.id !== payload.old.id)
            );
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("nb-NO", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Statistics calculations
  const stats = {
    total: inquiries.length,
    chatbot: inquiries.filter(i => i.source === "chatbot").length,
    form: inquiries.filter(i => i.source === "form").length,
    completed: inquiries.filter(i => i.status === "completed").length,
    pending: inquiries.filter(i => i.status === "new" || i.status === "contacted").length,
  };

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container-wide">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Kundehenvendelser
              </h1>
              <p className="text-muted-foreground text-sm md:text-base">
                Oversikt over alle henvendelser
              </p>
            </div>
            <Button onClick={fetchInquiries} variant="outline" disabled={isLoading} className="shrink-0">
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
              Oppdater
            </Button>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-4">
                <CardTitle className="text-xs md:text-sm font-medium">Totalt</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="text-xl md:text-2xl font-bold">{stats.total}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-4">
                <CardTitle className="text-xs md:text-sm font-medium">Chatbot</CardTitle>
                <MessageCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="text-xl md:text-2xl font-bold">{stats.chatbot}</div>
                <p className="text-xs text-muted-foreground">
                  {stats.total > 0 ? Math.round((stats.chatbot / stats.total) * 100) : 0}%
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-4">
                <CardTitle className="text-xs md:text-sm font-medium">Skjema</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="text-xl md:text-2xl font-bold">{stats.form}</div>
                <p className="text-xs text-muted-foreground">
                  {stats.total > 0 ? Math.round((stats.form / stats.total) * 100) : 0}%
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-4">
                <CardTitle className="text-xs md:text-sm font-medium">Fullført</CardTitle>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="text-xl md:text-2xl font-bold">{stats.completed}</div>
              </CardContent>
            </Card>
            <Card className="col-span-2 lg:col-span-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-4">
                <CardTitle className="text-xs md:text-sm font-medium">Venter</CardTitle>
                <Clock className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="text-xl md:text-2xl font-bold">{stats.pending}</div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Filtrer etter status" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(statusLabels).map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {value !== "all" && (
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${statusColors[value]}`} />
                        {label}
                      </div>
                    )}
                    {value === "all" && label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Filtrer etter kilde" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle kilder</SelectItem>
                <SelectItem value="chatbot">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Chatbot
                  </div>
                </SelectItem>
                <SelectItem value="form">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Skjema
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>

            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Filtrer etter dato" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle datoer</SelectItem>
                <SelectItem value="today">I dag</SelectItem>
                <SelectItem value="week">Siste 7 dager</SelectItem>
                <SelectItem value="month">Siste 30 dager</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-4">
            Viser {filteredInquiries.length} av {inquiries.length} henvendelser
          </p>

          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : filteredInquiries.length === 0 ? (
            <div className="text-center py-20 bg-card rounded-xl border border-border">
              <p className="text-muted-foreground text-lg">
                {inquiries.length === 0 
                  ? "Ingen henvendelser ennå. Henvendelser fra chatboten vil dukke opp her."
                  : "Ingen henvendelser matcher filteret."}
              </p>
            </div>
          ) : (
            <>
              {/* Desktop Table */}
              <div className="hidden lg:block bg-card rounded-xl border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Dato</TableHead>
                      <TableHead>Kunde</TableHead>
                      <TableHead>Kontakt</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Kilde</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredInquiries.map((inquiry) => (
                      <TableRow key={inquiry.id}>
                        <TableCell className="whitespace-nowrap">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {formatDate(inquiry.created_at)}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{inquiry.name}</div>
                          {inquiry.address && (
                            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                              <MapPin className="h-3 w-3" />
                              {inquiry.address}
                            </div>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-muted-foreground" />
                              <a href={`tel:${inquiry.phone}`} className="hover:text-primary">
                                {inquiry.phone}
                              </a>
                            </div>
                            {inquiry.email && (
                              <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <a href={`mailto:${inquiry.email}`} className="hover:text-primary text-sm">
                                  {inquiry.email}
                                </a>
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">
                            {inquiryTypeLabels[inquiry.inquiry_type] || inquiry.inquiry_type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="gap-1">
                            {inquiry.source === "chatbot" ? (
                              <><MessageCircle className="h-3 w-3" /> Chatbot</>
                            ) : (
                              <><FileText className="h-3 w-3" /> Skjema</>
                            )}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Select
                            value={inquiry.status}
                            onValueChange={(value) => updateStatus(inquiry.id, value)}
                          >
                            <SelectTrigger className="w-[160px]">
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${statusColors[inquiry.status]}`} />
                                <SelectValue />
                              </div>
                            </SelectTrigger>
                            <SelectContent>
                              {Object.entries(statusLabels).filter(([v]) => v !== "all").map(([value, label]) => (
                                <SelectItem key={value} value={value}>
                                  <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${statusColors[value]}`} />
                                    {label}
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Slette henvendelse?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Er du sikker på at du vil slette henvendelsen fra {inquiry.name}? 
                                  Denne handlingen kan ikke angres.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Avbryt</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => deleteInquiry(inquiry.id)}
                                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                >
                                  Slett
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Mobile/Tablet Cards */}
              <div className="lg:hidden space-y-4">
                {filteredInquiries.map((inquiry) => (
                  <Card key={inquiry.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{inquiry.name}</h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(inquiry.created_at)}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="gap-1 text-xs">
                            {inquiry.source === "chatbot" ? (
                              <MessageCircle className="h-3 w-3" />
                            ) : (
                              <FileText className="h-3 w-3" />
                            )}
                          </Badge>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Slette henvendelse?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Er du sikker på at du vil slette henvendelsen fra {inquiry.name}?
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Avbryt</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => deleteInquiry(inquiry.id)}
                                  className="bg-destructive text-destructive-foreground"
                                >
                                  Slett
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <a href={`tel:${inquiry.phone}`} className="hover:text-primary">
                            {inquiry.phone}
                          </a>
                        </div>
                        {inquiry.email && (
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <a href={`mailto:${inquiry.email}`} className="hover:text-primary truncate">
                              {inquiry.email}
                            </a>
                          </div>
                        )}
                        {inquiry.address && (
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{inquiry.address}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline">
                          {inquiryTypeLabels[inquiry.inquiry_type] || inquiry.inquiry_type}
                        </Badge>
                      </div>

                      {inquiry.desired_solution && (
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {inquiry.desired_solution}
                        </p>
                      )}

                      <Select
                        value={inquiry.status}
                        onValueChange={(value) => updateStatus(inquiry.id, value)}
                      >
                        <SelectTrigger className="w-full">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${statusColors[inquiry.status]}`} />
                            <SelectValue />
                          </div>
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(statusLabels).filter(([v]) => v !== "all").map(([value, label]) => (
                            <SelectItem key={value} value={value}>
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${statusColors[value]}`} />
                                {label}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
