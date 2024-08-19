import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yusif Aliyev",
    short_name: "Yusif Aliyev",
    description:
      "Mənim şəxsi websaytıma xoş gəlmişsiniz. Bu websaytda mən özüm haqqımda vacib detalları, blog postlarımı paylaşıram. Mənim kim olduğum haqqında daha çox məlumat almaq istəyirsənsə bütün səhifələrə bir baxış atmağını tövsiyə edərdim.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#007bff",
    icons: [
      {
        src: "/src/app/favicon.png",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
