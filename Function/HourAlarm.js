//Alarm Every Hour ("2 Hour!"), ("23 Hour!")

oc = require("./OpenChat.js");
config = require("../config.json");

exports.Alarm = function (Discord, token, guilds, previousHour) {
    let channel;

    switch (token) {
        case config.CallOfDuty_BlackOPS_04.token:
            channel = guilds.guild_Channels.BamBe.Channel.text.Notice;
            break;
        case config.JunNodeJsBot.token:
            channel = guilds.guild_Channels.Discord_Bot_Test_Room.Channel.text.Notice;
            break;
        default:
            break;
    }

    setInterval(() => {
        let datelet = new Date();
        let currentHour = datelet.getHours();

        if (previousHour < currentHour) {
            channel.send(currentHour + " Hour!");
            previousHour = currentHour;
            if (currentHour == 18) {
                oc.oppChat(Discord, guilds);
            }
        }
    }, 60000);
}

// gc_BamBe_.forEach(function(value, key) {
//   console.log(key + ' = ' + value);
// });