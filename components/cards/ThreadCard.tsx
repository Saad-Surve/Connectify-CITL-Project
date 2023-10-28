import Link from 'next/link';
import Image from "next/image";
import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
interface Props{
id:string;
currentUserId:string;
parentId: string | null;
content: string;
author:{
    name:string;
    image:string;
    id:string;
}
community:{
    id:string;
    name:string;
    image:string;
} | null;
createdAt: string;
comments: {
    author: {
        image: string;
    }
}[]
isComment?:boolean;
isReply?:boolean;
isReposted?:boolean;
}

const ThreadCard = ({
    id,
    currentUserId,
    parentId,
    content,
    author,
    community,
    createdAt,
    comments,
    isComment,
    isReply,
    isReposted
}: Props) => {
  return (
    <article className={`flex flex-col w-full rounded-xl ${isComment? 'px:0 xs: px-7' : 'bg-dark-2 p-7 '}`}>
        <div className='flex flex-col gap-5 items-start justify-between'>
        {isReply && (<p className='text-xl'>Replying to <Link href={`/thread/${parentId}`} className='text-primary-500'>thread</Link></p>)}
        
        {isReposted && (<p className='text-xl'>Reposted by <Link href={`/profile/${author.id}`} className='text-primary-500'>{author.name}</Link></p>)}

            <div className='flex flex-1 flex-row w-full gap-4'>
                <div className='flex flex-col items-center'>
                    <Link href={`/profile/${author.id}`} className='relative w-11 h-11'>
                        <Image
                            src={author?.image}
                            alt='Profile image'
                            fill
                            className='cursor-pointer rounded-full'
                        />
                    </Link>

                    <div className='thread-card_bar'/>
                </div>

                <div className='w-full flex flex-col'>
                    <Link href={`/profile/${author.id}`} className='w-fit'>
                        <h4 className='cursor-pointer text-base-semibold text-light-1'>{author.name}</h4>
                    </Link>

                    <p className='mt-2 text-small-regular text-light-2'>{content}</p>

                    <div className={`${isComment && 'mb-10'} mt-5 flex flex-col gap-3`}>
                        <div className='flex gap-3.5'>
                            <Image src="/assets/heart-gray.svg" alt="heart" width={24} height={24} className="cursor-pointer object-contain" />
                            <Link href={`/thread/${id}`} >
                                <Image src="/assets/reply.svg" alt="reply" width={24} height={24} className="cursor-pointer object-contain" />
                            </Link>
                                <Image src="/assets/repost.svg" alt="repost" width={24} height={24} className="cursor-pointer object-contain" />
                            <Image src="/assets/share.svg" alt="share" width={24} height={24} className="cursor-pointer object-contain" />
                        </div>

                      {isComment && comments.length > 0 && (
                        <Link href={`/thread/${id}`}>
                          <p className='mt-1 text-subtle-medium text-gray-1'>
                            {comments.length} replies
                          </p>
                        </Link>
                      )}

                    </div>
                </div>
            </div>
        </div>
    

    </article>
  )
}

export default ThreadCard