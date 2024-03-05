import React from 'react'
import Header from '../Header'
import styles from './styles.scss'
import { ToastNotificationManager } from '@/components/Toast'
import AppRoutes from '@/routes'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
    return (
        <BrowserRouter>
            <ToastNotificationManager />
            <Header />
            <div className={styles.container}>
                <AppRoutes />
            </div>
        </BrowserRouter>
    )
}
