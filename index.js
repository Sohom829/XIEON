const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

const Discord = require("discord.js");

const TOKEN = process.env.TKN;

const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
})

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
})
client.on("messageCreate", (message) => {
  if(message.content === "hi") {
    message.reply({content: `Hello, World!`})
  }
})
client.login(TOKEN);