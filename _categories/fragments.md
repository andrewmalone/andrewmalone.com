---
title: Fragments
layout: page
permalink: fragments/index.html
---
Ever since I got my first ukulele for Christmas in 2010, I've been somewhat obsessed with playing it and developing different musical ideas. I have a tendency to come up with patterns that I play over and over. They aren't quite songs, though some of them do have several sections. Most have no lyrics or even melody.

I've built up quite a few of these over the past six years. I don't know if any will ever turn into full songs, but I thought I'd at least document and memorialize them.

So far, there are {{site.categories.fragments.size}} fragment posts:
{% assign posts = site.categories.fragments | sort: 'date' %}
{% for post in posts %}
{% if post.summary != true -%}* [{{post.title}}]({{post.url}}){% endif %}{% endfor %}


## Recording notes
I often go overboard when making music - it's hard to resist adding additional tracks or effects. For this series, I've made a conscious effort to keep things as simple as possible - no click track, no overdubs, just playing and recording.

I created a simple setup in [AUM] (which is amazing! - but that needs it's own post), running the ukulele directly in. I added a little amp sound and reverb using [ToneStack], and mixed the direct signal with the effect signal. This mix then gets directly recorded into [Audioshare]. With this setup, I can quickly capture a bunch of ideas at once, without having to mess with creating new projects or files each time.

{% include links.markdown %}