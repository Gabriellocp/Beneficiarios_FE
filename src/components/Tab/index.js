import React, { useState } from 'react'
import styles from './styles.scss'
import PropTypes from 'prop-types'
export default function Tab({ headers, children }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const isTabSelected = (index) => {
        return index === activeIndex
    }

    const handleChangeTab = (index) => {
        if (activeIndex === index) return
        setActiveIndex(index)
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {
                    headers.map((header, index) => (
                        <span
                            className={styles.headerItem}
                            data-active={isTabSelected(index)}
                            onClick={() => handleChangeTab(index)}
                            key={header}
                        >
                            {header}
                        </span>)
                    )
                }
            </div>
            <div className={styles.content}>
                {children?.map((child, index) => {
                    if (index !== activeIndex) return null
                    return (<React.Fragment key={headers[index]}>{child}</React.Fragment>)
                })}
            </div>
        </div>

    )
}

Tab.propTypes = {
    headers: PropTypes.array.isRequired,
    children: PropTypes.arrayOf(
        PropTypes.node
    ).isRequired
}
