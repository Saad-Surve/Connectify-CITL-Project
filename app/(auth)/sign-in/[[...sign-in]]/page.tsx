import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

 
export default function Page() {
  return(
    <section className="flex justify-center flex-col gap-10 w-full h-screen items-center">
      <Image alt="logo" src="/logo.svg" width="50" height="50" />
      <div className="text-heading2-bold flex items-center flex-col  lg:flex-row text-violet-400">
        <span>Connectify -&nbsp;</span>        
        <span className="text-white text-heading3-bold">
           Connecting Similar Minds
        </span>
      </div>
      <SignIn />
    </section>
  )
   ;
}