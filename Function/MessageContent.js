const searchSetting = require("./searchSetting.js");
const Discord = require("discord.js");
const notice = require("./Notice.js");
const oc = require("./OpenChat.js");

exports.Message = function (token, prefix, message, userStats, gc) {
    let searStr = message.content;
    let chSearStr = searStr.replace(/\#/, "-");
    let userTag = chSearStr.substr(4);
    const checkMessage = message.content.toString();

    if (message.content === (prefix + "ping")) {
        message.channel.send("pong");
    }

    if (message.author.id == "283573754074890241") {
        if (message.content == (prefix + "join")) {
            message.member.voiceChannel.join();
        }
        if (message.content == (prefix + "Notice") || message.content == (prefix + "공지")) {
            notice.embNotice(Discord, gc, token);
        }
        if (message.content == (prefix + "OpenChat")) {
            oc.oppChat(Discord, gc, token);
        }
    }

    if (message.content == (prefix + "icon")) {
        message.channel.send(message.author.avatarURL);
    }

    let checkSearch;
    if (searStr.search(prefix + "전적") > -1) {

        checkSearch = searchSetting.check(userTag, message);

        if (checkSearch == true) {
            searchSetting.InputUserData(userTag, userStats, message);
        }

    }
    if (checkMessage.indexOf("?") != -1) {
        message.react(gc.emoji_DeleteDeveloper);
    }
    if (checkMessage.indexOf("!") != -1) {
        message.react(gc.emoji_DeleteDeveloper);
    }
    if (checkMessage.indexOf("js") != -1) {
        message.react(gc.emoji_EmojiServer_javascript);
    }

}