import React, { ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';

type Props = {
    px?: number;
    py?: number;
    fontSize?: number;
    iconSize?: number;
    backgroundColor?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick?: any;
    onKeyPress?: any;
};

const SearchInput = ({
    px,
    py,
    fontSize,
    iconSize,
    backgroundColor,
    placeholder,
    value,
    onChange,
    onKeyPress,
    onClick,
}: Props) => {
    const styleClass = {
        fontSize: `${fontSize}px`,
        paddingTop: `${py}px`,
        paddingBottom: `${py}px`,
        paddingLeft: `${px}px`,
        paddingRight: `${px}px`,
        backgroundColor: `${backgroundColor}`,
    };

    return (
        <div
            className="flex items-center rounded-[5px] overflow-hidden"
            style={{ backgroundColor: `${backgroundColor}` }}
        >
            <input
                type="text"
                name=""
                id=""
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyPress}
                className="w-full font-light outline-none"
                style={styleClass}
            />
            <div className="px-[15px] py-3" onClick={onClick}>
                <FaSearch size={`${iconSize}`} className="cursor-pointer" />
            </div>
        </div>
    );
};

export default SearchInput;
