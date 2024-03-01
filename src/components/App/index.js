import React from 'react'
import Header from '../Header'
import styles from './styles.scss'
import NewBeneficiary from '@/pages/NewBeneficiary'
import { ToastNotificationManager } from '@/components/Toast'

export default function App() {
    return (
        <>
            <ToastNotificationManager />
            <Header />
            <div className={styles.container}>
                <NewBeneficiary />
            </div>
        </>
    )
}
