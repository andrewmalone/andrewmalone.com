---
layout: post
permalink: :collection/index.html
---
{% assign tags = "uke, guitar, bass" | split: ", " %}
{% for tag in tags %}
{{ tag }}
{% endfor %}

{% for gear in site.gear %}
{{ gear.title }}
{% endfor %}