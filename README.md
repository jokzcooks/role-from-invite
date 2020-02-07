# role-from-invite
Hey guys, thanks for checking out my first discord.js based project!

The main purpose of this bot is to automatically assign roles to new members based on the invite code they joined with.

I created it for my own verify server, but since I found a lot of questions online about a bot like this, I just decided to go ahead and make it.

# Requirements:

* Node JS: https://nodejs.org/en/download/

A source-code editor, I use and recommend Visual Studio Code: https://code.visualstudio.com/

A way to download this depository, Git: https://git-scm.com/downloads

* Discord bot:

Create one by going to https://discordapp.com/developers/

"New Application"

Insert name and then "Create"

"Bot" under settings tab

"Add Bot" then "Yes do it"

Here you can get your bot token


* Discord dev mode:

Start in discord, click the "Settings" gear next to your name

Click "Appearance"

Scroll down and toggle on "Developer Mode"

You can now click on channels, roles, and users to obtain their ID's


# Setup

This is set up for you to use three different invite links with a different role for each of them. 

index.js is pretty self explanatory, so it should be easy to add or remove a new link setup if you want more than three, or to remove a link setup if you want less than three.

As you would expect, config.json is also set up to cater towards using three different invite links. 

You're going to want to open index.js with your text editor and replace INSERTINVITECODE1 in line 78 and 87 with your invite code that gives the new member role 1.

Do the same for INSERTINVITECODE2 and INSERTINVITECODE3, meaning you'll be replacing a total of 6 fields.

# config.json

Here is an example picture with labels that will make understanding config.json much easier:

botname:
The name of your bot. 
This is used to log in console when your bot starts.
This also serves as the footer for your embeds.

twitter:
Your twitter link.
This link is used in your embed titles as a hyperlink.

token:
Your discord bot token.
Used to log into your bot.
	
server:
The name of your server.
Used when the bot dm's new members, and tells them welcome to the server.
	
serverownerid:
Your discord profile id.
Found by enabling dev mode, then right clicking your name in discord.
Not currently serving any real purpose.
	
serverownerdiscord:
Your discord name and tag.
Ex: jokzyz#4121
Sent to new members in their welcome message.
	
monitorchannelwebhookid:
The webhook ID for the channel you would like the embeds to be sent to.
Create a webhook by right-clicking on a channel, clicking "Edit Channel," "Webhooks," then create a webhook.
Get webhook id from the webhook link: https://discordapp.com/api/webhooks/id/token
	
monitorchannelwebhooktoken:
The webhook ID for the channel you would like the embeds to be sent to.
Create a webhook by right-clicking on a channel, clicking "Edit Channel," "Webhooks," then create a webhook.
Get webhook token from the webhook link: https://discordapp.com/api/webhooks/id/token
	
embedtitle1, embedtitle2, and embedtitle3:
These serve as the title for each embed.
embedimageurl1, embedimageurl2, embedimageurl3:
These serve as the images for each embed.
Formatted as a url, such as "https://storage.googleapis.com/blerp-web-images/static/discord/Discord_logo_circle-tiny.png"
Using this image address for all three will give a basic discord bot image to your embeds.
	
embedcolor1, embedcolor2, embedcolor3:
These serve as the colors for the embeds.
Formatted in hexcode, must be a # followed by 6 characters
Use this site to create your own: https://htmlcolorcodes.com/

role1id, role2id, role3id:
These serve as the roles assigned for each invite link.
role1 is assigned to a user that joins with invite link 1, etc.

role1name, role2name. role3name:
These serve as the names of each role assigned
Used in the welcome messages
	
#Running the bot
If you have set everything up correctly, and you are using visual studio code, you should be able to open the VSC terminal with CTRL+grave and then type "node index.js"

This will then either print "botname active" in console, or give you an error to fix. If you can't figure out how to fix your issue, or have any other concerns, feel free to open an Issue here and dm me on discord (jokzyz#4121). 
