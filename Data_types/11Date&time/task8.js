/*Write a function formatDate(date) that should format date as follows:

If since date passed less than 1 second, then "right now".
Otherwise, if since date passed less than 1 minute, then "n sec. ago".
Otherwise, if less than an hour, then "m min. ago".
Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.*/

function formatDate(date) {
  let mlsec = new Date() - date;
  if (mlsec < 1000) return 'right now';

  let sec = Math.round(mlsec / 1000);
  if (sec <= 60) return `${sec} sec. ago`;

  let min = Math.round(mlsec / 60000);
  if (min <= 60) return `${min} min. ago`;

  let d = [
    '0' + date.getDate(),
    '0' + (date.getMonth() + 1),
    '' + date.getYear(),
    '0' + date.getHours(),
    '0' + date.getMinutes(),
  ].map((e) => e.slice(-2));
  return `${d[0]}.${d[1]}.${d[2]} ${d[3]}:${d[4]}`;
}

console.log(formatDate(new Date(new Date() - 1))); // "right now"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
