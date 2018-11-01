---
title: Alerts
order: 40
---

Dette er elementer, der bliver brugt for at skabe ekstra opmærksomhed omkring en handling eller
en fejlmeddelelse,
fx en vigtig meddelelse fra os som skal tydeliggøres. Alerts er opdelt i tre klasser.

### Info

- bruges primært for at give brugerne en vigtig besked, fx husk at overføre beløbet længere
  ned på siden.

{% capture example %}

<div class="alert alert-info" role="alert">
    <h2>Vær opmærksom på</h2>
    <p> at vi nu har slettet din indberetning af private renter til 100270-0406 på
        <span class="skts-postfix-kr skts-postfix-text">5.000</span>
    </p>
</div>

{% endcapture %}
{% include example.html content=example %}

### Warning

- aktiveres først, når brugerne går videre i løsningen, og der er fejl eller mangler på
  indtastningssiden, fx et obligatorisk felt der ikke er udfyldt.
- Er typisk en advarsel, der aktiveres på serveren.

_Warning besked_

{% capture example %}

<div class="alert alert-warning" role="alert">
    <h2>Vi har opdateret tallene i din forskudsopgørelse</h2>
    <p>
        Stemmer tallene ikke med dine forhold i 2015, kan du rette dem og beregne et nyt
        skattekort.
    </p>
</div>

{% endcapture %}
{% include example.html content=example %}

### Error/Danger

- aktiveres først, når brugerne går videre i løsningen, og der er fejl eller mangler på
  indtastningssiden, fx et obligatorisk felt der ikke er udfyldt.
- Er typisk en fejl, der aktiveres på serveren.

{% capture example %}

<div class="alert alert-danger" role="alert">
    <h2>Det ser ud som om noget ikke stemmer.</h2>
    <p>
        Beløberne i "Jubilæums gratiale mv." (#568) og "Tingsgaver" (#569) er tilsammen højere
        end "Jubilæumsgratiale/fratrædelsesgodtgørelse"
        (#243).
    </p>
    <p>
        Rubrikerne som du gerne må tjekke, er markeret med rødt</p>
    <p>
        Gå til: <a href="#">rubrik 243<span class="sr-only"> Gå til rubrik</span></a>,
        <a href="#">rubrik 568<span class="sr-only"> Gå til rubrik</span></a> eller
        <a href="#">rubrik 569<span class="sr-only"> Gå til rubrik</span></a>
    </p>
</div>

{% endcapture %}
{% include example.html content=example %}
