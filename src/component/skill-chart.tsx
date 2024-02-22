import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

interface SkillChartProps {
    id: number;
    type: string;
    level: number;
    progress: number;
    suggest: string;
}

export const SkillChart: FC<SkillChartProps> = (props) => {
    return (
        <div className="text-center shadow-black drop-shadow-lg rounded-lg p-2 border-2 border-black bg-white">
            <p>{props.type}</p>
            <div className="p-2">
                <div className="text-center p-2">
                    {props.level}
                </div>
            </div>
            <p className="text-center">{props.suggest}</p>
        </div>
    );
};

SkillChart.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    suggest: PropTypes.string.isRequired
};
