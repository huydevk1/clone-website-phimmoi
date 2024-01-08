import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { MovieList } from '../components/feature';
import YouTube from 'react-youtube';
import { GenreType } from '../types';
import { BASE_IMG_URL } from '../constants/apiEndpoints';
import {
    FaStar,
    FaUserCircle,
    FaFacebookSquare,
    FaTwitterSquare,
    FaPinterestSquare,
    FaWhatsappSquare,
} from 'react-icons/fa';
import {
    useGetMovieByGenreQuery,
    useGetMovieDetailQuery,
    useGetMovieGenreQuery,
    useGetMovieVideoQuery,
} from '../services/movie.service';

type Props = {};

const Movie = (props: Props) => {
    const [dataMovieVideo, setDataMovieVideo] = useState<any>(null);
    const [genreName, setGenreName] = useState<string>('');
    const [selectedButton, setSelectedButton] = useState<number>(1);

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const movieId = params.get('id');
    const genreId = params.get('genre');

    const { data: movieVideo } = useGetMovieVideoQuery(movieId ? parseInt(movieId, 10) : 0);
    const { data: movieDetail } = useGetMovieDetailQuery(movieId ? parseInt(movieId, 10) : 0);
    const { data: movieSlider } = useGetMovieByGenreQuery(genreId ? parseInt(genreId, 10) : 0);
    const { data: movieGenre } = useGetMovieGenreQuery({});

    useEffect(() => {
        if (movieVideo && movieVideo.videos && movieVideo.videos.results) {
            const trailer = movieVideo.videos.results.find(
                (vid: any) => vid.name === 'Official Trailer',
            );
            let video = trailer ? trailer : movieVideo.videos.results[0];
            setDataMovieVideo(video);
        }
        movieGenre?.genres.map((item: GenreType, index: number) => {
            if (genreId && item.id === parseInt(genreId, 10)) {
                setGenreName(item.name);
            }
        });
    }, [movieVideo, movieId, genreId]);

    const handleButtonClick = (buttonNumber: number) => {
        setSelectedButton(buttonNumber);
    };
    return (
        <>
            <div>
                <div className="flex items-center whitespace-nowrap px-[10px] py-1">
                    <div className="flex leading-[15px] px-[10px] py-[5px]">
                        <Link to="/">
                            <div className="text-main-color mr-[15px]">Trang chủ</div>
                        </Link>
                        <MdKeyboardDoubleArrowRight size={15} color="#ffffff80" />
                    </div>
                    <div className="flex leading-[15px] px-[10px] py-[5px]">
                        <Link to={`/movie-genre?id=${genreId}`}>
                            <div className="text-main-color mr-[15px]">{genreName}</div>
                        </Link>
                        <MdKeyboardDoubleArrowRight size={15} color="#ffffff80" />
                    </div>
                    <div className="flex leading-[15px] px-[10px] py-[5px] overflow-hidden">
                        <div className="text-[#ffffff99] mr-[15px]">{movieDetail?.title}</div>
                    </div>
                </div>
                <div className="w-auto h-auto p-5 bg-black">
                    <div className="react-player relative pt-[56.25%]">
                        <YouTube
                            key={dataMovieVideo?.key}
                            videoId={dataMovieVideo?.key}
                            opts={{
                                width: '100%',
                                height: '100%',
                                playerVars: {
                                    autoplay: 0,
                                    controls: 1,
                                    cc_load_policy: 1,
                                    fs: 1,
                                    iv_load_policy: 1,
                                    modestbranding: 1,
                                    rel: 0,
                                    // showinfo: 0,
                                },
                            }}
                        />
                    </div>
                </div>
                {/* <h2 className="text-lg font-medium px-[30px] py-5 bg-[#000000b3] border-b border-solid border-border-color">
                    Chọn server
                </h2>
                <div className="px-[25px] bg-[#00000080]">
                    <div className="py-[25px]">
                        <div className="flex bg-[#ffffff1a] px-5 py-[15px] cursor-pointer">
                            <FaPlayCircle
                                size={20}
                                color="#fff"
                                className="mr-[15px]"
                            />
                            <span className="font-semibold leading-5">
                                Vietsub #1
                            </span>
                        </div>
                        <div className="flex px-5 py-[15px] cursor-pointer">
                            <FaPlayCircle
                                size={20}
                                color="#ffffff4d"
                                className="mr-[15px]"
                            />
                            <span className="font-semibold leading-5">
                                Vietsub #2
                            </span>
                        </div>
                    </div>
                    <div className="text-[#ff9800] leading-[17px] px-[25px] pb-[15px]">
                        Nếu không xem được vui lòng đổi server #2 hoặc #3 hoặc
                        tải lại trang !
                    </div>
                </div> */}
                <div className="flex gap-5 p-[25px] border-b border-solid border-border-color overflow-hidden">
                    <div className="w-[140px]">
                        <img
                            src={`${BASE_IMG_URL}${movieDetail?.poster_path}`}
                            alt="movie"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="grow">
                        <h1 className="text-3xl leading-8">{movieDetail?.title}</h1>
                        <div className="text-[13px] leading-5 py-[5px]">
                            <span className="text-[#ffffff47] font-medium pr-[15px]">
                                {movieDetail?.release_date}
                            </span>
                            <span className="text-[#ffffff99] pr-[15px]">
                                {movieDetail?.runtime} phút
                            </span>
                            <span className="text-[#ffffff99] pr-[15px]">USA</span>
                        </div>
                        <div className="hidden py-[10px] my-[10px] border-y border-solid border-border-color sm:block">
                            <div className="flex gap-[10px] py-[5px]">
                                <span className="block min-w-[60px] text-[27px] font-medium text-center p-[10px] rounded-[3px] bg-[#ffffff14] ">
                                    {Number(movieDetail?.vote_average.toFixed(1))}
                                </span>
                                <div>
                                    <div className="flex">
                                        <div className="flex gap-1">
                                            <FaStar size={20} color="#408BEA" />
                                            <FaStar size={20} color="#408BEA" />
                                            <FaStar size={20} color="#408BEA" />
                                            <FaStar size={20} color="#408BEA" />
                                            <FaStar size={20} color="#408BEA" />
                                            <FaStar size={20} color="#408BEA" />
                                            <FaStar size={20} color="#408BEA" />
                                            <FaStar size={20} color="#408BEA" />
                                            <FaStar size={20} color="#408BEA" />
                                            <FaStar size={20} color="#408BEA" />
                                        </div>
                                        <span className="text-xs text-center font-light leading-none px-[15px] py-[5px] ml-[10px] mt-[2px] bg-[#ffffff33] rounded-[3px]">
                                            Đánh giá của bạn: 0
                                        </span>
                                    </div>
                                    <div className="flex items-center text-xs text-[#9297a2] font-medium mt-[3px]">
                                        <FaUserCircle className="mr-[5px]" />
                                        <span>{movieDetail?.vote_average} đánh giá</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            {movieDetail?.genres.map((item: any, index: number) => (
                                <div
                                    key={index}
                                    className="text-[13px] font-medium pr-[15px] py-[5px] cursor-pointer"
                                >
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="border-b border-solid border-border-color sm:px-[25px]">
                    <div className="flex gap-1 text-sm font-medium p-[10px] sm:block sm:gap-0 sm:py-3">
                        <div
                            className={
                                selectedButton === 1
                                    ? 'grow text-center px-5 py-[10px] bg-main-color rounded-[3px] sm:inline-block cursor-pointer'
                                    : 'grow text-[#ffffff80] text-center px-5 py-[10px] rounded-[3px] sm:inline-block cursor-pointer hover:text-main-color'
                            }
                            onClick={() => handleButtonClick(1)}
                        >
                            Thông tin
                        </div>
                        <div
                            className={
                                selectedButton === 2
                                    ? 'grow text-center px-5 py-[10px] bg-main-color rounded-[3px] sm:inline-block cursor-pointer'
                                    : 'grow text-[#ffffff80] text-center px-5 py-[10px] rounded-[3px] sm:inline-block cursor-pointer hover:text-main-color'
                            }
                            onClick={() => handleButtonClick(2)}
                        >
                            Công ty sản xuất
                        </div>
                    </div>
                </div>
                {selectedButton === 1 && (
                    <div className="px-5 py-[25px] border-b border-solid border-border-color md:px-10">
                        <h2 className="text-lg font-medium pt-[5px] pb-[15px] mb-2">Tóm tắt</h2>
                        <p className="text-[#ffffff99] leading-[23px]">{movieDetail?.overview}</p>
                    </div>
                )}
                {selectedButton === 2 && (
                    <div className="px-5 py-[25px] border-b border-solid border-border-color md:px-10">
                        <h2 className="text-lg font-medium pt-[5px] pb-[15px] mb-2">
                            Tên công ty sản xuất
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3">
                            {movieDetail?.production_companies.map((item: any, index: number) => (
                                <div className="flex gap-3 min-h-[70px] pb-[10px] pr-5 mb-[10px] border-b border-solid border-border-color">
                                    <div className="w-[60px] h-[60px] overflow-hidden">
                                        <img
                                            src={`${BASE_IMG_URL}${item.logo_path}`}
                                            alt="logo company"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <span className="text-[15px] font-medium mb-[5px] whitespace-nowrap">
                                            {item.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div className="px-5 py-[25px] border-b border-solid border-border-color md:px-10">
                    <div className="flex items-center">
                        <span className="text-[15px] text-[#ffffff99] font-medium border-r-2 py-[5px] pl-[5px] pr-3 mr-[15px] border-solid border-border-color">
                            Chia sẻ <b className="text-white ml-[10px]">0</b>
                        </span>
                        <div className="flex items-center gap-1">
                            <FaFacebookSquare
                                size={28}
                                color="#4861a3"
                                className="cursor-pointer"
                            />
                            <FaTwitterSquare size={28} color="#03a9f4" className="cursor-pointer" />
                            <FaPinterestSquare
                                size={28}
                                color="#ca212a"
                                className="cursor-pointer"
                            />
                            <FaWhatsappSquare
                                size={28}
                                color="#51ce60"
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
                <div className="px-5 py-[25px] md:px-[30px]">
                    <MovieList title="Phim mới" data={movieSlider} />
                </div>
            </div>
        </>
    );
};

export default Movie;
