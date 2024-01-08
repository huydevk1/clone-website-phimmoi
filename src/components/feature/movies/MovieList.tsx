import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StatusCard } from '../../common';
import { FaPlay } from 'react-icons/fa';
import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri';
import { convertYear } from '../../../utils';
import { Link } from 'react-router-dom';
import { BASE_IMG_URL } from '../../../constants/apiEndpoints';
import { MovieType } from '../../../types';

type Props = {
    title?: string;
    data?: any;
};

const MovieList = ({ title, data }: Props) => {
    const ref = useRef<Slider>(null);

    const next = () => {
        ref.current?.slickNext();
    };

    const previous = () => {
        ref.current?.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        appendDots: (dots: any) => <ul>{dots}</ul>,
        customPaging: (i: any) => (
            <div className="ft-slick__dots--custom flex mx-[2px]">
                <div className="loading" />
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
        ],
    };

    return (
        <>
            <div>
                <div className="flex justify-between items-center px-[10px] py-[15px]">
                    <h2 className="text-xl font-medium leading-5 pl-[10px] border-l-[3px] border-solid border-border-blue">
                        {title}
                    </h2>
                    <div className="flex gap-1 md:gap-0">
                        <div className="px-[6px] border border-[#8888884d] rounded cursor-pointer md:border-none">
                            <RiArrowLeftSFill size={30} color="#ffffff80" onClick={previous} />
                        </div>
                        <div className="px-[6px] border border-[#8888884d] rounded cursor-pointer md:border-none">
                            <RiArrowRightSFill size={30} color="#ffffff80" onClick={next} />
                        </div>
                    </div>
                </div>
                <Slider ref={ref} {...settings}>
                    {data?.results.slice(0, 15).map((item: MovieType, index: number) => (
                        <div key={index}>
                            <div className="p-[5px] sm:p-[10px]">
                                <Link to={`/movie?id=${item.id}&genre=${item.genre_ids[0]}`}>
                                    <div className="relative overflow-hidden cursor-pointer group">
                                        <img
                                            src={`${BASE_IMG_URL}${item.poster_path}`}
                                            alt="movie"
                                            className="w-full h-full object-cover transition ease-in-out group-hover:scale-125 group-hover:blur-[2px]"
                                        />
                                        <StatusCard
                                            text={`${item.vote_average} điểm`}
                                            color="#ff0000"
                                            className="absolute left-0 top-0 z-20"
                                        />
                                        <StatusCard
                                            text={`${item.popularity} lượt xem`}
                                            color="#408BEA"
                                            fontSize={10}
                                            className="absolute left-0 bottom-0 z-20"
                                        />
                                        <div className="hidden absolute inset-0 bg-black opacity-65 group-hover:block z-10">
                                            <FaPlay
                                                size={40}
                                                color="#fff"
                                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-none opacity-100"
                                            />
                                        </div>
                                    </div>
                                </Link>
                                <div className="whitespace-nowrap pt-[15px] pb-[10px] overflow-hidden">
                                    <Link to={`/movie?id=${item.id}`}>
                                        <h3 className="hover:text-main-color cursor-pointer">
                                            {item.title}
                                        </h3>
                                    </Link>
                                    <span className="text-xs text-[#ffffff80] leading-6">
                                        {convertYear(item.release_date)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default MovieList;
