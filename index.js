//Client.Guilds
const ClientGuild = require("./Class/ClientGuildClass.js");
//UserStats
const ustClass = require("./Class/UserStats.js");
const Discord = require("discord.js");
const config = require("./config.json");
const currentToken = config.CallOfDuty_BlackOPS_04.token;
const currentPrefix = config.CallOfDuty_BlackOPS_04.prefix;
const client = new Discord.Client();
//function
const funs = require("./Function/index");

let userStats = new ustClass();

//Guilds Class
let gc = new ClientGuild(client.guilds);

let curreHo = new Date();
let previousHour = curreHo.getHours();

start = function(callback) {
  client.on("ready", () => {
    client.user.setActivity("/도움말");

    gc.init(currentToken);

    funs.HourAlarm.Alarm(Discord, currentToken, gc, previousHour);
    console.log("I am ready!");

    callback();
  });
};

start(function() {
  client.on("message", message => {
    funs.Msg.Message(currentToken, currentPrefix, message, userStats, gc);
    funs.WriteMessage.write(message, gc);
  });
});

client.login(currentToken);
