

## Problem

Faviconet som vises i Google-søkeresultater viser fortsatt Lovable-hjertet. `index.html` refererer allerede til `/favicon.png`, men filen i `public/favicon.png` ble muligens ikke riktig oppdatert, eller det kan være at `public/favicon.ico` fortsatt inneholder det gamle Lovable-ikonet.

## Plan

1. **Overskrive `public/favicon.png`** med logoen fra `src/assets/logo.png` (kopiere på nytt for å sikre at den faktisk er oppdatert).
2. **Overskrive `public/favicon.ico`** med samme logo, siden noen nettlesere og søkemotorer foretrekker `.ico`-filen.
3. Verifisere at `index.html` allerede peker til riktig fil (dette er allerede på plass).

Google kan bruke tiden sin på å oppdatere cached favicon -- dette kan ta dager/uker etter publisering. Men endringene vil sikre at riktig ikon serveres.

