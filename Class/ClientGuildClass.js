const guild_enum = require("../Enum/GuildEnum.js");
const config = require("../config.json");

module.exports = class GuildClass {
  constructor(obj) {
    this._guild = obj;
  }

  init(token) {
    this.guild_Delete_Developer = this._guild.get(guild_enum.guildRoomEnum.delete_Developer);
    this.guild_Include_Stdio = this._guild.get(guild_enum.guildRoomEnum.include_Stdio);
    this.guild_Emoji_Server = this._guild.get(guild_enum.guildRoomEnum.emoji_Server);
    this.guild_Bot_Shop = this._guild.get(guild_enum.guildRoomEnum.bot_Shop);

    this.channel_Delete_Developer = this.guild_Delete_Developer.channels;
    this.channel_Include_Stdio = this.guild_Include_Stdio.channels;
    this.channel_Emoji_Server = this.guild_Emoji_Server.channels;
    this.channel_Bot_Shop = this.guild_Bot_Shop.channels;

    this.textChannel_Emoji_Notice = this.channel_Emoji_Server.get(guild_enum.GroupChannel.emoji_Server._notice);
    this.textChannel_Emoji_General = this.channel_Emoji_Server.get(guild_enum.GroupChannel.emoji_Server._general);
    this.textChannel_Emoji_Monkey = this.channel_Emoji_Server.get(guild_enum.GroupChannel.emoji_Server._monkey);
    this.textChannel_Emoji_Jellybrick = this.channel_Emoji_Server.get(guild_enum.GroupChannel.emoji_Server._jellyBrick);
    this.textChannel_Emoji_Josbar = this.channel_Emoji_Server.get(guild_enum.GroupChannel.emoji_Server._josbar);
    this.textChannel_Emoji_SSirxx = this.channel_Emoji_Server.get(guild_enum.GroupChannel.emoji_Server._ssirxx);
    this.textChannel_Emoji_Violet = this.channel_Emoji_Server.get(guild_enum.GroupChannel.emoji_Server._violet);
    this.textChannel_Emoji_WhiteBear = this.channel_Emoji_Server.get(guild_enum.GroupChannel.emoji_Server._whiteBear);

    this.emoji_Delete_gentlemanparrot = this.guild_Delete_Developer.emojis.get(guild_enum.EmojiChannel.delete_Developer._gentlemanparrot);
    this.emoji_Delete_parrotwave1 = this.guild_Delete_Developer.emojis.get(guild_enum.EmojiChannel.delete_Developer._parrotwave1);
    this.emoji_Delete_fixparrot = this.guild_Delete_Developer.emojis.get(guild_enum.EmojiChannel.delete_Developer._fixparrot);
    this.emoji_DeleteDeveloper = this.guild_Delete_Developer.emojis.get("487267818266427416");

    this.emoji_EmojiServer_javascript = this.guild_Emoji_Server.emojis.get(guild_enum.EmojiChannel.emoji_Server._javascript);

    this.guild_Channels = {
      "Delete_Developer": {
        "Channel": {},
        "emojis": {
          "_gentlemanparrot": this.emoji_Delete_gentlemanparrot,
          "_parrotwave1": this.emoji_Delete_parrotwave1,
          "_Fixparrot": this.emoji_Delete_fixparrot
        }
      },
      "Discord_Bot_Test_Room": {
        "Channel": {
          "text": {
            "Notice": this.textChannel_Emoji_Notice,
            "General": this.textChannel_Emoji_General,
            "Monkey": this.textChannel_Emoji_Monkey,
            "JellyBrick": this.textChannel_Emoji_Jellybrick,
            "Josbar": this.textChannel_Emoji_Josbar,
            "SSirxx": this.textChannel_Emoji_SSirxx,
            "Violet": this.textChannel_Emoji_Violet,
            "WhiteBear": this.textChannel_Emoji_WhiteBear
          }
        }
      }
    }

    switch (token) {
      case config.CallOfDuty_BlackOPS_04.token:
        this.guild_BamBe_Friend = this._guild.get(guild_enum.guildRoomEnum.bamBe_Friend);

        this.channel_BamBe_Friend = this.guild_BamBe_Friend.channels;

        this.textChannel_Notice_Bambe = this.channel_BamBe_Friend.get(guild_enum.GroupChannel.bamBe_Friend._notice);
        this.textChannel_General_Bambe = this.channel_BamBe_Friend.get(guild_enum.GroupChannel.bamBe_Friend._general);
        this.textChannel_LoL_Waiting_Bambe = this.channel_BamBe_Friend.get(guild_enum.GroupChannel.bamBe_Friend._lolWaiting);
        this.textChannel_Callofduty_stats_Bambe = this.channel_BamBe_Friend.get(guild_enum.GroupChannel.bamBe_Friend._callOfDutyStats);

        this.guild_Channels.BamBe = {
          "Channel": {
            "text": {
              "Notice": this.textChannel_Notice_Bambe,
              "General": this.textChannel_General_Bambe,
              "LoLWait": this.textChannel_LoL_Waiting_Bambe,
              "CallOfDudy_Stats": this.textChannel_Callofduty_stats_Bambe
            },
            "voice": {}
          }
        }
        break;

      default:
        break;
    }
  }

  printDeleteDeveloper() {
    // console.log(guild_enum.GroupChannel.bamBe_Friend._general);
  }

  channelSend() {
    this.textChannel_General_Bambe.send("Hello? I'm Testing");
    // console.log(this.guild_Delete_Developer.emojis)
  }

  get_Data() {
    return this.channel_BamBe_Friend;
  }
  get_Text_Channel_Notice_Bambe() {
    return this.textChannel_Notice_Bambe;
  }
  get_Text_Channel_BamBe_Friend_General() {
    return this.textChannel_General_Bambe;
  }
  get_Text_Channel_BamBe_Friend_LoL_Waiting() {
    return this.textChannel_Lol_Waiting_Bambe;
  }
  get_TextChannel_Callofduty_stats_Bambe() {
    return this.textChannel_Callofduty_stats_Bambe;
  }
  get_Emoji1() {
    return this.emoji_DeleteDeveloper;
  }
  get_Emoji_fixparrot() {
    return this.emoji_Delete_fixparrot;
  }
  get_Emoji_gentlemanparrot() {
    return this.emoji_Delete_gentlemanparrot;
  }
  get_Emoji_parrotwave1() {
    return this.emoji_Delete_parrotwave1;
  }
};