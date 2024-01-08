import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StatusCard } from '../../common';
import { convertYear } from '../../../utils';
import { Link } from 'react-router-dom';
import { BASE_IMG_URL } from '../../../constants/apiEndpoints';
import { MovieType } from '../../../types';

type Props = {
    data?: any;
};

const HomeSlider = ({ data }: Props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div>
            <Slider {...settings}>
                {data?.results?.slice(0, 5).map((item: MovieType, index: any) => (
                    <div key={index}>
                        <Link to={`/movie?id=${item.id}&genre=${item.genre_ids[0]}`}>
                            <div className="p-[10px] mb-[10px] cursor-pointer group">
                                <div className="relative">
                                    <div className="max-h-[285px] overflow-hidden sm:max-h-[200px]">
                                        <img
                                            src={`${BASE_IMG_URL}${item.backdrop_path}`}
                                            alt=""
                                            className="w-full h-auto ease-linear duration-200 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="absolute left-0 bottom-0 w-full bg-gradient-to-t from-black to-transparent p-[14px]">
                                        <h3 className="text-[17px] leading-[30px] text-shadow whitespace-nowrap">
                                            {item.title}
                                        </h3>
                                        <span className="text-[13px] text-shadow">
                                            {convertYear(item.release_date)}
                                        </span>
                                    </div>
                                    <StatusCard
                                        text={`${item.popularity} lượt xem`}
                                        color="#408BEA"
                                        className="absolute right-0 bottom-0"
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HomeSlider;
