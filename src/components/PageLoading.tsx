import { AiOutlineLoading } from "react-icons/ai";

export default function PageLoading() {
  return (
    <div className="relative flex min-h-svh w-full items-center justify-center">
      <div className="relative animate-spinner-linear-spin text-8xl font-bold text-blue-600">
        <AiOutlineLoading />
      </div>
    </div>
  );
}
