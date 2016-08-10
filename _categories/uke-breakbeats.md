---
title: Ukulele breakbeats
layout: page
permalink: uke-breakbeat/index.html
---
I love breakbeats - and I'm constantly studying them and trying to program them. Creating drum patterns is an easy way to kill some time commuting on the train to and from work. 

Looped beats can be pretty repetitive to listen to, so I've decided to add a little bit of ukulele to each beat and post the results.

So far, there are {{site.categories.uke-breakbeat.size}} uke breakbeat posts:

{% assign posts = site.categories.uke-breakbeat | sort: 'date' %}

{% for post in posts %}
{% if post.audio %}{% assign audio_file = post.audio %}{% else %}{% assign audio_file = post.audio_main %}{% endif %}
* {% if post.draft %}(draft) {% endif %}[{{post.title}}]({{post.url}})

	{% include audio.html audio=audio_file page=post %}
{% endfor %}

