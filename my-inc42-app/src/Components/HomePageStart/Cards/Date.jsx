import React from 'react'
import styles from "./Card.module.css"


export const Date = () => {
    return (
        <>
            <div className = {styles.small}>
              <div>September 14, 2016</div>
              <div>.</div>
              <div>2 min read</div>
            </div>
        </>
    )
}
