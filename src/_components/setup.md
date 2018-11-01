---
title: Setup
order: 10
---

Siden sættes op ved at der i `<body>`, kun er tre elementer (udover `<script>`-tags)

- `<header>`
- en `<div>` med klassen `.container`.
- `<foooter>`

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
    <!-- 
        Script tags
    -->
</body>

{% endcapture %}
{% include example.html content=example hide_example=true %}
