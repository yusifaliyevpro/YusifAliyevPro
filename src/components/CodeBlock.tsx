import { Snippet } from "@heroui/snippet";
import { AiOutlinePython } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3, FaHtml5, FaReact, FaRegFile } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "./CopyButton";
import type { CodeInputValue } from "@sanity/code-input";

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

export default function CodeBlock({ code, filename, language, highlightedLines }: Required<CodeInputValue>) {
  if (language === "sh") {
    const commands = code!.split("\n");
    return (
      <div className="my-5 flex flex-col items-center justify-center space-y-3">
        <Snippet color="primary" size="lg" variant="flat">
          {commands[0]}
        </Snippet>
        <span className="text-slate-500">or</span>
        {commands.length == 2 && (
          <Snippet color="primary" size="lg" variant="flat">
            {commands[1]}
          </Snippet>
        )}
      </div>
    );
  }

  return (
    <div className="mb-4 rounded-lg border border-gray-500 transition-none">
      <div className="flex items-center justify-between rounded-t-lg border-b border-gray-500 bg-gray-200/80 px-4 py-1">
        <div className="text-md flex flex-row items-center justify-center gap-2 py-2 font-semibold">
          {getFileIcon(language)}
          <span className="text-lg">{filename}</span>
        </div>
        <div className="flex items-center gap-2">
          <CopyButton text={code} />
        </div>
      </div>
      <div className="scrollbar-hide transition-all">
        <SyntaxHighlighter
          showLineNumbers
          language={language}
          style={oneLight}
          lineNumberStyle={
            code.trim().split("\n").length < 15 ? { marginLeft: "calc(var(--spacing) * 3)" } : {}
          }
          wrapLines
          lineProps={(lineNumber) =>
            highlightedLines?.includes(lineNumber)
              ? {
                  style: {
                    backgroundColor: "var(--color-blue-200)",
                    padding: "0.1rem",
                    width: "100%",
                    paddingRight: "0.5rem",
                    borderRadius: "0 0.1rem 0.1rem 0",
                  },
                }
              : {}
          }
          customStyle={{
            margin: 0,
            msOverflowStyle: "none",
            overflow: "auto",
            paddingLeft: 0,
            borderRadius: "var(--radius-lg)",
            paddingRight: 0,
            scrollbarWidth: "none",
          }}
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
