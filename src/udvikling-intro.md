---
layout: default
title: Introduktion
readmore:
  - text: Framework udvikling
    link: udvikling-framework
  - text: HTML-guide
    link: udvikling-elementer
---

Denne guide er tiltænkt udviklere, der står overfor, at skulle udvikle eller
opdatere løsninger til Skatteforvaltningens websites.

Guiden behandler både de overordnede designprincipper, men også formateringen
af enkelte HTML-elementer.

Alle løsninger er baseret på Twitter Bootstrap (v4.1.3).

---

## Hjælp

I guidens tekster formateres teknisk indhold, hovedsageligt CSS-klassenavne og HTML-tags således: `.css-klassenavn` og filnavne skrives således: _skts.less_.

Længere kodestumper vil være formaterede i blokke:

{% capture example %}

<p>
  Penge tilbage: <span class="float-right">1000 kr.</span>
</p>

{% endcapture %}
{% include example.html content=example %}

---

## Tilpasninger

HTML-kode skal være valid html. Det skal være velformet og semantisk korrekt.

Eventuelle tilpasninger kan tilføjes i tilfælde hvor der ønskes funktionalitet,
som ikke understøttes af guiden. Tilpasninger skal visuelt have samme ’look
and feel’, som de øvrige elementer.

Tilpasninger skal laves i et separat stylesheet, skrevet i less. Alle
stylesheets sammensættes til _skat.min.css_

---

## Retningslinjer

HTML-kode skal være valid html og være velformet og semantisk korrekt.

I det omfang det er muligt og giver mening, er det dog tilladt at berige
integrationer med Javascript, så længe det ikke indvirker negativt på
brugeroplevelsen og guidens øvrige principper.

JQuery indeholder en række komponenter og javascriptbibliotekter, der er
kompatible ud af boksen, hvorfor det er hensigtsmæssigt at tage udgangspunkt i
disse.

Javascript tilføjes til _skat.min.js_, som inkluderes i bunden af HTML siden.

---

{% include readmore.html content=page.readmore %}
