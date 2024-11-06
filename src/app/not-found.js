import React from 'react'
import styles from './notFound.module.scss'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className={styles.logoutPage}>
        <div className={styles.imageDiv}>
            <img src="/images/WebsiteMaintenance.gif" alt="image" />
        </div>
            <Link href="/">
        <h2 className={styles.heading}>
            Go to Home
        </h2>
            </Link>
    </div>
  )
}

export default NotFound