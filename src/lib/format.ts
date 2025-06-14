export function dateFormatter(date: string | Date) {
  const fullDate = new Date(date);
  const day = fullDate.getDate();
  const month = fullDate.getMonth() + 1;
  const year = fullDate.getFullYear();

  return `${day < 10 ? "0" : ""}${day}/ ${month < 10 ? "0" : ""}${month}/ ${year}`;
}

export function getReadTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  return minutes;
}
