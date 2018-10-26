---
title: Buttons
order: 20
---

- Knapper anvendes, når brugeren udfører en funktionalitet på en side, fx gemme, beregne,
  fortryde eller sende.
- (Hvis brugeren blot sendes videre til en anden side skal der bruges et link.)
- Hvis en knap er sidste trin i en proces, skal der, efter brugeren har trykket på knappen,
  komme en ny side, som bekræfter over for brugeren, at handlingen bag knappen er gennemført.
- Knapper skal navngives konsistent på tværs af løsninger. For information om navngivning se
  afsnit om tekster.

### Tilstande

Alle knapper har 3 tilstande:

- Normal tilstand
- Hover (ved mouseover – hjælper til at vise at den er klikbar)
- Disabled, bruges når en funktion endnu ikke er aktiv, fx
  - når evt. obligatoriske felter ikke er udfyldt
  - En slet funktion, hvor der skal vælges et element før knappen er aktiv
  - Betal – du skal tilmeldes betaling i et andet flow
  - Server side valideringer – når felter ikke er udfyldt korrekt

### Den fremhævede knap: Primary button

- Bruges, når der en handling, som får konsekvenser for siden, fx afslutning af et flow
- Placeres altid til højre.
- Der kan kun være én primær knap synlig pr. side
- Dette er generiske funktioner
  - Godkend – godkender de indtastede oplysninger
  - Gem – gemmer oplysninger
  - Overfør – overfører oplysninger fra fx et undermodul til ret årsopgørelsen

{% capture example %}
<button type="button" class="btn btn-primary">Primary button</button>
{% endcapture %}
{% include example.html content=example %}

<p>En knap gøres disabled ved at tilføje klassen <code>.disabled</code></p>
{% capture example %}
<button type="button" class="btn btn-primary disabled">Disabled primary button</button>
{% endcapture %}
{% include example.html content=example %}

### Secondary button

- Bruges altid sammen med en primær knap, når en alternativ handling er mulig. Den er aldrig
  alene.
- Placeres altid til venstre for primær knappen.
- Den sekundære knap springes over i tab-rækkefølge. Dvs. hvis du navigerer via tastatur vil
  primær knap vælges før den sekundære, selvom denne ligger til venstre.
- Adskiller sig i farven, så man tydeligt aflæser at handlingen bag den sekundære knap er en
  slags nødudgang fra den oplagte handling.
- Eksempel på brug / navngivning - Annuller - ligger oftest som første trin i et flow,
  funktionsmæssig afbryder den flowet og sletter eventuelle indtastninger - Tilbage -
  går altid et trin tilbage i et flow - Fortryd

{% capture example %}
<button type="button" class="btn btn-secondary">Secondary button</button>
{% endcapture %}
{% include example.html content=example %}

### Sammenstilling af knapper - buttongroup

Primære og sekundære knapper sidestilles og placeres hhv. til højre (primær) og venstre
(sekundær).

Der tilstræbes at der kun er to knapper i en buttongroup, men der kan evt være flere sekundære
knapper.

{% capture example %}

<div class="clearfix skts-standard-buttons">
    <input type="submit" id="prevStep1" class="btn btn-primary float-right" value="Næste">
    <button type="button" id="nextStep1" class="btn btn-secondary float-left" value="Annuller" onclick="window.history.back()">Tilbage</button>
</div>
{% endcapture %}
{% include example.html content=example %}

### Transport links

Transport links bruges når et link skal kalde en ny side. Se også beskrivelse af hvornår der
anvendes links / knapper.

Hvis linket findes på en navigationsside, skal den have en undertekst, der kort beskriver de
funktioner / det indhold, der
findes på siden der linkes til. Transportsider ejes af DKD og bygges kun centralt –
[se eksempel på transportside](typiskesider.html).

{% capture example %}

<a href="#" class="transport-box">
    <h2>Link header uden undertekst</h2>
</a>
<a href="#" class="transport-box transport-box--large">
    <h2>Link header med undertekst</h2>
    <p>Her er link beskrivelsen </p>
</a>
{% endcapture %}
{% include example.html content=example %}

Klassen <code>.transport-box</code> sættes på
<code>a</code> elementet. En undertekst kan sættes på ved at bruge klassen
<code>.transport-box--large</code>
