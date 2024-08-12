// import { BASE_URL } from "@/lib/constants";
// import { ImageResponse } from "next/og";

// export const runtime = "edge";

// export async function GET(
//   request,
//   {
//     params: { title },
//   }: {
//     params: { title: string };
//   },
// ) {
//   try {
//     const interSemiBold = fetch(
//       new URL("/public/fonts/Inter-Bold.ttf", import.meta.url),
//     ).then((res) => res.arrayBuffer());

//     return new ImageResponse(
//       (
//         <div tw="relative flex flex-col h-full w-full bg-white items-center justify-between  py-32">
//           <div tw="relative flex inset-0 justify-center rounded-full border-2 border-gray-400 items-start">
//             <Image
//               src={`${BASE_URL}/profile.png`}
//               height={450}
//               width={450}
//               alt="Yusif ALiyev Profile Picture"
//             />
//             <div tw="absolute flex inset-0" />
//           </div>
//           <div tw="relative flex items-start justify-center mt-10 text-black">
//             <div tw="text-9xl font-bold text-blue-500">{title}</div>
//           </div>
//         </div>
//       ),
//       {
//         width: 1200,
//         height: 970,
//         fonts: [
//           {
//             name: "Inter",
//             data: await interSemiBold,
//             style: "normal",
//             weight: 700,
//           },
//         ],
//       },
//     );
//   } catch (e) {
//     console.log(`${e.message}`);
//     return new Response(`Failed to generate the image`, {
//       status: 500,
//     });
//   }
// }
