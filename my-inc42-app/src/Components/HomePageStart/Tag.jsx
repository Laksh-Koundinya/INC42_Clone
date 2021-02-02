import { StylesProvider } from '@material-ui/core'
import React from 'react'
import styles from "./HomePage.module.css"

export const Tag = ( {label} ) => {
    return (
        <>
          <button className = {styles.tagButton}>{label}</button>
        </>
    )
}
