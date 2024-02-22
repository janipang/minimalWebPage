import type { FC } from 'react';
import { ProfileCard } from "../../component/profile-card";

interface Friend {
    id: number;
    profile: string;
    name: string;
    status: string;
}

const friends: Friend[] = [
    {
        id: 1001,
        profile: 'k1tt0n.png',
        name: 'k1tt0n',
        status: 'online',
    },
    {
        id: 1002,
        profile: 'khris_xp.png',
        name: 'khris_xp',
        status: 'online',
    },
    {
        id: 1003,
        profile: 'ryu.png',
        name: 'ryu',
        status: 'idle',
    },
]

export const FriendBar: FC = () => (
    <div className="p-0.5">
        <div className="h-full container">
            {friends.map((friend) => (
                <ProfileCard
                    key={friend.id}
                    id={friend.id}
                    profile={friend.profile}
                    name={friend.name}
                    status={friend.status}
                />
            ))}
        </div>
    </div>
);
