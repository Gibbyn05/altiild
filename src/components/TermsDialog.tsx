import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsDialogProps {
  children: React.ReactNode;
}

export function TermsDialog({ children }: TermsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Vilkår og betingelser</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                1. Generelt
              </h3>
              <p>
                Disse vilkårene gjelder for bruk av Alt i Ild AS sine tjenester og nettside. 
                Ved å bruke våre tjenester aksepterer du disse vilkårene.
              </p>
            </section>

            <section>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                2. Tjenester
              </h3>
              <p>
                Alt i Ild AS tilbyr installasjon, vedlikehold og rådgivning knyttet til 
                peiser, ovner og ildsteder. Alle installasjoner utføres av sertifiserte 
                fagfolk i henhold til gjeldende forskrifter og brannsikkerhetskrav.
              </p>
            </section>

            <section>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                3. Befaring og tilbud
              </h3>
              <p>
                Vi tilbyr gratis og uforpliktende befaring. Tilbud baseres på befaring og 
                er gyldige i 30 dager med mindre annet er avtalt. Priser kan justeres ved 
                endringer i omfang eller uforutsette forhold.
              </p>
            </section>

            <section>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                4. Utførelse og garanti
              </h3>
              <p className="mb-2">
                Vi garanterer kvalitet på utført arbeid. Garantien dekker:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Feil ved utført montasje og installasjon</li>
                <li>Materialfeil på leverte produkter (iht. produsentens garanti)</li>
              </ul>
              <p className="mt-2">
                Garantien forutsetter korrekt bruk og vedlikehold i henhold til gitte instruksjoner.
              </p>
            </section>

            <section>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                5. Betaling
              </h3>
              <p>
                Betaling skjer etter avtale, normalt ved ferdigstillelse av arbeid. 
                Ved forsinket betaling påløper forsinkelsesrente i henhold til 
                forsinkelsesrenteloven.
              </p>
            </section>

            <section>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                6. Ansvar
              </h3>
              <p>
                Alt i Ild AS er ansvarlig for skader som oppstår som følge av feil eller 
                mangler ved vårt arbeid. Vi er ikke ansvarlig for skader som skyldes 
                feilaktig bruk, manglende vedlikehold eller forhold utenfor vår kontroll.
              </p>
            </section>

            <section>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                7. Avbestilling
              </h3>
              <p>
                Avtalt arbeid kan avbestilles kostnadsfritt inntil 48 timer før avtalt 
                oppstart. Ved senere avbestilling kan det påløpe kostnader for påløpte 
                utgifter.
              </p>
            </section>

            <section>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                8. Tvister
              </h3>
              <p>
                Eventuelle tvister skal først søkes løst i minnelighet. Dersom dette ikke 
                fører frem, avgjøres tvisten ved norske domstoler med Møre og Romsdal 
                tingrett som verneting.
              </p>
            </section>

            <section>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                9. Kontakt
              </h3>
              <p>
                Spørsmål om vilkårene kan rettes til{" "}
                <a href="mailto:post@altiild.no" className="text-primary hover:underline">
                  post@altiild.no
                </a>{" "}
                eller{" "}
                <a href="tel:+4798844844" className="text-primary hover:underline">
                  +47 988 44 844
                </a>.
              </p>
            </section>

            <p className="text-sm text-muted-foreground/60 pt-4 border-t">
              Sist oppdatert: {new Date().toLocaleDateString("nb-NO")}
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
