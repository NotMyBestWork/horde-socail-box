import type { TweetData } from '@/types/tweet';

export const sampleTweets: TweetData[] = [
  {
    id: '1',
    text: 'Zug zug. Gruk say hello to clan. Is good day for smash.',
    author: { name: 'Gruk Stonefist', handle: 'grukzugzug', avatarUrl: '/avatars/avatar-1.svg' },
    createdAt: '2024-01-15T10:30:00Z',
    likes: 42,
    retweets: 10,
    replies: 5,
  },
  {
    id: '2',
    text: "Lok'tar ogar! New war-banner ready. Horde build strong when clan build together.",
    author: { name: 'Zog Ironjaw', handle: 'zogironjaw', avatarUrl: '/avatars/avatar-2.svg' },
    createdAt: '2024-01-15T11:00:00Z',
    likes: 128,
    retweets: 34,
    replies: 12,
  },
  {
    id: '3',
    text: 'Me not that kind of orc! Me just here to make da code obey.',
    author: { name: 'Drekka Geargrinder', handle: 'drekka-smash', avatarUrl: '/avatars/avatar-3.svg' },
    createdAt: '2024-01-15T12:15:00Z',
    likes: 89,
    retweets: 21,
    replies: 7,
  },
  {
    id: '4',
    text: 'Work is da poop. No more! Dizzle vote for nap, then hex whoever disagree.',
    author: { name: 'Dizzle Hex', handle: 'dizzlehex', avatarUrl: '/avatars/avatar-4.svg' },
    createdAt: '2024-01-15T13:45:00Z',
    likes: 256,
    retweets: 67,
    replies: 43,
  },
  {
    id: '5',
    text: "Taz'dingo! Coffee be hot, code review be done, spirits say ship it, mon.",
    author: { name: 'Rokhan Two-Coins', handle: 'rokhan-tazdingo', avatarUrl: '/avatars/avatar-5.svg' },
    createdAt: '2024-01-16T08:00:00Z',
    likes: 73,
    retweets: 8,
    replies: 3,
  },
];
