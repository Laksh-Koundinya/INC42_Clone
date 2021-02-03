import React from 'react'
import styles from "./HomePage.module.css"

export const Tag = ( {label,handleClick} ) => {
    return (
        <>
          <button 
            onClick = {() => handleClick(label) }
            className = {styles.tagButton}>{label}</button>
        </>
    )
}
