import React from 'react'
import Header from '../Header'
import styles from './styles.scss'
import { ToastNotificationManager } from '@/components/Toast'
import UpdateBeneficiary from '@/pages/UpdateBeneficiary'

export default function App() {
    return (
        <>
            <ToastNotificationManager />
            <Header />
            <div className={styles.container}>
                <UpdateBeneficiary />
            </div>
        </>
    )
}
