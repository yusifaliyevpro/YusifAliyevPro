export default function DateFormatter({ createdAt }) {
  const date = new Date(createdAt);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/ ${month < 10 && "0"}${month}/ ${year}`;
}

export function ReadtimeCalculator({ text }) {
  const words = text.split(" ").length;
  const seconds = Number("0." + (words / 200).toString().split(".")[1]) * 0.6;
  return (
    Math.floor(words / 200) +
    (seconds > 0.4 || Math.floor(words / 200) === 0 ? 1 : 0)
  );
}
