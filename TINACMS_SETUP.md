# TinaCMS Setup Guide

Du har nå TinaCMS konfigurert. For å få det til å fungere må du:

## 1. Opprett TinaCMS Cloud Prosjekt

Gå til https://app.tina.io/ og logg inn/registrer deg.

### Steg:
1. Klikk **"Create new project"**
2. Velg **GitHub** som backend (du blir bedt om å autorisere)
3. Velg ditt repository: **gibbyn05/altiild**
4. Velg branch: **main** (eller din branch)
5. Vent på at prosjektet blir opprettet

## 2. Få Client ID og Token

Etter at prosjektet er opprettet:

1. I TinaCMS dashboard, gå til **Settings** → **Access Tokens**
2. Kopier **Client ID** (også kalt Project ID)
3. Generer en ny **Auth Token** og kopier det
4. **VIKTIG**: Beskytt disse - de er som passord!

## 3. Sett Environment Variabler

Du trenger å sette disse 2 stedene:

### Lokalt (for `npm run dev`):

Edit `.env`:
```
NEXT_PUBLIC_TINA_CLIENT_ID=your-client-id-here
TINA_TOKEN=your-token-here
```

### På Vercel (for produksjon):

**Dette er viktig!** Som i screenshot du sendte - hvis du glemmer dette vil den ikke fungere på nett.

1. Gå til https://vercel.com → ditt prosjekt → **Settings**
2. Velg **Environment Variables**
3. Legg til:
   - Navn: `NEXT_PUBLIC_TINA_CLIENT_ID` | Verdi: din Client ID
   - Navn: `TINA_TOKEN` | Verdi: din Token

4. **Viktig**: Velg hvilke miljøer det skal være for:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

## 4. Test Lokalt

```bash
npm run dev
```

Besøk: `http://localhost:5173/admin`

Du skal se TinaCMS admin interface!

## 5. Bygg for Produksjon

```bash
npm run build
```

Dette bygger både React-appen og TinaCMS admin interface.

## 6. Deploy til Vercel

Når du pusher til GitHub, Vercel bygger automatisk hvis du har gjort:
- ✅ Satt environment variabler
- ✅ Committed koden
- ✅ Pushet til repository

## Struktur

Etter build vil du ha:
- `/admin/index.html` - TinaCMS interface
- `/admin/config.json` - TinaCMS config
- `dist/` - Bygget React app

## Feilsøking

**"No access" på `/admin`:**
- Sjekk at env variabler er satt både lokalt og på Vercel
- Sjekk at Client ID og Token er riktige
- Prøv å regenerere en ny token

**Build feiler:**
- Sjekk at `NEXT_PUBLIC_TINA_CLIENT_ID` er satt
- Sjekk at `TINA_TOKEN` er satt
- Kjør `npx tinacms build --skip-cloud-checks`

**Blank side på `/admin`:**
- Åpne browser console (F12) og se etter feil
- Sjekk at du er logget inn på GitHub
- Prøv å refreshe siden

## Neste Steg

1. ✅ Opprett TinaCMS prosjekt
2. ✅ Få Client ID og Token
3. ✅ Sett env variabler
4. ✅ Test `npm run dev`
5. ✅ Sett env variabler på Vercel
6. ✅ Deploy

Da skal kunden kunne redigere innhold på `/admin`! 🎉
