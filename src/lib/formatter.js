export default function dateFormatter({ createdAt }) {
  const date = new Date(createdAt);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/ ${month < 10 && "0"}${month}/ ${year}`;
}
