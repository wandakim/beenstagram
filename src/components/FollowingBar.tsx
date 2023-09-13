'use client';
import useMe from '@/hooks/me';
import Link from 'next/link';
import { PropagateLoader } from 'react-spinners';
import Avatar from './ui/Avatar';
import ScrollableBar from './ui/ScrollableBar';
export default function FollowingBar() {
  const { user, isLoading: loading, error } = useMe();
  const users = user?.following;

  return (
    <section className='relative z-0 mb-4 flex min-h-[90px] w-full items-center justify-center overflow-x-auto rounded-lg p-4 shadow-sm shadow-neutral-300'>
      {loading ? (
        <PropagateLoader size={8} color='red' />
      ) : (
        (!users || users.length === 0) && <p>{`Not following anyone`}</p>
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ image, username }) => (
            <Link
              key={username}
              className='flex w-20 flex-col items-center'
              href={`/user/${username}`}
            >
              <Avatar image={image} highlight />
              <p className='w-full overflow-hidden text-ellipsis text-center text-sm'>
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}
