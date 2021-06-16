const Discord = require('discord.js');
const client = new Discord.Client({
	disableEveryone: true
});
const fetch = require("node-fetch");
require("dotenv").config();
const PREFIX = "!"; //CUSTOM PREFIX

client.on("ready", () => console.log("BOT: Online."));
client.on("warn", console.warn);
client.on("error", console.error);

client.on("message", async message => {
  if (message.author.bot || !message.guild) return;
  if (message.content.indexOf(PREFIX) !== 0) return;

  const args = message.content.slice(PREFIX.length).trim().split(" ");
  const cmd = args.shift().toLowerCase();

if (cmd === "meme") {
const request = require('node-superfetch');
const got = require('got');
var subreddit = [
        "burdurland",    //You can add more.
        "TurkeyJerky",  //You can add more.
    ];
var random = Math.floor(Math.random()*(subreddit.length-0+1)+0);
const embed = new Discord.MessageEmbed()
        got(`https://www.reddit.com/r/${subreddit[random]}/random/.json`).then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            .setColor("#586aea")
            embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments} | Subreddit : ${subreddit[random]}`)
            embed.setTimestamp()
            message.channel.send(embed);
        }) };

if (cmd === "help") {
const embed = new Discord.MessageEmbed()
  .setAuthor("Help Commands:", message.author.avatarURL())
  .setColor("#586aea")
  .setThumbnail(client.user.avatarURL())
  .addField("Commands:", `\`${PREFIX}meme\``, true)
  .setFooter("© 2021 Meme Bot v12")
  .setTimestamp()
  message.channel.send(embed)

}
if(cmd === "eval"){
  if(message.author.id !== "USER_ID") if (message.author.id !== "USER_ID2") if (message.author.id !== "USER_ID3") return message.channel.send("Administrators can use this command!");
    try {
      var code = args.join(" ");
      var evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      let Embed = new Discord.MessageEmbed()
                            .setColor(client.ayarlar.renk)
                            .addField("IN","```js\n" + code + "```")
                            .setDescription("```js\n" + clean(evaled) + "```")
if (Embed.description.length >= 2048)
      Embed.description = Embed.description.substr(0, 2042) + "```...";
    return message.channel.send(Embed)
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
};
})

try{
 client.login("ODUwNjc4ODQ4ODczOTU1MzM4.YLtOag.tzoa_2D_oWxCj7lwx8FOnW90Up4"); //TOKEN
  }catch(e){
   console.log(`LOGIN ERROR. PLS CHECK TOKEN; ${e}`);
  };
