interface PaginationProps {
    page: number;
    totalPages: number;
    handlePageClick: (pageNumber: number) => void;
}
const Pagination = ({ page, totalPages, handlePageClick }: PaginationProps) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPageButtons = 5;
        let startPage = Math.max(page - Math.floor(maxPageButtons / 2), 1);
        let endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

        if (endPage - startPage < maxPageButtons - 1) {
            startPage = Math.max(endPage - maxPageButtons + 1, 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    disabled={i === page}
                    className={`${
                        i === page ? 'pagination__button--active ' : ''
                    } pagination__button`}
                >
                    {i}
                </button>
            );
        }

        return pageNumbers;
    };
    return (
        <div className="pagination">
            <button
                className="pagination__button"
                onClick={() => handlePageClick(1)}
                disabled={page === 1}
            >
                {'<<'}
            </button>
            <button
                className="pagination__button"
                onClick={() => handlePageClick(page - 1)}
                disabled={page === 1}
            >
                {'<'}
            </button>
            {renderPageNumbers()}
            <button
                className="pagination__button"
                onClick={() => handlePageClick(page + 1)}
                disabled={page === totalPages}
            >
                {'>'}
            </button>
            <button
                className="pagination__button"
                onClick={() => handlePageClick(totalPages)}
                disabled={page === totalPages}
            >
                {'>>'}
            </button>
        </div>
    );
};

export default Pagination;
