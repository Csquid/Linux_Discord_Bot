exports.times = function () {
    const now = new Date();
    const h = now.getHours();
    const mm = now.getMinutes();
    const s = now.getSeconds();

    let hour = h;
    let minute = (mm < 10 ? "0" : "") + mm;
    let second = (s < 10 ? "0" : "") + s;

    const time = hour + ":" + minute + ":" + second + " ";

    return time;
}