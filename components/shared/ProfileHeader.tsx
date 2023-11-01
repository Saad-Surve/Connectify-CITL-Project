import Image from "next/image"
import FollowButton from "../forms/FollowButton";
interface Props{
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
  type?:'Community' | 'User';
}


const ProfileHeader = ({
  accountId, authUserId, name, username, imgUrl, bio, type
  }: Props) => {
  return(
    <div className='flex flex-col w-full justify-start'>
      <div className='flex items-center justify-between'>
        <div className='flex w-full items-center gap-3'>
          <div className="relative h-20 w-20 object-cover" >
            <Image
              src={imgUrl}
              alt="Profile image"
              fill
              className="rounded-full object-cover shadow-2xl"
            />
          </div>

          <div className='flex-1'>
            <h2 className='flex w-full justify-between items-center text-left text-heading text-bold text-light-1'>
              <span>{name}</span>
              <FollowButton
                userId={authUserId}
              />
            </h2>
            <p className='text-base-medium text-gray-1'>@{username}</p>
          </div>
        </div>
      </div>

      {/*  TODO: COMMUNITY*/}

        <p className='mt-6 max-w-lg text-base-regular text-light-2'>{bio}</p>

        <div className='mt-12 h-0.5 w-full bg-dark-3'/>
    </div>
  )
}

export default ProfileHeader;