const Discord = require("discord.js");

exports.send = function (userStats, message) {
    let url;
    if (userStats.getPrestigeLv() == 0) {
        url = message.author.avatarURL + ".png";
    } else {
        url = "https://cod-cdn.tracker.gg/assets/prestige/prestige_" + userStats.getPrestigeLv() + ".png";
    }

    const embed = new Discord.RichEmbed()
        .setColor(0x5fc3e4)
        .setThumbnail(url)
        .setAuthor(userStats.getUserTag(), "https://vignette.wikia.nocookie.net/fantendo/images/a/af/Call_of_Duty_Black_Ops_4_icon.png")
        // .setThumbnail("./Prestige/prestige " + userStats.getPrestigeLv() + ".png")
        // .setTitle(userStats.getUserTag() + "\n\n")
        .addField("Level", userStats.getLevel(), true)
        .addField("TotalExpScore", userStats.getTotalExpScore(), true)
        .addField("TotalKills", userStats.getTotalKill(), true)
        .addField("TotalDeaths", userStats.getTotalDeath(), true)
        .addField("TotalAssists", userStats.getTotalAssist())
        .addField("KDRatio", userStats.getKdRatio(), true)
        .addField("KDARatio", userStats.getKDARatio().toFixed(2), true)
        .addField("TotalWin", userStats.getTotalWin(), true)
        .addField("TotalLosses", userStats.getTotalLosses(), true)
        .addField("WinRatio", userStats.getWinRatio() + "%", true)
        .addField("명성이 안보일때", "설정 -> 텍스트 및 사진 -> 채팅에 링크로 올렸을 때 on")
        .setFooter("© Making _MonkeyCoder");

    message.channel.send({
        embed
    });
    // send = function (callback) {
    //     message.channel.send({embed});
    //     callback();
    // };

    // send(function () {
    //     let str = discordblob + " ";

    //     for (let i = 0; i < 5; i++) {
    //         str += lgbt_1 + " " + lgbt_2 + " ";
    //     }

    //     str += " " + discordblob;
    //     message.channel.send(str);
    // });


}