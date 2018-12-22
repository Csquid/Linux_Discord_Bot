// const request = require("sync-request");
const request = require('request');
const sendStats = require("./sendMssage.js");
const userStatsGG = require("../Enum/UserStatsEnum.js")
let check;

exports.check = function (userName, msgChannel) {
  if (('a' < userName[0] && 'z' < userName[0]) && ('A' < userName[0] && 'Z' < userName[0])) {
    msgChannel.channel.send("only English Searchable");
    return false;
  }
  if (userName[0] >= "!" && userName[0] <= "@") {
    msgChannel.channel.send("only English Searchable");
    return false;
  }
  return true;
}

exports.InputUserData = function (userName, userStats, msgChannel) {

  const nUrl = "https://cod-api.tracker.gg/v1/standard/bo4/profile/6/" + userName;
  let usrdata;
  const options = {
    url: nUrl,
    method: 'GET',
    headers: {
      "TRN-Api-Key": "9b8e8406-4c84-4188-927c-455be84d5cf9"
    }
  }

  search = function (callback) {
    request(options, function (error, response, body) {
      usrdata = JSON.parse(body);

      callback();
    });
  };

  search(function () {
    if (usrdata == null) {
      console.log("not data");
      return;
    }
    if (usrdata.data.stats.length == 66) {
      usrdata.data.stats.unshift({
        metadata: {
          key: "prestige",
          name: "Prestige",
          categoryKey: "levels",
          categoryName: "Levels",
          isReversed: false
        },
        value: 0,
        percentile: 0.0,
        displayValue: "0"
      });
    }

    let userStatsData = usrdata.data.stats;
    let userData = usrdata.data.metadata;
    const userKdaRatio =
      (userStatsData[userStatsGG.kills].value + userStatsData[userStatsGG.assists].value) / userStatsData[userStatsGG.deaths].value;

    userStats.setData(
      userData.platformUserHandle,
      userStatsData[userStatsGG.prestige].value,
      userStatsData[userStatsGG.level].value,
      userStatsData[userStatsGG.totalScore].value,
      userStatsData[userStatsGG.kills].value,
      userStatsData[userStatsGG.deaths].value,
      userStatsData[userStatsGG.assists].value,
      userStatsData[userStatsGG.meleeAttack].value,
      userStatsData[userStatsGG.kdRatio].value,
      userKdaRatio,
      userStatsData[userStatsGG.totalWins].value,
      userStatsData[userStatsGG.totalLosses].value,
      userStatsData[userStatsGG.winRatio].value
    );

    if (check != false) {
      sendStats.send(userStats, msgChannel);
    } else {
      console.log("check == false");
      return;
    }
  });
}