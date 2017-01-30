---
category: uke-breakbeat
tags: 165bpm
audio_main:
  file: ubb34
audio_base_beat:
  file: Bb34 base beat
audio_chopped_beat:
  file: Bb34 chopped beat
audio_beat2:
  file: Bb34 beat 2
audio_simple_beat:
  file: Bb34 simple beat
audio_beat:
  file: Bb34 drums combined

---
{% include audio.html audio=page.audio_main %}

There's a lot going on here for a short loop. First, I created a simple drum loop:
{% include audio.html audio=page.audio_base_beat %}

That loop is not used directly - I chopped it up and rearranged it:
{% include audio.html audio=page.audio_chopped_beat %}

Then I added a second beat with offbeat bass drum hits:
{% include audio.html audio=page.audio_beat2 %}

To bind everything together, I created a very simple third beat:
{% include audio.html audio=page.audio_simple_beat %}

Here's all three beats together:
{% include audio.html audio=page.audio_beat %}

There's also two synth parts, and then the ukulele part is also processed pretty severely on top of that, mainly using the [Frekvens] frequency shifter effect.

{% include img src="ubb34.jpeg" alt="KORG Gadget screenshot" %}

Made with:

* [KORG Gadget]
* [AUM]
* [Frekvens]
* [AudioEffX]
* {% include gear/baritone %}

{% include links.markdown %}