---
title: Sample chopping and shuffling
audio1:
  file: musicbox
  title: Final track
audio2:
  file: musicbox-radio
  title: Music box sample
audio3:
  file: musicbox-shuffled
  title: Music box shuffled through Egoist
audio4:
  file: seekbeats_135bpm
  title: SeekBeats original beat
audio5:
  file: soft-beat
  title: Warped beat
audio6:
  file: loud-beat
  title: Basic resequenced beat
---
One thing I like playing with when working with sound is slicing and reordering samples — so I tend to be drawn to apps that allow this in some way. This track started when I was visiting family and the kids were playing with an old [Fisher Price radio music box][radio], which I sampled directly into the iPad microphone.

{% include audio.html audio=page.audio2 %}

[Egoist] is a very cool app that does slicing, reordering, effects, and more. It allows you to chop your sample into different slices, play them back in any order, and sequence together different variations. I fed the music box sample into it, and came up with this:

{% include audio.html audio=page.audio3 %}

I really liked the rhythmic thing going on here, and I wanted to add some beats to it. I'd been playing with [SeekBeats], a new drum synthesizer and sequencer. I started with a basic beat:

{% include audio.html audio=page.audio4 %}


That beat didn't match the tempo of my music box pattern, so I fed it through Egoist to match the tempo and simplify it:

{% include audio.html audio=page.audio6 %}

Then I created a completely different variation in Egoist using way more effects for a filtered slightly glitchy feel.

{% include audio.html audio=page.audio5 %}

For the final track I added some synth and piano using [SampleTank] and some bass from [iFretless Bass]. Everything was recorded and mixed in [Cubasis] and then finally processed through [Final Touch].

{% include audio.html audio=page.audio1 %}

[radio]: https://www.youtube.com/watch?v=Y8FXPFfuSM8
{% include links.markdown %}