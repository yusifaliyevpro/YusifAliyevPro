import Link from "next/link";

export const events = [
  {
    name: "Technest Təaqüd Proqramı",
    description: "CodeNext | MERN Stack | 100% təqaüd",
  },
  {
    name: "Developer & Creator",
    description: (
      <>
        <Link
          prefetch={false}
          rel="noopener noreferrer"
          href={"https://world-countriess.vercel.app/"}
          className="text-blue-500"
          target="_blank"
        >
          World-Countriess
        </Link>{" "}
        | Websayt
      </>
    ),
  },
  {
    year: "2024",
  },
  {
    name: "Xəmsə | 🥇 Birincilik",
  },
  {
    name: "Cyber Summer School 2023",
    description: "Beynəxlaq Yay Məktəbi",
  },
  {
    name: "Developer & Creator",
    description: (
      <>
        <Link
          href={"https://filmisbest.com/"}
          className="text-blue-500"
          target="_blank"
          prefetch={false}
          rel="noopener noreferrer"
        >
          FilmIsBest
        </Link>{" "}
        | Film Websaytı
      </>
    ),
  },
  {
    name: "Text Editor & SEO & Debugger",
    description: (
      <>
        <Link
          href={"https://kitabxanano2.vercel.app/"}
          className="text-blue-500"
          target="_blank"
          prefetch={false}
          rel="noopener noreferrer"
        >
          Kitabxano2
        </Link>{" "}
        | StartUp
      </>
    ),
  },
  {
    name: "I Şəxsi İnkişaf Məktəbi",
  },
  {
    year: "2023",
    name: "",
  },
  {
    name: "Gənc Könüllü | Abşeron GİKM",
    description: "3 + 1 ay | Ayın Gənci",
  },
  {
    name: "Google Digital Garage",
    description: "The Fundamentals of Marketing",
  },
  {
    year: "",
    name: "IIENSITU | Marketing Course",
    description: "Istanbul İşletme Enstitüsü",
  },
  { year: "2022" },
];
