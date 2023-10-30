"use client";

import { useState,experimental_useOptimistic as useOptimistic } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { deleteThread } from "@/lib/actions/thread.actions";

interface Props {
  threadId: string;
  currentUserId: string;

}

function LikeThread({
  threadId,
  currentUserId,
}: Props) {

    const [isLiked, setIsLiked] = useState(false)
    const [noOfLikes, setNoOfLikes] = useState(0)


    const handleLike = () =>{
        setIsLiked(!isLiked)
        if(isLiked){
            setNoOfLikes(noOfLikes-1)
        }else{
            setNoOfLikes(noOfLikes+1)
        }
    }

  return (
    <span className="flex items-center gap-3">   
     
        {
            isLiked? (
                <Image
                    src='/assets/heart-filled.svg'
                    alt='like'
                    width={24}
                    height={24}
                    className='cursor-pointer object-contain'
                    onClick={handleLike}
                />
            ):(
                <Image
                    src='/assets/heart-gray.svg'
                    alt='like'
                    width={24}
                    height={24}
                    className='cursor-pointer object-contain'
                    onClick={handleLike}
                />
            )
        }
    </span>
    
   
  );
}

export default LikeThread;