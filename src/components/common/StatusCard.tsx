import React from 'react';

type Props = {
    text?: string;
    color?: string;
    fontSize?: number;
    className?: string;
};

const StatusCard = ({ text, color, fontSize, className }: Props) => {
    const styles = { backgroundColor: `${color}`, fontSize: `${fontSize}px` };

    return (
        <span
            className={`text-xs text-white font-medium leading-none px-[10px] py-[5px] ${className}`}
            style={styles}
        >
            {text}
        </span>
    );
};

export default StatusCard;
