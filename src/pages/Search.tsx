import React, { ChangeEvent, useEffect, useState } from 'react';
import { SearchInput } from '../components/common';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { convertYear } from '../utils';
import { useGetMovieSearchQuery } from '../services/movie.service';
import { MovieType } from '../types';

type Props = {};

const Search = (props: Props) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [visiblePages, setVisiblePages] = useState<number[]>([1, 2, 3, 4, 5]);
    const [activePagining, setActivePagining] = useState<number | null>(0);

    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('search');

    const { data: movieSearch } = useGetMovieSearchQuery({ currentPage, searchParam });

    useEffect(() => {
        setTotalPages(movieSearch?.total_pages);
    }, [movieSearch]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            navigate(`/search?search=${encodeURIComponent(searchQuery)}`);
        }
    };

    const handleClick = (event: any) => {
        event.preventDefault();
        navigate(`/search?search=${encodeURIComponent(searchQuery)}`);
    };

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage, searchParam]);

    return (
        <div className="p-5 md:px-[100px] md:py-10">
            <div className="py-[10px] md:px-[10px] md:py-[15px]">
                <h2 className="text-xl font-medium leading-5 pl-[10px] border-l-[3px] border-solid border-border-blue">
                    Kết quả tìm kiếm: {searchParam}
                </h2>
            </div>
            <div className="mb-[10px]">
                <SearchInput
                    value={searchQuery}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    onClick={handleClick}
                    placeholder="Tìm kiếm..."
                    px={20}
                    py={14}
                    fontSize={18}
                    iconSize={20}
                    backgroundColor="#000000e6"
                />
            </div>
            {movieSearch?.results.map((item: MovieType, index: number) => (
                <div
                    key={index}
                    className="flex gap-5 py-[15px] border-b border-solid border-border-color last:border-none"
                >
                    <Link to={`/movie?id=${item.id}`}>
                        <div className="w-[90px] h-auto overflow-hidden sm:min-w-[110px] sm:h-[110px]">
                            <img
                                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                                alt="movie"
                                className="w-full h-auto"
                            />
                        </div>
                    </Link>
                    <div className="grow">
                        <Link to={`/movie?id=${item.id}`}>
                            <h4 className="text-[15px] text-[#ffffffb3] font-medium leading-5 mb-[10px] cursor-pointer hover:text-white">
                                {item.title}
                            </h4>
                        </Link>
                        <span className="block text-sm leading-none text-[#ffffff99] mb-[10px]">
                            {convertYear(item.release_date)}
                        </span>
                        <p className="text-[13px] font-light leading-[18px] text-[#a6aab1]">
                            {item.overview}
                        </p>
                    </div>
                </div>
            ))}
            <div className="mt-4">{renderPaginationButtons()}</div>
        </div>
    );
};

export default Search;
