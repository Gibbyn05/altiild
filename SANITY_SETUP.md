# Sanity CMS Setup - Visuell Innholdsstyrer

Du har nå Sanity CMS konfigurert. Dette er en profesjonell visuell redaktør der kunden kan endre innholdet på nettsiden uten å vite hvordan koden fungerer.

## Kom i gang

### 1. Opprett Sanity-prosjekt

```bash
npm run studio:dev
```

Første gang du kjører dette, vil Sanity be deg om å:
- Logge inn med GitHub/Google
- Opprett et nytt Sanity-prosjekt
- Velg `production` dataset
- Velg en kommune for regionen

### 2. Hva som skjer når du kjører `npm run studio:dev`

- Sanity Studio åpnes på **http://localhost:3333**
- Du kan nå redigere innhold visuelt
- Alle endringer lagres i Sanity Cloud

## Innholdstyper som er satt opp

### 📝 Blog Post
- Tittel
- URL-slug
- Beskrivelse
- Hovedbilde
- Innhold (rikt tekst-editor)
- Forfatter
- Publiseringsdato

### 🔧 Tjeneste (Service)
- Tittel (norsk)
- URL-slug
- Beskrivelse
- Hovedbilde
- Innhold (rikt tekst-editor)
- Publiseringsdato

### 📄 Side (Page)
- Tittel (norsk)
- URL-slug
- Beskrivelse
- Hero-bilde
- Innhold (rikt tekst-editor)
- Publiseringsdato

## Rikt tekst-innhold

Alle innholdstyper støtter:
- **Formatering**: Bold, Italic, Code, Underline, Strike-through
- **Overskrifter**: H1, H2, H3, H4
- **Sitater**: Blokkitat
- **Lister**: Punktlister og nummererte lister
- **Lenker**: Klikk for å legge til lenker
- **Bilder**: Legg inn bilder direkte i teksten

## Miljøvariabler

Du trenger disse miljøvariablene i `.env`:

```env
SANITY_STUDIO_PROJECT_ID=din-prosjekt-id
SANITY_STUDIO_DATASET=production
```

Sanity vil automatisk sette disse når du kjører `npm run studio:dev` første gang.

## For produksjon

### Deploy Sanity Studio til nett

```bash
npm run studio:build
```

Dette bygger en statisk versjon som kan deployes til Vercel, Netlify, osv.

### Koble React-appen til Sanity

I dine React-komponenter kan du hente innhold fra Sanity:

```typescript
import { createClient } from 'sanity'

const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

// Hent alle tjenester
const services = await client.fetch(`*[_type == "service"]`)

// Hent en spesifikk side
const page = await client.fetch(`*[_type == "page" && slug.current == "om-oss"][0]`)
```

## URL-strukturen dine blir slik

### Blog Posts
- `/blog/min-blogg-tittel` - hentes fra `slug.current`

### Tjenester
- `/tjenester/peisinstallasjon` - hentes fra `slug.current`

### Sider
- `/om-oss`, `/dokumentasjon` osv - hentes fra `slug.current`

## Ord på norsk i Sanity-grensesnittet

- **Tjeneste** = Service
- **Side** = Page
- **Blog Post** = Blog Post (samme på engelsk)
- **Tittel** = Title
- **Innhold** = Body
- **Publisert dato** = Published date

## Fordeler med Sanity

✅ Visuell redaktør - ingen koding nødvendig
✅ Rikt innholdsformat - tekst, bilder, video
✅ Versjonskontroll - se hvem som endret hva
✅ Automatisk deployment - endringer publiseres med én gang
✅ Scalablity - kan håndtere stort innhold
✅ API-basert - kan brukes fra hvor som helst

## Neste steg

1. Kjør `npm run studio:dev`
2. Logg inn / opprett prosjekt
3. Opprett noe innhold som test
4. Integrer Sanity client i React-appen
5. Hent og vis innhold fra Sanity

---

**Alt er nå satt opp!** 🚀
