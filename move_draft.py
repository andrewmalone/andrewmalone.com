import sys
import shutil
import subprocess
import os
from datetime import datetime

draft_file = sys.argv[1]
# draft_file = "_drafts/uke-ideas/Variations in c.md"
today = datetime.now().strftime("%Y-%m-%d")

# find if there is an audio file to deal with and check for categories
category = ""
audio_files = []
with open(draft_file) as f:
    front_matter = False
    for line in f:
        # print line
        if line == "---\n":
            if front_matter is False:
                front_matter = True
                continue
            else:
                break
        if "file:" in line:
            audio_file = line.split(":")[1]
            audio_files.append(audio_file.strip())
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
    # move the audio files
    shutil.move(old_file, new_file)
    # shutil.move(old_file, new_file)
    # convert to mp3
    subprocess.call(["lame", "-V6", new_file])

# move the file to posts and rename it
post_file = "_posts/{}{}-{}".format(category, today, draft_file.split("/")[-1].replace(" ", "-").lower())
shutil.move(draft_file, post_file)
