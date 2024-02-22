import type { FC } from 'react';
import { SkillChart } from "../../component/skill-chart";

interface Skill {
    id: number;
    type: string;
    level: number;
    progress: number;
    suggest: string;
}

const skills: Skill[] = [
    {
        id: 1001,
        type: 'PainKiller',
        level: 1,
        progress: 500,
        suggest: 'kill several number of enemies to upgrade your skill',
    },
    {
        id: 1002,
        type: 'Healer',
        level: 2,
        progress: 220,
        suggest: 'heal any stranger to upgrade level',
    },
    {
        id: 1003,
        type: 'Millionaire',
        level: 1,
        progress: 700,
        suggest: 'collect variant type of diamond',
    },
]

export const SkillBar: FC = () => (
    <div className="flex flex-row flex-wrap border-2 border-magenta">
        <div className="w-[30%]">
            {skills.map((skill) => (
                <SkillChart
                    key={skill.id}
                    id={skill.id}
                    type={skill.type}
                    level={skill.level}
                    progress={skill.progress}
                    suggest={skill.suggest}
                />
            ))}
        </div>
    </div>
);
