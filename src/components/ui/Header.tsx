import React, { ChangeEvent, useState } from 'react';
import Navbar from './Navbar';
import { SearchInput } from '../common';
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoSearchOutline } from 'react-icons/io5';
import { FaTimes } from 'react-icons/fa';
import { IoMdArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/phimmoi.png';
import { useNavigate } from 'react-router-dom';
import { navbar } from '../../constants';
import { useGetMovieGenreQuery } from '../../services/movie.service';

type Props = {};

const Header = (props: Props) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedTimes, setSelectedTimes] = useState<number>(1);
    const [selectedSearch, setSelectedSearch] = useState<number>(1);

    const navigate = useNavigate();

    const { data: movieGenre } = useGetMovieGenreQuery({});

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            setSelectedSearch(1);
            navigate(`/search?search=${encodeURIComponent(searchQuery)}`);
        }
    };

    const handleClick = (event: any) => {
        event.preventDefault();
        setSelectedSearch(1);
        navigate(`/search?search=${encodeURIComponent(searchQuery)}`);
    };

    const handleClickTimes = (buttonNumber: number) => {
        setSelectedTimes(buttonNumber);
    };

    const handleClickSearch = (buttonNumber: number) => {
        setSelectedSearch(buttonNumber);
    };

    return (
        <header className="w-full bg-bg-color backdrop-blur-[10px] backdrop-saturate-[180%] opacity-100 shadow-md z-50 md:fixed md:left-0 md:top-0 md:right-0">
            <div className="max-w-[1200px] h-[54px] mx-auto md:h-[70px]">
                <div className="flex justify-between items-center">
                    <div className="p-[18px] cursor-pointer md:hidden">
                        <div className={selectedTimes === 1 ? 'block' : 'hidden'}>
                            <FaBarsStaggered size={20} onClick={() => handleClickTimes(2)} />
                        </div>
                        <div className={selectedTimes === 2 ? 'block' : 'hidden'}>
                            <FaTimes
                                size={20}
                                color="#408BEA"
                                onClick={() => handleClickTimes(1)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Link to="/">
                            <div className="py-[10px] cursor-pointer md:py-[19px] md:px-[17px] md:bg-[#ffffff0d]">
                                <img src={logo} alt="logo" className="w-auto h-8" />
                            </div>
                        </Link>
                        <div className="hidden md:block">
                            <Navbar />
                        </div>
                    </div>
                    <div className="p-[18px] cursor-pointer md:hidden">
                        <div className={selectedSearch === 1 ? 'block' : 'hidden'}>
                            <IoSearchOutline size={20} onClick={() => handleClickSearch(2)} />
                        </div>

                        <div className={selectedSearch === 2 ? 'block' : 'hidden'}>
                            <FaTimes
                                size={20}
                                color="#408BEA"
                                onClick={() => handleClickSearch(1)}
                            />
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <SearchInput
                            value={searchQuery}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            onClick={handleClick}
                            placeholder="Tìm kiếm..."
                            px={10}
                            fontSize={14}
                            iconSize={15}
                            backgroundColor="#2d2d2d"
                        />
                    </div>
                </div>
            </div>
            <div className={`${selectedSearch === 2 ? 'block' : 'hidden'}`}>
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
            <div
                className={`w-screen text-[19px] text-[#ffffffcc] font-medium leading-[19px] whitespace-nowrap bg-[#0a0a0afa] shadow-md z-[999px] ${
                    selectedTimes === 2 ? 'block' : 'hidden'
                }`}
            >
                {navbar.map((item: any, index: number) => (
                    <div key={index}>
                        {item.subMenu === false ? (
                            <div className=" border-b border-solid border-border-color overflow-hidden cursor-pointer ">
                                <Link
                                    to={`/movie-genre?id=${item.genre_id}`}
                                    onClick={() => handleClickTimes(1)}
                                >
                                    <h6 className="px-[15px] py-[17px] hover:text-main-color hover:bg-black">
                                        {item.title}
                                    </h6>
                                </Link>
                            </div>
                        ) : (
                            <div className=" border-b border-solid border-border-color overflow-hidden cursor-pointer ">
                                <h6 className="px-[15px] py-[17px] hover:text-main-color hover:bg-black">
                                    {item.title}
                                </h6>
                                <div className="grid grid-cols-2 text-sm text-[#fdfdfd80] font-normal mb-[15px]">
                                    {movieGenre?.genres.map((item: any, index: number) => (
                                        <Link
                                            key={index}
                                            to={`/movie-genre?id=${item.id}`}
                                            onClick={() => handleClickTimes(1)}
                                        >
                                            <div className="flex px-5 py-[5px] hover:text-main-color">
                                                <IoMdArrowDropright size={20} />
                                                {item.name}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </header>
    );
};

export default Header;
