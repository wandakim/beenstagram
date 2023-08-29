import { GetFollowingPostsOf } from '@/service/post';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response('Authentication Error', { status: 401 });
  }
  return GetFollowingPostsOf(user.username) //
    .then((data) => NextResponse.json(data));
}