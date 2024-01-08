import React from 'react';

type Props = {};

const Contact = (props: Props) => {
    return (
        <div className="p-[25px] md:px-[70px] md:py-10">
            <h1 className="text-[32px] pb-[15px] mb-5 border-b border-solid border-border-color">
                Liên hệ chúng tôi
            </h1>
            <div className="text-[#ffffff99] leading-[23px]">
                <p className=" mb-[15px]">
                    Email:{' '}
                    <span className="text-main-color font-bold cursor-pointer">
                        huydev2k1@gmail.com
                    </span>{' '}
                    (Nếu có vấn đề bản quyền vui lòng liên hệ để chúng tôi gỡ
                    phim xuống ngay lập tức…)
                </p>
            </div>
        </div>
    );
};

export default Contact;
