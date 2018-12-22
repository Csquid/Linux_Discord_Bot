exports.embNotice = function (Discord, guilds, token) {

    let channel;
    const emoji_Fixparrot = guilds.guild_Channels.Delete_Developer.emojis._Fixparrot;

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

    const embed = new Discord.RichEmbed()
        .setColor(0xEA1A11)
        .setThumbnail("https://vignette.wikia.nocookie.net/fantendo/images/a/af/Call_of_Duty_Black_Ops_4_icon.png")
        .setTitle(emoji_Fixparrot + "  Notice")
        .addField("PatchNote", "Module(최적화)")
        .addField("I'm Going to...", "Add User Recent the Matchs\nMaking Site\naddDataBase")
        .setFooter("ver 1.0.1");

    channel.send({
        embed
    });
}