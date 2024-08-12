import { AiOutlineLoading } from "react-icons/ai";

export default function Loading() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center">
      <div className="relative animate-spinner-linear-spin text-8xl font-bold text-blue-600">
        <AiOutlineLoading />
      </div>
    </div>
  );
}
