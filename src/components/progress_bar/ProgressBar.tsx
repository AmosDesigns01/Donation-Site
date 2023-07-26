"use client"
import React from 'react'
import styles from './page.module.css'
import ReactProgressBar from "@ramonak/react-progress-bar";

const ProgressBar = () => {
  return (
    <div className={styles.progress_bar}>
        <h1>Overall amount realized so far</h1>
        <ReactProgressBar completed={180} maxCompleted={200} />
        <div className={styles.amount}>
          <p>Total amount realized so far:</p>
          <h3>₦162.5M</h3>
        </div>
    </div>
  )
}

export default ProgressBar