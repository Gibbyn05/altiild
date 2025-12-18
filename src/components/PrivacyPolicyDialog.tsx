import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyDialogProps {
  children: React.ReactNode;
}

export function PrivacyPolicyDialog({ children }: PrivacyPolicyDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Personvernerklæring</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                1. Innledning
              </h3>
              <p>
                Alt i Ild AS tar personvern på alvor. Denne personvernerklæringen forklarer 
                hvordan vi samler inn, bruker og beskytter dine personopplysninger når du 
                bruker vår nettside og tjenester.
              </p>
            </section>

            <section>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                2. Hvilke opplysninger vi samler inn
              </h3>
              <p className="mb-2">Vi kan samle inn følgende personopplysninger:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Navn og kontaktinformasjon (telefon, e-post, adresse)</li>
                <li>Informasjon du gir oss gjennom kontaktskjema eller chat</li>
                <li>Bilder du laster opp i forbindelse med forespørsler</li>
                <li>Teknisk informasjon om din bruk av nettsiden</li>
              </ul>
            </section>

            <section>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                3. Hvordan vi bruker opplysningene
              </h3>
              <p className="mb-2">Vi bruker dine opplysninger til å:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Behandle og svare på henvendelser</li>
                <li>Planlegge og gjennomføre befaringer</li>
                <li>Utarbeide tilbud og avtaler</li>
                <li>Forbedre våre tjenester og nettside</li>
              </ul>
            </section>

            <section>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                4. Lagring og sikkerhet
              </h3>
              <p>
                Dine opplysninger lagres sikkert og slettes når de ikke lenger er nødvendige 
                for formålet de ble samlet inn for. Vi deler ikke dine opplysninger med 
                tredjeparter uten ditt samtykke, med mindre det er påkrevd ved lov.
              </p>
            </section>

            <section>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                5. Dine rettigheter
              </h3>
              <p className="mb-2">Du har rett til å:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Be om innsyn i hvilke opplysninger vi har om deg</li>
                <li>Be om retting eller sletting av opplysninger</li>
                <li>Trekke tilbake samtykke</li>
                <li>Klage til Datatilsynet</li>
              </ul>
            </section>

            <section>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                6. Kontakt oss
              </h3>
              <p>
                Har du spørsmål om personvern? Kontakt oss på{" "}
                <a href="mailto:post@altiild.no" className="text-primary hover:underline">
                  post@altiild.no
                </a>{" "}
                eller ring{" "}
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
