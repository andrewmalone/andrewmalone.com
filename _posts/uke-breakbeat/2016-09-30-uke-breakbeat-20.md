---
category: uke-breakbeat
tags: 111bpm
audio_main:
  file: ubb20
audio_bowl:
  file: ubb20 bowl
  title: Metal bowl sample
audio_fieldscaper:
  file: ubb20 fieldscaper
  title: Bowl sample processed with fieldscaper
audio_bowl_loop1:
  file: ubb20 bowl loop 1
  title: Sequenced bowl sample
audio_bowl_loop2:
  file: ubb20 bowl loop 2
  title: Pitched bowl sample
audio_beat:
  file: ubb20 beat
  title: Drum beat with bowl sample loops
audio_uke:
  file: ubb20 uke
  title: Ukulele loop
---
{% include audio.html audio=page.audio_main %}

There's a lot that went into this one...

I started with a sample of a metal bowl that I recorded on my phone (you can hear the kids in the background):
{% include audio.html audio=page.audio_bowl %}

Then I processed that in the [Fieldscaper] app to create this loop:
{% include audio.html audio=page.audio_fieldscaper %}

I took that loop into [KORG Gadget] and treated it two ways. First I sped it up and increased the pitch:
{% include audio.html audio=page.audio_bowl_loop2 %}

Then I sliced and sequenced it to create this more rhythmic loop:
{% include audio.html audio=page.audio_bowl_loop1 %}

I combined these together with a drum beat:
{% include audio.html audio=page.audio_beat %}

Then I recorded this ukulele part along with that beat:
{% include audio.html audio=page.audio_uke %}

I took that ukulele part, chopped it up and resequenced it to create the final result.

{% include img src="ubb20.jpeg" alt="KORG Gadget screenshot" %}

Made with:

* [KORG Module]
* [ToneStack]
* [Fieldscaper]
* [AUM]

{% include gear/baritone %}

{% include links.markdown %}