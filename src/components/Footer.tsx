import Link from "next/link";

export default function Footer() {
  return (
    <footer className="z-50 w-full bg-white shadow-medium dark:bg-foreground">
      <div className="flex w-full flex-col items-center justify-between p-4 px-10 md:flex-row md:py-6">
        <div className="flex flex-row items-center justify-start pb-5 pt-4 md:px-10 md:py-0">
          <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/">
            <span
              className={`self-center whitespace-nowrap font-jua text-3xl font-normal text-black dark:text-white`}
            >
              Yusif<span className="text-blue-500">Aliyev</span>Pro
            </span>
          </Link>
          <span className="text-md block pl-4 text-center text-gray-500 md:py-0 md:text-left">
            © {new Date().getFullYear()}
          </span>
        </div>
        <div>
          <p className="text-lg text-slate-600">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
