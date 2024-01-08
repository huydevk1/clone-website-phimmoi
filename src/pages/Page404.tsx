import React from 'react';

type Props = {};

const Page404 = (props: Props) => {
    return (
        <div className="p-5">
            <div className="px-[10px] py-[15px]">
                <h2 className="text-xl font-medium leading-5 pl-[10px] border-l-[3px] border-solid border-border-blue">
                    Không tìm thấy trang
                </h2>
            </div>
            <div className="text-[#ffffff66] p-[10px] sm:p-5">
                <h2 className="text-xl font-normal mb-5 sm:text-3xl">
                    ERROR <span className="font-semibold">404</span>
                </h2>
                <strong className="text-xl">Gợi ý:</strong>
                <ul className="list-decimal ml-[30px] my-5">
                    <li className="leading-5 py-[5px]">Xác minh rằng liên kết là chính xác.</li>
                    <li className="leading-5 py-[5px]">Sử dụng hộp tìm kiếm trên trang.</li>
                    <li className="leading-5 py-[5px]">Liên hệ với trang hỗ trợ.</li>
                </ul>
            </div>
        </div>
    );
};

export default Page404;
