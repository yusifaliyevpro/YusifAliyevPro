export function dateFormatter(date: string | Date) {
  return new Date(date).toLocaleDateString("en-GB", { timeZone: "UTC" });
}

export function getReadTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  return minutes;
}
