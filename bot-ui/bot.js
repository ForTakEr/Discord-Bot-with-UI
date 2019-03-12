const Discord = require("discord.js");
const client = new Discord.Client();
const botToken = "NTQ0ODM4NTk3NTA1OTc0Mjkx.D1arZQ.MRQaVsPYO6cMhcmUhoP2FlhmDEI";
const commands = require('./commands');
const prefix = "-";

client.login(botToken);
//Invite link https://discordapp.com/api/oauth2/authorize?client_id=544838597505974291&permissions=10240&scope=bot

client.on("ready", () => {
    console.log("I am ready!");
    client.user.setActivity('-' + 'help', { type: 'PLAYING' });
});

client.on("message", message =>{
    const msg = message.content;
    if (!msg.startsWith(prefix) || message.author.bot) return;

    const args = msg.slice(prefix.length).split(/ +/);
    const sentCommand = args.shift().toLowerCase();

    message.content = sentCommand;

    Object.values(commands).forEach(async (command) => {
        const response = await command(message);
        if (response) {
            message.reply(response);
        }
      });
})