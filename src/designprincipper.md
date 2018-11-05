---
layout: transport
title: Designprincipper
breadcrumb:
  - name: Hjem
    url: index
  - name: Design
---

## Vi sætter brugeren i centrum

Vi tager vi udgangspunkt i brugernes virkelighed for at kunne designe services,
der skaber værdi. Ved at arbejde tæt sammen med brugerne i designfasen. Gennem
co-creation, konceptafklaringer og løbende tests, bliver deres behov fundamentet
for vores løsninger.

---

## Mobile first

Skatteforvaltningens løsninger skal designes ud fra et mobile-first princip. Når
løsningerne skal fungere på små skærme, stiller det store krav til prioriteringen
af indholdet på siden. Tag derfor udgangspunkt i en mobilvisning, når du bygger
siden op. Indholdet skal være kort og præcist og hurtigt gøre det klart, hvad
formålet er med siden.

Elementer og trykflader skal være mobilvenlige. Google anbefaler en højde på
mindst 48px for knapper og call-to-action (CTA).

---

## Personalisering

Vores løsninger skal designes med fokus på personalisering. Især når brugeren er
logget på, skal brugeren kun præsenteres for relevant indhold. Alle felter og
rubrikker, der ikke er relevante for brugeren skal pakkes væk.

---

## Feedback

For at skabe tryghed og understøtte brugernes handlinger anbefales løbende
feedback i løsningerne. Feedbacken skal være venlig, imødekommende og
behjælpelig. Eksempler på feedback muligheder:

- Clientside validation
- Modals
- Alerts, vælg mellem info, warning og danger

[Læs mere i afsnittet om brug af elementer](#)

---

## Wizards

Wizards er små moduler eller løsninger, der skridt for skridt guider brugeren
igennem en opgave, fx at beregne kørselsfradrag eller et indberetnings flow.

Vi tilstræber os på at lave målrettede og fokuserede wizards med op til seks
trin. På indberetningssider kan det blive svært Her er det indholdet i
rubrikkerne, der er afgørende for wizardens udformning. Den kan eventuelt
afklares med forretningen/procesejeren

- En wizard skal gøre det let for brugeren at gennemføre en kompleks opgave ved
  at bryde opgaven ned i overskuelige trin.
- Hvert trin skal stille brugeren overfor et eller få simple valg.
- Tænk logik ind i wizarden, så du minimerer brugerens kognitive belastning.
- Lav hellere flere trin frem for at stille brugeren over for mange valg på
  samme side.
- Gør det tydeligt, hvad formålet er med wizarden, og gør det tydeligt, hvornår
  brugeren skal gå til næste trin.
- Lad wizarden åbne op på samme side, som den er placeret.
- Giv altid brugeren mulighed for at gå tilbage i eller ud af wizarden.

[Læs om wizards i brug af elementer](#)

---

## Brugervenligt sprog

Sproget i vores løsninger skal være forståeligt for alle brugere. Tekniske,
skattefaglige og systemfagligke termer skal derfor så vidt muligt omskrives til
almindeligt sprogbrug. For at sikre dette og et ensartet sprog på tværs af
styrelsernes løsninger, anbefales det, at sproget i løsningerne gennemskrives
af en redaktør fra Digital kommunikation og design.

---

## Responsivt design

- Alle Skatteforvaltningens kundevendte løsninger skal være responsive.
- For alle størrelser der angives i stylesheets skal dette angives med em.
- Der skal så vidt som muligt bruges bootstraps markup.
- Der må ikke bruges inline styling eller JavaScript. Alt styling og JavaScript skal angives i eksterne css og js filer.

---

## Fællesoffentlige krav

Skatteforvaltningens løsninger skal så vidt muligt overholde fællesoffentlige
krav og anbefalinger som beskrevet i "Udviklingsvejledning for
selvbetjeningsløsninger". Dog har kravene i denne guide forrang, hvis der er
modstridende krav. Vi arbejder på at optage fællesoffentlige krav til design i
Skatteforvaltningens Udviklings- og designguide, så vores leverandører ikke
selv skal forholde sig til de fællesoffentlige designguidelines.

[Læs om ”Udviklingsvejledninger for selvbetjeningsløsninger” i Arkitekturguiden](#)
