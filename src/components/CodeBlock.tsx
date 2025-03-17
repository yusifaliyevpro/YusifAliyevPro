import CopyButton from "./CopyButton";
import { Snippet } from "@heroui/snippet";
import { AiOutlinePython } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function getFileIcon(language: string) {
  switch (language) {
    case "html":
      return <FaHtml5 className="text-2xl text-orange-500" />;
    case "css":
      return <FaCss3 className="text-2xl text-blue-500" />;
    case "javascript":
      return <RiJavascriptFill className="text-3xl text-yellow-500" />;
    case "jsx":
      return <FaReact className="text-2xl text-blue-500" />;
    case "ts":
      return <BiLogoTypescript className="text-2xl text-blue-700" />;
    case "tsx":
      return <FaReact className="text-2xl text-blue-700" />;
    case "python":
      return <AiOutlinePython className="bg-clip-text text-2xl text-blue-500" />;
    default:
      return <FaRegFile className="text-xl" />;
  }
}

type CodeBlockProps = {
  code: string;
  language: string;
  fileName: string;
};

export default function CodeBlock({ code, language, fileName }: CodeBlockProps) {
  if (language === "sh") {
    const commands = code.split("\n");
    return (
      <div className="my-5 flex flex-col items-center justify-center space-y-3">
        <Snippet color="primary" size="lg" variant="flat">
          {commands[0]}
        </Snippet>
        <span className="text-slate-500">və ya</span>
        {commands.length == 2 && (
          <Snippet color="primary" size="lg" variant="flat">
            {commands[1]}
          </Snippet>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-lg border transition-none">
      <div className="flex items-center justify-between rounded-t-md border-b bg-gray-200/80 px-4 py-2 dark:border-0 dark:bg-gray-500">
        <div className="text-md flex flex-row items-center justify-center gap-2 py-2 font-semibold">
          {getFileIcon(language)}
          <span className="text-lg">{fileName}</span>
        </div>
        <div className="flex items-center gap-2">
          <CopyButton text={code} />
        </div>
      </div>
      <div className="transition-all scrollbar-hide">
        <SyntaxHighlighter
          showLineNumbers
          language={language}
          style={oneLight}
          customStyle={{
            margin: 0,
            height: "23.4rem",
            paddingLeft: 0,
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            overflow: "auto",
            paddingRight: 0,
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
