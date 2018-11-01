---
title: Setup
order: 10
---

Et element centreres ved brug af `.container`. Elementet fylder hele skærmen, når det ikke er i en
`.container`.

Et eksempel er denne guide. `header` og `footer` er ikke i en `.container`, men det er menuen og
alt indhold.

`footer` "låses" til bunden af siden (hvis indholdet ikke er længere end browserens vindue) ved
at sætte alle elmenter (undtagen `footer`) i en container med klassen `.skts-wrap`. Et `div`
element med klassen `.skts-push` skal indsættes lige før `.skts-wrap` container afsluttes.

{% capture example %}

<body>
    <header>
        Header content
    </header>
    <div class="container">
        Indhold og evt. venstre menu
    </div>
    <footer>
        Footer content
    </footer>
</body>

{% endcapture %}
{% include example.html content=example hide_example=true %}
