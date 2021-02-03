import React from 'react'
import styles from "./Card.module.css"


export const Date = ({published, timeTakenToRead}) => {
    return (
        <>
            <div className = {styles.small}>
              <div>{published}</div>
              <div>.</div>
              <div>{timeTakenToRead} read</div>
            </div>
        </>
    )
}
