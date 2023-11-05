import Image from "next/image";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { fetchUser, getActivity } from "@/lib/actions/user.actions";

async function Page() {
  const user = await currentUser();
  if (!user) return null;
  
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  function writeUserActivity(type:string){
    switch(type){
      case 'reply':
        return 'replied to your post';
      case 'like':
        return 'liked your post';
      case 'repost':
        return 'reposted your post';
      default:
        return 'replied to your post';
    }
  }
  const activity = await getActivity(userInfo._id);
  return (
    <>
      <h1 className='head-text'>Activity</h1>

      <section className='mt-10 flex flex-col gap-5'>
        {activity.length > 0 ? (
          <>
            {activity.reverse().map((activity:any) => (
              <Link key={activity._id} href={`/thread/${activity.user}`}>
                <article className='activity-card'>
                  <p className='!text-small-regular text-light-1'>
                    <span className='mr-1 text-primary-500'>
                      {activity.username}
                    </span>{" "}
                    {writeUserActivity(activity.type)}
                  </p>
                </article>
              </Link>
            ))}
          </>
        ) : (
          <p className='!text-base-regular text-light-3'>No activity yet</p>
        )}
      </section>
    </>
  );
}

export default Page;