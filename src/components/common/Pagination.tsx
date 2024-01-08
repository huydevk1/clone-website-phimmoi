import React from 'react';

type Props = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    visiblePages: number[];
    activePagining: number | null;
    handleFirstPage: () => void;
    handleLastPage: () => void;
};

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    visiblePages,
    activePagining,
    handleFirstPage,
    handleLastPage,
}: Props) => {
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
                    onClick={() => onPageChange(page)}
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

export default Pagination;
