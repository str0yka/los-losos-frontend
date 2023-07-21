import localFont from "next/font/local";

export const MuseoSans = localFont({
  src: [
    {
      path: "./MuseoSansCyrl-300.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./MuseoSansCyrl-500.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./MuseoSansCyrl-700.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
