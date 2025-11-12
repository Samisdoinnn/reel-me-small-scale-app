export const storyBubbles = [
  {
    id: '1',
    label: 'You',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400',
    active: true,
  },
  {
    id: '2',
    label: 'Ava',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400',
    active: true,
  },
  {
    id: '3',
    label: 'Liam',
    image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=400',
  },
  {
    id: '4',
    label: 'Noah',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
  },
  {
    id: '5',
    label: 'Mila',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
  },
] as const;

export const featureStories = [
  {
    id: 's1',
    title: 'Night Market Pop-Up',
    author: 'Ava Stone',
    views: '2.3K views',
    expiry: 'Expires in 3h',
    media: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900',
  },
  {
    id: 's2',
    title: 'Soundcheck Moments',
    author: 'Noah Miles',
    views: '1.8K views',
    expiry: '24h window',
    media: 'https://images.unsplash.com/photo-1529158062015-cad636e69505?w=900',
  },
] as const;

export const circles = [
  { id: 'c1', name: 'Vibe Check', members: 14, activeStories: 6, privacy: 'Private' as const },
  { id: 'c2', name: 'After Hours', members: 8, activeStories: 3, privacy: 'Invite' as const },
  { id: 'c3', name: 'Creator Lab', members: 25, activeStories: 9, privacy: 'Invite' as const },
] as const;

export const messages = [
  {
    id: 'm1',
    user: 'Ava Stone',
    snippet: '“Let’s co-host the live collab tonight—got the new filter ready.”',
    timestamp: '2m ago',
    unread: true,
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400',
  },
  {
    id: 'm2',
    user: 'Creator Lab',
    snippet: 'Jamie: “Dropping analytics template for everyone—check drive link.”',
    timestamp: '12m ago',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400',
  },
  {
    id: 'm3',
    user: 'Production Crew',
    snippet: 'Mila: “Schedule locked. I’ll share backstage access codes.”',
    timestamp: '1h ago',
    avatar: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
  },
] as const;

export const insights = [
  { id: 'i1', metric: 'Story reach', value: '12.4K', trend: 'up' as const, change: '+18% vs last 7d' },
  { id: 'i2', metric: 'Audience saves', value: '946', trend: 'steady' as const, change: 'Flat this week' },
  { id: 'i3', metric: 'Collab invites', value: '34', trend: 'up' as const, change: '+6 pending' },
] as const;

export const discoveries = [
  {
    id: 'd1',
    label: 'Creator Spotlight: Analog Dreams',
    category: 'Featured',
    media: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900',
  },
  {
    id: 'd2',
    label: 'Midnight Film Club',
    category: 'Circles',
    media: 'https://images.unsplash.com/photo-1529158062015-cad636e69505?w=900',
  },
] as const;

