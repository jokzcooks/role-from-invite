/*
  A basic discord bot created by Jokzyz. 
  Includes features like auto-dming new members, 
  setting autoroles based on invite link, 
  sending notifications when members are typing, etc
*/

// Imports the discord.js module
const Discord = require('discord.js')

// Creates an instance of a Discord client
const client = new Discord.Client()

// Imports main config items
const config = require('./config.json')
const botname = config.botname
const twitter = config.twitter
const token = config.token
const server = config.server
const serverownerid = config.serverownerid
const serverownerdiscord = config.serverownerdiscord

// Imports config items for your webhooks
const webhookid = config.monitorchannelwebhookid
const webhooktoken = config.monitorchannelwebhooktoken

// Creates webhook constant from id and token
const myHook = new Discord.WebhookClient(webhookid, webhooktoken)

// Imports names for the embed author 
const embedtitle1 = config.embedtitle1
const embedtitle2 = config.embedtitle2
const embedtitle3 = config.embedtitle3

//Imports images for the embed image
const embedimageurl1 = config.embedimageurl1
const embedimageurl2 = config.embedimageurl2
const embedimageurl3 = config.embedimageurl3

//Imports colors for the embeds
const embedcolor1 = config.embedcolor1
const embedcolor2 = config.embedcolor2
const embedcolor3 = config.embedcolor3

//Imports role ids
const role1id = config.role1id
const role2id = config.role2id
const role3id = config.role3id

//Imports role names
const role1name = config.role1name
const role2name = config.role2name
const role3name = config.role3name

//Creates constant for the fetchinvites items
const invites = {};

// Logs in the console when the bot has started, also sets variable for messages depending on if autorole is on or not
client.on('ready', () => {
  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
        invites[g.id] = guildInvites;
    });
});
  console.log(botname + ' active!');
});

//The main function of my bot: when a member joins, it will check if the invite code matches jcinvitecode, orinvitecode, 
//or staffinvitecode, and gives them a rank based on which code they join with. It also sends the new member two direct
//messages. One that welcomes them, and one that tells them that they recieved a role. The last thing it does is send an
//imbed to the staff channel with variables specific to that code.
client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
      const ei = invites[member.guild.id];
      invites[member.guild.id] = guildInvites;
      const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
      console.log(invite.code)
      if (invite.code === "INSERTINVITECODE1") {
        member.send("<@" + member.id + ">, welcome to " + server + "! Glad to have you here! If you have any questions, open a support ticket, or dm <@" + serverownerdiscord + ">!")
        member.addRole(role1id)
        member.send('You have been given the role, "' + role1name + '"')
        let embed = new Discord.RichEmbed()
        .setColor(embedcolor1)
        .setAuthor(embedtitle1, embedimageurl1, twitter)
	      .setTimestamp()
        .setFooter(botname,)
        .setDescription('A new member, <@' + member.id + '>, has joined using code, "INSERTINVITECODE1," and was given role, <@&' + role1id + '>!')  
        myHook.send(embed);
      }
      else {
      if (invite.code === "INSERTINVITECODE2") {
        member.send("<@" + member.id + ">, welcome to " + server + "! Glad to have you here! If you have any questions, open a support ticket, or dm <@" + serverownerdiscord + ">!")
        member.addRole(role2id)
        member.send('You have been given the role, "' + role2name + '"')
        let embed = new Discord.RichEmbed()
        .setColor(embedcolor2)
        .setAuthor(embedtitle2, embedimageurl2, twitter)
        .setTimestamp()
        .setFooter(botname,)
        .setDescription('A new member, <@' + member.id + '>, has joined using code, "INSERTINVITECODE2," and was given role, <@&' + role2id + '>!')  
        myHook.send(embed); 
      }
      else {
        if (invite.code === "INSERTINVITECODE3") {
          member.send("<@" + member.id + ">, welcome to " + server + "! Glad to have you here! If you have any questions, open a support ticket, or dm <@" + serverownerdiscord + ">!")
          member.addRole(role3id)
          member.send('You have been given the role, "' + role3name + '"')
          let embed = new Discord.RichEmbed()
          .setColor(embedcolor3)
          .setAuthor(embedtitle3, embedimageurl3, twitter)
          .setTimestamp()
          .setFooter(botname,)
          .setDescription('A new member, <@' + member.id + '>, has joined using code, "INSERTINVITECODE1," and was given role, <@&' + role3id + '>!')  
          myHook.send(embed); 
        }
    }
  }
  });
});

// Logs the bot in
client.login(token);