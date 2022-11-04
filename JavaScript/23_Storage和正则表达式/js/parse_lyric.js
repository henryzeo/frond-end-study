function parseLyric(lyricString) {

  const lyricLineStr = lyricString.split("\n");
  const lyricObjs = [];
  const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

  for (const line of lyricLineStr) {

    if (!line) continue;

    const result = line.match(timeRegExp);
    const minute = result[1] * 60 * 1000;
    const second = result[2] * 1000;
    const millisecond = result[3].length === 3 ? result[3] : result[3]*10;

    const time = minute + second + millisecond;
    const lyric = line.replace(timeRegExp, "").trim();

    lyricObjs.push({ time, lyric });

  }

  return lyricObjs;

}