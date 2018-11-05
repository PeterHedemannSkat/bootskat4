---
layout: default
title: Tilgængelighedskrav
breadcrumb:
  - name: Hjem
    url: index
  - name: Non-funktionelle krav
---

## Browserunderstøttelse

Skatteforvaltningens løsninger skal som minimum følge de tekniske krav til
nem id: https://www.nemid.nu/dk-da/om-nemid/tekniske_krav/

Understøttelse af følgende:

- Windows
  - Google chrome (Current - 1) og Current
  - Firefox (Current - 1) og Current
  - Edge (Current - 1) og Current
  - Internet explorer 11
  - Internet explorer 10 \*
- Android 4.2, 4.4 og 5.x, 6.x, 7.x
  - Google chrome
  - Internet (den indbyggede) \*
  - Firefox \*
- IOS 7, IOS 8, IOS 9, IOS 10
  - Safari (Current - 1) og Current
  - Google chrome (Current - 1) og Current
- Windows phone
  - Internet explorer 10 \*
- OSX
  - Safari
  - Google chrome

Guiden indeholder i vid udstrækning elementer fra HTML5 og CSS3, der ikke er
fuldt understøttede i alle browsere. Det er tilladt at benytte sådanne elementer
progressivt, så længe de ikke er nødvendige for funktioner eller ødelægger look
and feel.

\* Disse browsers understøttes kun funktionelt

---

## HTML Version

Alle sites skal bruge HTML5 specifikationen. For at bruge denne specifikation skal html elementet udfyldes således:

{% capture example %}

<!DOCTYPE html>
<html lang="da">
...
</html>
{% endcapture %}
{% include example.html content=example hide_example=true %}

OBS: Siderne skal også kunne parses som XML. Det betyder at:

- Alle elementer lukkes (inkl. br, hr, img, input, link og meta).
- Alle elementer og attributter skal skrives med små bogstaver.
- Attributter skal sættes (inkl. selected og disabled), så hvis den ønskes tom, så sættes den ="".
- Attributter skal skrives med " ".
- Inline scripts skal skrives i en CDATA sektion.
- Og-tegn, mindre-end-tegn og større-end-tegn må ikke skrives som tekst.
- Alle sider skal være deklareret som utf-8.

---

## HTTPS - TLS

Alle sider og dertilhørende includes skal beskyttes med HTTPS. Skal understøtte
den nyeste version af TLS og må ikke have mulighed for fallback til SSL

## jQuery

jQuery skal inkluderes manuelt i projektet. Det skal altid være den senste
version af jQuery i enten version 1.x eller 3.x som bruges i en løsning
