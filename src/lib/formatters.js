export default function DateFormatter({ date }) {
  const monthNames = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "İyun",
    "İyul",
    "Avqust",
    "Sentyabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];
  const fullDate = new Date(date);
  const day = fullDate.getDate();
  const month = fullDate.getMonth() + 1;
  const year = fullDate.getFullYear();

  return `${day < 10 ? "0" : ""}${day}/ ${month < 10 ? "0" : ""}${month}/ ${year}`;
  // return `${day} ${monthNames[month - 1]}, ${year}`;
}

export function ReadtimeCalculator({ text }) {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  return minutes;
}
