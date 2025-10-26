import SplashIconLogo from "@/icons/SplashLogoIcon";

export default function SplashScreen() {
  return (
    <div className="justify-center items-center bg-linear-to-tr from-[#1b4887] to-[#860e9e] size-screen overflow-hidden">
      <SplashIconLogo className="max-w-3/4" />
    </div>
  );
}
