{% assign colors = site.data.colors | where:"category", include.name %}

{% for color in colors %}

<div class="card">
    <div class="card-header" style="background-color: #{{ color.HEX }};{% if color.text %}color:{{ color.text }}{% endif %}">
        {{ color.name }}
    </div>
    <ul class="list-group list-group-flush">
        {% if color.PMS %}
        <li class="list-group-item" style="background-color: #{{ color.HEX }};{% if color.text %}color:{{ color.text }}{% endif %}">PMS {{ color.PMS
            }}</li>
        {% endif %}
        <li class="list-group-item" style="background-color: #{{ color.HEX }};{% if color.text %}color:{{ color.text }}{% endif %}">CMYK
            {{ color.CMYK }}</li>
        <li class="list-group-item" style="background-color: #{{ color.HEX }};{% if color.text %}color:{{ color.text }}{% endif %}">RGB
            {{ color.RGB }}</li>
        <li class="list-group-item" style="background-color: #{{ color.HEX }};{% if color.text %}color:{{ color.text }}{% endif %}">HEX {{ color.HEX
            }}</li>
    </ul>
</div>
{% endfor %}
