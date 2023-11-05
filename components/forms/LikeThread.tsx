"use client";

import { useState,experimental_useOptimistic as useOptimistic } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { deleteThread, likeThread, unlikeThread } from "@/lib/actions/thread.actions";

interface Props {
  threadId: string;
  currentUserId: string;
  likedBy:string[]|undefined;
}

function LikeThread({
  threadId,
  currentUserId,
  likedBy
}: Props) {

    const [isLiked, setIsLiked] = useState(likedBy?.includes(currentUserId))
    const [noOfLikes, setNoOfLikes] = useState(0)
    const path = usePathname()

    const handleLike = async() =>{
        setIsLiked(!isLiked)
        if(isLiked){
            console.log('unliking')
            // setNoOfLikes(noOfLikes-1)
            await unlikeThread(threadId.substring(1,25),currentUserId,path)
        }else{
            setNoOfLikes(noOfLikes+1)
            await likeThread(threadId.substring(1,25),currentUserId,path)
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
        <span className="text-subtle-medium text-gray-500">{likedBy?.length}</span>
    </span>
    
   
  );
}

export default LikeThread;