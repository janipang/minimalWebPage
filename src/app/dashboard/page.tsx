import { FC } from "react";
import { FriendBar } from "../../section/dashboard/friendBar";
import { SkillBar } from "@/section/dashboard/skillBar";

const Dashboard: FC = () => {

    return (
        <>
            <div className="w-full flex flex-row flex-wrap border-2 border-brown">
                <div className="w-4/5 min-w-[375px] border-2 border-cyan">
                        <SkillBar/>
                        <SkillBar/>
                </div>
                <div className="w-1/5">
                    <FriendBar />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
