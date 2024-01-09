import React from 'react';
import YearRelease from './YearRelease';
import { FaStar } from 'react-icons/fa';
import { convertYear } from '../../utils';
import { Link } from 'react-router-dom';
import { BASE_IMG_URL } from '../../constants/apiEndpoints';
import { useGetMovieSortByQuery } from '../../services/movie.service';
import { MovieType } from '../../types';

type Props = {};

const Sidebar = (props: Props) => {
    const { data: movieSortByPopularity } = useGetMovieSortByQuery('popularity.desc');
    const { data: movieSortByRevenue } = useGetMovieSortByQuery('revenue.desc');

    return (
        <div className="p-5 md:p-[30px]">
            <YearRelease />
            {movieSortByPopularity?.results.slice(0, 1).map((item: MovieType, index: number) => (
                <div key={index}>
                    <Link to={`/movie?id=${item.id}&genre=${item.genre_ids[0]}`}>
                        <div className="relative w-full h-[120px] mb-5 overflow-hidden group cursor-pointer">
                            <img
                                src={`${BASE_IMG_URL}${item.backdrop_path}`}
                                alt="banner"
                                className="w-full h-auto object-cover group-hover:blur-[0.8px]"
                            />
                            <div className="absolute left-0 bottom-0 p-[10px]">
                                <h3 className="leading-5 whitespace-nowrap text-shadow">
                                    {item.title}
                                </h3>
                                <span className="text-[13px] text-[#ffffffb3] text-shadow">
                                    {convertYear(item.release_date)}
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
                {movieSortByRevenue?.results.slice(0, 9).map((item: MovieType, index: number) => (
                    // <Link
                    //     to={{
                    //         pathname: `/movie`,
                    //         state: { id: item.id, genre: item.genre_ids[0] },
                    //     }}
                    // >
                    <Link to={`/movie?id=${item.id}&genre=${item.genre_ids[0]}`}>
                        <div
                            key={index}
                            className="flex w-full h-[90px] mb-[10px] bg-[#0000004d] overflow-hidden cursor-pointer group hover:bg-black"
                        >
                            <div className="min-w-[80px] h-[90px] overflow-hidden">
                                <img
                                    src={`${BASE_IMG_URL}${item.poster_path}`}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="grow p-[10px]">
                                <h3 className="text-[13px] text-[#ffffffcc] font-medium whitespace-nowrap leading-[18px]">
                                    {item.title}
                                </h3>
                                <div className="flex text-[#ffffff66] py-[5px]">
                                    <span className="flex px-[7px] py-1 rounded-[3px] border border-solid border-[#ffffff24]">
                                        <FaStar
                                            size={14}
                                            className="mr-[5px] group-hover:text-main-color"
                                        />
                                        <span className="text-[13px] font-normal">
                                            {item.vote_average}
                                        </span>
                                    </span>
                                    <span className="text-[13px] leading-6 ml-[5px] opacity-60">
                                        {convertYear(item.release_date)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
