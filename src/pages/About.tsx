import React from 'react';

type Props = {};

const About = (props: Props) => {
    return (
        <div className="p-[25px] md:px-[70px] md:py-10">
            <h1 className="text-[32px] pb-[15px] mb-5 border-b border-solid border-border-color">
                Giới thiệu
            </h1>
            <div className="text-[#ffffff99] leading-[23px]">
                <p className=" mb-[15px]">
                    <span className="text-main-color font-bold cursor-pointer">
                        Phimmoi
                    </span>{' '}
                    là website xem phim online và chia sẻ thông tin các bộ phim
                    mới thông qua nhiều nguồn khác nhau từ các thành viên trên
                    diễn đàn. Hàng ngàn video HD & FullHD cùng đi đôi với phụ đề
                    vietsub, thuyết minh lồng tiếng đầy đủ đang chờ bạn khám
                    phá.
                </p>
                <p>
                    Với giao diện mới mẻ của trang web phimmoi được thay đổi đơn
                    giản thân thiện, trực quan, dễ sử dụng, cực nhanh, cực nét,
                    cực mượt. Chúc các bạn xem phim vui vẻ !
                </p>
            </div>
        </div>
    );
};

export default About;
