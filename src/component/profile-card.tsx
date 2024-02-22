import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

interface ProfileCardProps {
    id: number;
    profile: string;
    name: string;
    status: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    return (
        <div className="w-full h-1/6 grid grid-cols-5 grid-flow-row gap-2 bg-macaroon border-2 border-indigo-600">
            <div className="flex h-full content-center border-2 border-red-600">
                <img
                    className="rounded-full"
                    src={`/user/${props.profile}`}
                    width="72"
                    height="72"
                    alt="Profile"
                />
            </div>
            <div className="bg-inherit col-span-4 grid grid-rows-3 grid-flow-row">
                <a className="" href={`/user/${props.name}`}>
                    {props.name}
                </a>
                <div className="bg-inherit row-span-3">
                    {props.status}
                </div>
            </div>
        </div>
    );
};

ProfileCard.propTypes = {
    id: PropTypes.number.isRequired,
    profile: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
};
