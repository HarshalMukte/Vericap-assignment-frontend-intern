import React from 'react'
import styles from "./logout.module.scss"

const Logout = () => {
  return (
    <div className={styles.logoutPage}>
        <div className={styles.imageDiv}>
            <img src="/images/WebsiteMaintenance.gif" alt="image" />
        </div>
        <h2 className={styles.heading}>
            Website Under Construction
        </h2>
    </div>
  )
}

export default Logout