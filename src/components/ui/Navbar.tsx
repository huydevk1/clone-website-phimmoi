import React from 'react';
import { navbar } from '../../constants';
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useGetMovieGenreQuery } from '../../services/movie.service';
import { GenreType, NavbarItemType } from '../../types';

type Props = {};

const Navbar = (props: Props) => {
    const { data } = useGetMovieGenreQuery({});

    return (
        <nav className="flex items-center text-base text-[#ffffffcc]">
            {navbar.map((item: NavbarItemType, index: number) => {
                return (
                    <div key={index}>
                        <div className="px-5 py-[23px] hover:text-main-color cursor-pointer group">
                            {item.subMenu === false ? (
                                <Link to={`/movie-genre?id=${item.genre_id}`}>{item.title}</Link>
                            ) : (
                                <>
                                    <h6 className="flex items-center relative">
                                        <span>{item.title}</span>
                                        <IoMdArrowDropdown size={20} />
                                    </h6>
                                    <div className="hidden absolute top-[70px] min-w-[500px] bg-[#000000fa] opacity-95 group-hover:block">
                                        <div className="grid grid-cols-3 text-sm">
                                            {data?.genres.map((item: GenreType, index: number) => (
                                                <Link key={index} to={`/movie-genre?id=${item.id}`}>
                                                    <div className="flex items-center text-[#ffffff80] px-5 py-[10px] leading-[14px] whitespace-nowrap overflow-hidden hover:text-main-color">
                                                        <IoMdArrowDropright size={20} />
                                                        <span>{item.name}</span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                );
            })}
        </nav>
    );
};

export default Navbar;
