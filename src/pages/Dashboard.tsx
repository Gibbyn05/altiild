import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { useToast } from "@/hooks/use-toast";
import { Loader2, RefreshCw, Phone, Mail, MapPin, Calendar } from "lucide-react";

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
  created_at: string;
}

const statusLabels: Record<string, string> = {
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
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    fetchInquiries();

    // Subscribe to realtime updates
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

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-display text-4xl font-bold text-foreground mb-2">
                Kundehenvendelser
              </h1>
              <p className="text-muted-foreground">
                Oversikt over alle henvendelser fra chatboten
              </p>
            </div>
            <Button onClick={fetchInquiries} variant="outline" disabled={isLoading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
              Oppdater
            </Button>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : inquiries.length === 0 ? (
            <div className="text-center py-20 bg-card rounded-xl border border-border">
              <p className="text-muted-foreground text-lg">
                Ingen henvendelser ennå. Henvendelser fra chatboten vil dukke opp her.
              </p>
            </div>
          ) : (
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Dato</TableHead>
                    <TableHead>Kunde</TableHead>
                    <TableHead>Kontakt</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Ønsket løsning</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inquiries.map((inquiry) => (
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
                      <TableCell className="max-w-[200px]">
                        <span className="text-sm text-muted-foreground line-clamp-2">
                          {inquiry.desired_solution || "-"}
                        </span>
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
                            {Object.entries(statusLabels).map(([value, label]) => (
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
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
