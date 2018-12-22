module.exports = class UserStatsClass {

  setData(userTag, prestigeLv, level, totalExpScore, totalKills,
    totalDeaths, totalAssists, meleeAttack, kdRatio, kdaRatio, win, losses, winRatio
  ) {
    this._userTag = userTag;
    this._prestigeLv = prestigeLv;
    this._level = level;
    this._totalExpScore = totalExpScore;
    this._totalKills = totalKills;
    this._totalDeaths = totalDeaths;
    this._totalAssists = totalAssists;
    this._meleeAttack = meleeAttack;
    this._kdRatio = kdRatio;
    this._kdaRatio = kdaRatio;
    this._totalWin = win;
    this._totalLosses = losses;
    this._winRatio = winRatio;
  }

  getUserTag() {
    return this._userTag;
  }
  getPrestigeLv() {
    return this._prestigeLv;
  }
  getLevel() {
    return this._level;
  }
  getTotalExpScore() {
    return this._totalExpScore;
  }
  getTotalKill() {
    return this._totalKills;
  }
  getTotalDeath() {
    return this._totalDeaths;
  }
  getTotalAssist() {
    return this._totalAssists;
  }
  getTotalMeleeAttackKill() {
    return this._meleeAttack;
  }
  getKdRatio() {
    return this._kdRatio;
  }
  getKDARatio() {
    return this._kdaRatio;
  }
  getTotalWin() {
    return this._totalWin;
  }
  getTotalLosses() {
    return this._totalLosses;
  }
  getWinRatio() {
    return this._winRatio;
  }
};