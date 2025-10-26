"use client";

import dynamic from "next/dynamic";

import { useLaunchParams } from "@tma.js/sdk-react";

import SplashScreen from "@/components/SplashScreen";

const MiniAppProvider = dynamic(() => import("@/components/MiniAppProvider"), {
  ssr: false,
  loading: () => <SplashScreen />,
});

export default function HomePage() {
  const launchParams = useLaunchParams();
  return (
    <MiniAppProvider>
      <div className="flex flex-col flex-1 justify-center items-center gap-2 p-2 size-full">
        <h1 className="font-semibold text-xl">
          Welcome, {launchParams?.tgWebAppData?.user?.first_name} 👋
        </h1>
        <p>Right now we're busy cooking something new for you! Stay tuned!</p>
      </div>
    </MiniAppProvider>
  );
}
