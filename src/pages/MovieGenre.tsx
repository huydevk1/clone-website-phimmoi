import React, { useEffect, useState } from 'react';
import { StatusCard } from '../components/common';
import { FaPlay } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { BASE_IMG_URL } from '../constants/apiEndpoints';
import {
    useGetMovieByCurrentPageAndGenreQuery,
    useGetMovieGenreQuery,
} from '../services/movie.service';
import { MovieType, GenreType } from '../types';

type Props = {};

const MovieGenre = (props: Props) => {
    const [genreName, setGenreName] = useState<string>('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [visiblePages, setVisiblePages] = useState<number[]>([1, 2, 3, 4, 5]);
    const [activePagining, setActivePagining] = useState<number | null>(0);

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const genreId = params.get('id');
    const parsedGenreId = genreId ? parseInt(genreId, 10) : 0;

    const { data: dataMovie } = useGetMovieByCurrentPageAndGenreQuery({
        currentPage,
        genreId: parsedGenreId,
    });

    console.log(dataMovie);
    const { data: movieGenre } = useGetMovieGenreQuery({});

    useEffect(() => {
        setTotalPages(dataMovie?.total_pages);
        movieGenre?.genres.map((item: GenreType, index: number) => {
            if (genreId && item.id === parseInt(genreId, 10)) {
                setGenreName(item.name);
            }
        });
    }, [genreId, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        setActivePagining(page);
    };

    const handleFirstPage = () => {
        if (visiblePages[0] > 1) {
            const newVisiblePages = Array.from(
                { length: 5 },
                (_, index) => visiblePages[0] + index - 1,
            );
            setVisiblePages(newVisiblePages);
            setCurrentPage(currentPage - 1);
        }
    };

    const handleLastPage = () => {
        if (visiblePages[4] < totalPages) {
            const newVisiblePages = Array.from(
                { length: 5 },
                (_, index) => visiblePages[1] + index,
            );
            setVisiblePages(newVisiblePages);
            setCurrentPage(currentPage + 1);
        }
    };

    const renderPaginationButtons = () => {
        return (
            <div>
                <button
                    onClick={handleFirstPage}
                    disabled={visiblePages[0] === 1}
                    className="text-xs px-[10px] py-[7.5px] mx-[5px] bg-[#0000001a] border border-solid border-[#00000080] rounded-[3px]"
                >
                    &lt;&lt;
                </button>
                {visiblePages.map((page: number, index: number) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        disabled={page === currentPage}
                        className="text-xs px-[10px] py-[7.5px] mx-[5px] bg-[#0000001a] border border-solid border-[#00000080] rounded-[3px]"
                        style={{
                            color: activePagining === page ? '#408BEA' : '#fff',
                            backgroundColor: activePagining === page ? '#000' : '#0000001a',
                            borderColor: activePagining === page ? '#000' : '#00000080',
                        }}
                    >
                        {page}
                    </button>
                ))}
                <button
                    onClick={handleLastPage}
                    disabled={visiblePages[4] === totalPages}
                    className="text-xs px-[10px] py-[7.5px] mx-[5px] bg-[#0000001a] border border-solid border-[#00000080] rounded-[3px]"
                >
                    &gt;&gt;
                </button>
            </div>
        );
    };

    return (
        <div className="p-5">
            <h1 className="text-[32px] font-bold text-center mt-[15px] mb-[25px]">{genreName}</h1>
            <div className="py-[10px] md:px-[10px] md:py-[15px]">
                <h2 className="text-xl font-medium leading-5 pl-[10px] border-l-[3px] border-solid border-border-blue">
                    {genreName} mới cập nhật
                </h2>
            </div>
            <div className="grid grid-cols-3 border-b border-solid border-border-color sm:grid-cols-4 lg:grid-cols-5">
                {dataMovie?.results.map((item: MovieType, index: number) => (
                    <Link key={index} to={`/movie?id=${item.id}&genre=${genreId}`}>
                        <div className="p-[5px] overflow-hidden sm:p-[10px]">
                            <div className="relative overflow-hidden cursor-pointer group">
                                <img
                                    src={`${BASE_IMG_URL}${item.poster_path}`}
                                    alt=""
                                    className="w-full h-auto object-cover transition ease-in-out group-hover:scale-125 group-hover:blur-[2px]"
                                />
                                <StatusCard
                                    text={`${item.popularity} lượt xem`}
                                    color="#408BEA"
                                    fontSize={10}
                                    className="absolute left-1 bottom-1"
                                />
                                <div className="hidden absolute inset-0 bg-black opacity-65 group-hover:block z-10">
                                    <FaPlay
                                        size={40}
                                        color="#fff"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-none opacity-100"
                                    />
                                </div>
                            </div>
                            <div className="mt-[15px] mb-[10px]">
                                <h3 className="font-medium leading-5 whitespace-nowrap cursor-pointer hover:text-main-color">
                                    {item.title}
                                </h3>
                                <span className="text-xs text-[#ffffff80] leading-6 whitespace-nowrap">
                                    {item.original_title}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="mt-4">{renderPaginationButtons()}</div>
        </div>
    );
};

export default MovieGenre;
