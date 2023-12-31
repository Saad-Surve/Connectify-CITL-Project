"use client";

import { useState} from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { deleteThread } from "@/lib/actions/thread.actions";


function ShareButton({threadId:id}:{threadId:string}) {
  const shareUrl = () => {
        if (navigator.share) {
          navigator
            .share({
              title: document.title,
              url: `https://connectify-citl-project.vercel.app/thread/${id}`
            })
            .then(() => console.log('Share was successful.'))
            .catch((error) => console.log('Sharing failed', error));
        } else {
          console.log(`Your system doesn't support sharing.`);
        }
      };
  return (
    <Image
    src='/assets/share.svg'
    alt='share'
    width={24}
    height={24}
    className='cursor-pointer object-contain'
    onClick={shareUrl}
  />
   
  );
}

export default ShareButton;