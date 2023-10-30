import Image from "next/image";
import Link from "next/link";

import { formatDateString } from "@/lib/utils";
import DeleteThread from "../forms/DeleteThread";
import LikeThread from "../forms/LikeThread";
import ShareButton from "../forms/ShareButton";
import RepostButton from "../forms/repostButton";

interface Props {
  id: string;
  currentUserId: string;
  parentId: string | null;
  content: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
  isReply?: boolean;
  isReposted?: boolean;
  name?:string
}

function ThreadCard({
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
  isReposted,
  name
}: Props) 
{

  return (
    <article
      className={`flex w-full flex-col rounded-xl ${
        isComment ? "px-0 xs:px-7" : "bg-dark-2 p-7"
      }`}
    >
      <div className='flex flex-col items-start justify-between'>
      {isReply && (<p className='pb-6 text-xl'>Replying to <Link href={`/thread/${parentId}`} className='text-primary-500'>thread</Link></p>)}
        
        {isReposted && (<p className='text-xl'>Reposted by <Link href={`/profile/${currentUserId}`} className='text-primary-500'>{author.name}</Link></p>)}
        <div className='flex w-full flex-1 flex-row gap-4'>
            <div>


            </div>
          <div className='flex flex-col items-center'>
            <Link href={`/profile/${author.id}`} className='relative h-11 w-11'>
              <Image
                src={author.image}
                alt='user_community_image'
                fill
                className='cursor-pointer rounded-full'
              />
            </Link>
            
            <div className='thread-card_bar' />
          </div>

          <div className='flex w-full flex-col'>
            <div className="flex justify-between w-full">
                <Link href={`/profile/${author.id}`} className='w-fit'>
                    <h4 className='cursor-pointer  text-base-semibold text-light-1'>
                        {author.name}
                    </h4>
                </Link>
                    <DeleteThread
                        threadId={JSON.stringify(id)}
                        currentUserId={currentUserId}
                        authorId={author.id}
                        parentId={parentId}
                        isComment={isComment}
                    />
            </div>
            <p className='mt-2 text-small-regular text-light-2'>{content}</p>

            <div className={`${isComment && "mb-10"} mt-5 flex flex-col gap-3`}>
              <div className='flex gap-3.5'>
                <LikeThread 
                  threadId={JSON.stringify(id)}
                  currentUserId={currentUserId}
                />
                <Link href={`/thread/${id}`}>
                  <Image
                    src='/assets/reply.svg'
                    alt='heart'
                    width={24}
                    height={24}
                    className='cursor-pointer object-contain'
                  />
                </Link>
                <RepostButton 
                text={content}
                repostedBy={currentUserId}
                author={author.id}
                />
                <ShareButton
                  
                />
                
              </div>

              {isComment && comments.length > 0 && (
                <Link href={`/thread/${id}`}>
                  <p className='mt-1 text-subtle-medium text-gray-1'>
                    {comments.length} repl{comments.length > 1 ? "ies" : "y"}
                  </p>
                </Link>
              )}
            </div>
          </div>
       
        </div>

      </div>

      {!isComment && comments.length > 0 && (
        <div className='ml-1 mt-3 flex items-center gap-2'>
          {comments.slice(0, 2).map((comment, index) => (
            <Image
              key={index}
              src={comment.author.image}
              alt={`user_${index}`}
              width={24}
              height={24}
              className={`${index !== 0 && "-ml-5"} rounded-full object-cover`}
            />
          ))}

          <Link href={`/thread/${id}`}>
            <p className='mt-1 text-subtle-medium text-gray-1'>
              {comments.length} repl{comments.length > 1 ? "ies" : "y"}
            </p>
          </Link>
        </div>
      )}

    <p className='mt-5 text-subtle-medium text-gray-1'>
    {formatDateString(createdAt)}
    </p>
      {!isComment && community && (
        <Link
          href={`/communities/${community.id}`}
          className='mt-5 flex items-center'
        >

          <Image
            src={community.image}
            alt={community.name}
            width={14}
            height={14}
            className='ml-1 rounded-full object-cover'
            />
            <p className='mt-1 text-subtle-medium text-gray-1'>
                {community && ` - ${community.name} Community`}
            </p>
        </Link>
      )}
    </article>
  );
}

export default ThreadCard;