const fs = require("fs");
const CurrentDay = require("./Date.js");
const CurrentTime = require("./Time.js");

exports.write = function (message, guilds) {
    const today = CurrentDay.yyyymmdd();
    const time = CurrentTime.times();

    let isImage;
    let imageURL;

    if (message.attachments.size == 1) {
        isImage = 1;

        message_arr = message.attachments.array();
        imageURL = message_arr[0].url;
    }

    // let testChannelName = message.channel.name;
    let GroupName = message.guild.name;
    const patten1 = pattern3 = /[*|<>?:\/]/gi;
    // \/:*?"<>|
    GroupName = GroupName.replace(patten1, "_");

    const path_data = "./DataBase/" + "[" + GroupName + " " + message.channel.name + "]" +
        "-" + today + ".txt";


    // console.log(fileLocation);

    fs.open(path_data, "a+", function (err, fileID) {
        if (err) throw err;
        let msg;

        if (isImage) {
            msg = time + message.author.username + ": " + imageURL + "\r\n";
        } else {
            msg = time + message.author.username + ": " + message.content + "\r\n";
        }

        let buf = Buffer.from(msg, "utf-8");

        fs.write(fileID, buf, 0, buf.length, null, function (err, written, buffer) {
            if (err) throw err;
            // console.log(err, written, buffer);
            fs.close(fileID, function () {
                console.log("Done");
            });
        });
    });
};