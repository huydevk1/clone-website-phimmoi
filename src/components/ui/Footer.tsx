import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { footerCategory } from '../../constants';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/phimmoi.png';

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer className="hidden w-full mb-10 md:block">
            <div className="max-w-[1200px] px-10 mx-auto bg-bg-color">
                <div className="flex justify-between py-10 border-b border-solid border-border-color">
                    <div className="max-w-[320px]">
                        <Link to="/">
                            <div className="py-[10px]">
                                <img
                                    src={logo}
                                    alt=""
                                    className="max-w-[200px] h-auto object-cover"
                                />
                            </div>
                        </Link>
                        <div className="py-[10px]">
                            <p className="text-[13px] text-txt-gray leading-5">
                                <Link to="/">
                                    <span className="text-main-color font-bold cursor-pointer">
                                        Phimmoi
                                    </span>{' '}
                                </Link>
                                - Trang xem phim Online với giao diện mới được bố trí và thiết kế
                                thân thiện với người dùng. Nguồn phim được tổng hợp từ các website
                                lớn với đa dạng các đầu phim và thể loại vô cùng phong phú.
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        {footerCategory?.map((item, index) => (
                            <div key={index} className="w-[200px] text-[13px]">
                                <h3 className="text-[15px] text-title-color font-medium py-[10px]">
                                    {item.title}
                                </h3>
                                {item.child?.map((item, index) => (
                                    <Link
                                        to={
                                            typeof item === 'string'
                                                ? item
                                                : item?.link ?? `/movie-genre?id=${item.genre_id}`
                                        }
                                        key={index}
                                        className="block text-main-color py-[7px] cursor-pointer"
                                    >
                                        {typeof item === 'string' ? item : item?.title}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-[13px] text-txt-gray py-10">
                        &copy; <span>Phimmoi</span>
                    </div>
                    <div className="flex py-10">
                        <div className="px-5">
                            <FaFacebookF size={15} color="#fff" className="cursor-pointer" />
                        </div>
                        <div className="px-5">
                            <FaTwitter size={15} color="#fff" className="cursor-pointer" />
                        </div>
                        <div className="px-5">
                            <FaInstagram size={15} color="#fff" className="cursor-pointer" />
                        </div>
                        <div className="px-5">
                            <FaYoutube size={15} color="#fff" className="cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
