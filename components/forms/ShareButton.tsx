"use client";

import { useState,experimental_useOptimistic as useOptimistic } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { deleteThread } from "@/lib/actions/thread.actions";


function ShareButton() {
const threadId = 's'
  const shareUrl = () => {
        if (navigator.share) {
          navigator
            .share({
              title: document.title,
              url: `${window.location.href}/thread/${threadId}`
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