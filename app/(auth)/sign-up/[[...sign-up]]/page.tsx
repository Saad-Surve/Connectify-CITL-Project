import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
 
export default function Page() {
  return (
    <section className="flex justify-center flex-col gap-10 w-full h-screen items-center">
      <Image alt="logo" src="/logo.svg" width="50" height="50" />
      <div className="text-heading1-bold flex items-center text-violet-400">
        Connectify -&nbsp;
        <span className="text-white text-heading2-bold">
           Connecting Similar Minds
        </span>
      </div>
      <SignUp />
    </section>
  );
}