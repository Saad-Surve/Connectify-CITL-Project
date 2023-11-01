"use client";

import { useEffect, useState} from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { checkFollowUser, followUser, unfollowUser } from "@/lib/actions/user.actions";

function FollowButton({ userId:userId}:{userId:string} ) {
  // const router = useRouter();
  const pathname = usePathname();
  const followUserId = pathname.split("/profile/")[1];
  const unfollowUserId = followUserId
  const checkUserId = followUserId
  const [isFollowing, setIsFollowing] = useState(false);
  //initialize the state isFollowing using the checkFollowUser function using useEffect
  useEffect(() => {
    const checkFollow = async () => {
      const res = await checkFollowUser(userId, checkUserId);
      setIsFollowing(res);
    };
    checkFollow();
  }, [userId, checkUserId]);

  return (
    <Button
      className={!isFollowing?"bg-primary-500":"bg-light-4"}
      onClick={async() => {
        if (!isFollowing) {
          await followUser(userId,followUserId);
       
        }else{
          await unfollowUser(userId,unfollowUserId);
         
        }
        setIsFollowing(!isFollowing);
      }}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
}

export default FollowButton;