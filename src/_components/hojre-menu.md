---
title: Højremenu
order: 30
---

Videnssiden SKAT.dk har på indholdssider forskellige elementer i højre spalte. Her beskrives de
forskellige elementer,
som dog ikke gøres ikke brug af i andre systemer, og derfor kan du ikke finde udvikler dele på
denne
i UDGen. Kontakt evt Digital Design og kommunikations afdelingen hvis du vil vide mere.

Højremenuen er links til ligestillede emnesider. Så kun det yderste punkt i brødkrummestien
påvirkes ved valg af et af de
viste menupunkter.

Det valgte punkt markeres med lys farve og pil ud mod indhold.

{% capture example %}

<ul class="link-list">
    <li>
        <a href="#">En anden side</a>
    </li>
    <li class="active">Den aktuelle side</li>
    <li>
        <a href="#">Endnu en side</a>
    </li>
</ul>
{% endcapture %}
{% include example.html content=example class="padded" %}

Højre spalte bruges på videnssiden skat.dk til andre blokke med relateret indhold. Teksten i
disse er centreret, da det er
korte afgrænsede sætninger.

### Kontaktwidget

Her vises kontaktdata til hjælp til indholdssiden. Ventetider indikeres med farvekoderne grøn
og rød alt efter længden på ventetiden. Eller hvis det ikke er muligt

**Kort ventetid**
{% capture example %}

<div class="contact">
    Har du spørgsmål om registreringsafgiften?
    <br />
    <br /> Ring til os på
    <br />
    <a href="tel:72222871">72 22 28 71</a>
    <br />
    <br /> Ventetid i øjeblikket:
    <br />
    <span class="text-success">Under 1 minut</span>
</div>
{% endcapture %}
{% include example.html content=example hide_markup=true class="padded" %}
**Lang ventetid**
{% capture example %}
<div class="contact">
    Har du spørgsmål om registreringsafgiften?
    <br />
    <br /> Ring til os på
    <br />
    <a href="tel:72222871">72 22 28 71</a>
    <br />
    <br /> Ventetid i øjeblikket:
    <br />
    <span class="text-danger">29 minut</span>
</div>
{% endcapture %}
{% include example.html content=example hide_markup=true class="padded" %}

**Udenfor telefontid**
{% capture example %}

<div class="contact">
    Har du spørgsmål om fradrag?
    <br />
    <br /> Ring til os på
    <br /> 72 22 28 71
    <br />
    <br /> Vi åbner i morgen kl. 09:00
    <br />
</div>
{% endcapture %}
{% include example.html content=example hide_markup=true class="padded" %}
### Læs mere

Hvis der er behov for relaterede sider kan de placeres i en grå boks med links.

### Fik du svar på dine spørgsmål?

Element der bruges til at samle brugerinput til den enkelte side. Vi bruger input til at
forbedre indholdet alt efter brugerinput.

Dette element kan også bruges i bunden af sider der kun har en kolonne.

{% capture example %}

<div class="skts-feedback text-center clearfix">
    <div class="skts-feedback__header">Fik du svar på dine spørgsmål?</div>
    <div class="btn-group" data-toggle="buttons">
        <label class="btn skts-btn-secondary" id="feedback4ulabelYes">
            <input type="radio" name="options" id="option1" onclick="return false;"> Ja
        </label>
        <label class="btn skts-btn-secondary" id="feedback4ulabelNo">
            <input type="radio" name="options" id="option2" onclick="return false;"> Nej
        </label>
    </div>
</div>

{% endcapture %}
{% include example.html content=example %}
