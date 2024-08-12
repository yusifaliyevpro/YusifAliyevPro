import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import CopyButton from "./CopyButton";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({
  code,
  language,
  fileName,
}: {
  code: string;
  language: string;
  fileName: string;
}) {
  return (
    <div className={`rounded-lg border transition-all`}>
      <div className="flex items-center justify-between rounded-t-md border-b bg-gray-200/80 px-4 py-2">
        <div className="text-md flex flex-row items-center justify-center gap-2 py-2 font-semibold">
          {(() => {
            switch (language) {
              case "javascript":
                return (
                  <RiJavascriptFill className="text-3xl text-yellow-500" />
                );
              case "ts":
                return <BiLogoTypescript className="text-2xl text-blue-700" />;
              case "tsx":
                return <FaReact className="text-2xl text-blue-700" />;
              case "jsx":
                return <FaReact className="text-2xl text-blue-500" />;
              default:
                return <FileIcon />;
            }
          })()}
          <span className="text-lg">{fileName}</span>
        </div>
        <div className="flex items-center gap-2">
          <CopyButton text={code} />
        </div>
      </div>
      <div className={`transition-all scrollbar-hide`}>
        <SyntaxHighlighter
          language={language}
          showLineNumbers
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

function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}
