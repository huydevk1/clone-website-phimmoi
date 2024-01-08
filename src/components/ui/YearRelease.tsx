import React from 'react';
import { convertYear } from '../../utils';
import { yearRelease } from '../../constants';

type Props = {};

const YearRelease = (props: Props) => {
    return (
        <div className="pt-[10px] pb-5 mb-5">
            <h3 className="text-[17px] mb-[15px]">Năm phát hành</h3>
            <div className="grid grid-cols-3 gap-[6px] w-full max-h-[175px] text-[13px] custom-scrollbar md:overflow-hidden md:overflow-y-auto sm:grid-cols-4 md:grid-cols-3">
                {yearRelease?.map((item: string, index: number) => (
                    <div
                        key={index}
                        className="w-full text-[#ffffff80] font-medium text-center py-[8px] bg-[#0000004d] cursor-pointer"
                    >
                        {convertYear(item)}
                    </div>
                ))}
                {/* ))} */}
            </div>
        </div>
    );
};

export default YearRelease;
