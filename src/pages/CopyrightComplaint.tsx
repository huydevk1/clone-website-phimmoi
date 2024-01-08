import React from 'react';

type Props = {};

const CopyrightComplaint = (props: Props) => {
    return (
        <div className="p-[25px] md:px-[70px] md:py-10">
            <h1 className="text-[32px] pb-[15px] mb-5 border-b border-solid border-border-color">
                Khiếu nại bản quyền
            </h1>
            <div className="text-[#ffffff99] leading-[23px]">
                <h3 className="text-[21px] font-bold leading-[28px] mb-[15px]">
                    1. Trách nhiệm nội dung
                </h3>
                <p className="mb-[15px]">
                    Nội dung trên website được đăng bởi người sử dụng, vì vậy
                    trách nhiệm về nội dung thuộc về người gửi bài lên trên hệ
                    thống. Ban quản trị của trang web sẽ thường xuyên kiểm tra
                    các nội dung trên trang và loại bỏ các nội dung vi phạm bản
                    quyền, nội dung quảng cáo, spam, clip rác, nội dung xúc
                    phạm, không trái với các quy định pháp luật.
                </p>
                <h3 className="text-[21px] font-bold leading-[28px] mb-[15px]">
                    2. Bản quyền
                </h3>
                <p className="mb-[15px]">
                    Là một trang web về thông tin giải trí, nhưng chúng tôi
                    không cam kết chắc chắn rằng có thể kiểm soát mọi thông tin
                    trên trang web. Bất kỳ hành vi xâm phạm đến bản quyền nào
                    nếu được báo cáo sẽ bị Ban quản trị gỡ bỏ khỏi trang web
                    trong thời gian sớm nhất.
                </p>
                <h3 className="text-[21px] font-bold leading-[28px] mb-[15px]">
                    3. Sở hữu trí tuệ
                </h3>
                <p className="mb-[15px]">
                    Mọi nội dung được đăng tải trên website, bao gồm thiết kế,
                    logo, các phần mềm, chức năng kỹ thuật, cấu trúc trang đều
                    thuộc bản quyền của website . Nghiêm cấm mọi sao chép, sửa
                    đổi, trưng bày, phân phát, chuyển tải, tái sử dụng, xuất
                    bản, bán, cấp phép, tái tạo hay sử dụng bất cứ nội dung nào
                    của trang web cho bất kỳ mục đích nào mà không có sự xác
                    nhận của Ban quản trị website .
                </p>
                <h3 className="text-[21px] font-bold leading-[28px] mb-[15px]">
                    4. Quy trình báo cáo vi phạm bản quyền
                </h3>
                <p className="mb-[15px]">
                    Nếu bạn tin rằng bất kỳ nội dung nào được phát hành thông
                    qua website vi phạm quyền sở hữu trí tuệ của bạn, vui lòng
                    thông báo cho chúng tôi về việc vi phạm bản quyền qua bình
                    luận bên dưới (Chú ý trong comment phải có chi tiết thông
                    tin liên hệ và đường link nội dung vi phạm bản quyền trên
                    website ) Chúng tôi sẽ xử lý từng thông báo vi phạm bản
                    quyền mà chúng tôi nhận được theo quy định của Điều khoản sử
                    dụng của website và quy định của pháp luật sở hữu trí tuệ.
                </p>
            </div>
        </div>
    );
};

export default CopyrightComplaint;
