import sys
import shutil
import subprocess
import os
from datetime import datetime

draft_file = None
video = False
for var in sys.argv[1:]:
    if var[0] == "-":
        if var == "-v":
            video = True
    else:
        draft_file = var
	

today = datetime.now().strftime("%Y-%m-%d")

# find if there is an audio file to deal with and check for categories
category = ""
audio_files = []
with open(draft_file) as f:
    front_matter = False
    main_audio = False
    for line in f:
        # print line
        if line == "---\n":
            if front_matter is False:
                front_matter = True
                continue
            else:
                break
        if "audio:" in line or "audio_main:" in line:
        	main_audio = True
        if "file:" in line:
            audio_file = line.split(":")[1]
            audio_files.append(audio_file.strip())
            if main_audio is True:
            	main_audio = audio_file.strip()
        if "category" in line:
        	category = line.split(":")[1].strip() + "/"

# create a new folder for the audio files
if len(audio_files) > 0:
    audio_dir = "audio/{}".format(today)
    try:
    	os.makedirs(audio_dir)
    except:
    	pass

# move the audio files
for audio_file in audio_files:
    # move the files
    # os.rename(old, new)
    old_file = "audio/drafts/{}.wav".format(audio_file)
    new_file = "{}/{}.wav".format(audio_dir, audio_file)
    new_file_base = new_file.split(".")[0]
    # move the audio files
    shutil.move(old_file, new_file)
    # shutil.move(old_file, new_file)
    # convert to mp3
    subprocess.call(["lame", "-V6", new_file])

    # convert to video
    if video is True and audio_file == main_audio:
        command = [
            'ffmpeg',
            '-i',
            new_file,
            '-filter_complex',
            '[0:a]showwaves=s=400x300:mode=cline:rate=25,format=yuv420p[vid]',
            '-map',
            '[vid]',
            '-map',
            '0:a',
            '-codec:v',
            'libx264',
            '-crf',
            '18',
            '-preset',
            'fast',
            '-codec:a',
            'aac',
            '-strict',
            '-2',
            '-b:a',
            '192k',
            "{}.mp4".format(new_file_base)
        ]
        subprocess.call(command)

# move the file to posts and rename it
post_file = "_posts/{}{}-{}".format(category, today, draft_file.split("/")[-1].replace(" ", "-").lower())
shutil.move(draft_file, post_file)
