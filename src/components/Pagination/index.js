import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'
import arrow from '../../assets/icons/arrow.svg'
export default function Pagination({
    currentIndex,
    totalItems,
    itemsPerPage,
    onPageChange,
    children
}) {
    const pagesCount = useMemo(() => Math.ceil(totalItems / itemsPerPage), [totalItems, itemsPerPage])
    const indexesToShow = 3
    // Get an arbitrary number (in case 2*boundariesToShow)
    // that, if pageCount is greater, it generate indexes (0 to 3)(pageCount-3 to pageCount)
    const splitPages = pagesCount > 2 * indexesToShow
    const getBoundaries = useCallback(() => {
        if (!splitPages) {
            return Array(pagesCount).fill().map((_, index) => ++index)
        }

        return [
            ...Array(indexesToShow).fill().map((_, index) => ++index),
            ...Array(indexesToShow).fill().map((_, index) => pagesCount - index).reverse()

        ]
    }, [pagesCount, splitPages])
    const handlePageChange = (index) => {
        if (currentIndex !== index) {
            onPageChange(index)
        }
    }
    return (
        <>
            {children}
            <div className={styles.container}>
                {currentIndex > 1 &&
                    <img
                        src={arrow}
                        className={styles.controls}
                        onClick={() => handlePageChange(currentIndex - 1)}
                    />}
                {
                    getBoundaries().map((pageIndex, arrayIndex) => (
                        <React.Fragment key={pageIndex}>
                            {(splitPages && arrayIndex === indexesToShow) && <span className={styles.divider}> ... </span>}
                            <span
                                className={styles.item}
                                onClick={() => handlePageChange(pageIndex)}
                                data-active={currentIndex === pageIndex}
                                role='button'
                            >
                                {pageIndex}
                            </span>
                        </React.Fragment>
                    ))
                }
                {currentIndex < pagesCount &&
                    <img
                        src={arrow}
                        className={styles.controls}
                        onClick={() => handlePageChange(currentIndex + 1)}
                    />}
            </div>
        </>
    )
}

Pagination.propTypes = {
    currentIndex: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number,
    onPageChange: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

Pagination.defaultProps = {
    itemsPerPage: 10
}
