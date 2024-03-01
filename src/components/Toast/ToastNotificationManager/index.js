import React, { useEffect, useState } from 'react'
import styles from './styles.scss'
import ToastMessage from '../ToastMessage'

export default function ToastNotificationManager() {
    // As soon as this component is started, we need to attatch an eventListener to it
    useEffect(() => {
        const handleAddToast = (event) => {
            const payload = event.detail
            setMessages((prevState) => ([...prevState, payload]))
        }
        window.addEventListener('addToast', handleAddToast)
        // As soon as this is unmounted, we need to detatch the event
        return () => {
            window.removeEventListener('addToast', handleAddToast)
        }
    }, [])
    const [messages, setMessages] = useState([])
    const handleRemove = (payload) => {
        console.log(payload)
        setMessages((prevState) => (prevState.filter((e) => e !== payload)))
    }

    return (
        <div className={styles.toastContainer}>
            {messages.map((payload) =>
                <ToastMessage
                    key={JSON.stringify(payload)}
                    payload={payload}
                    onRemove={handleRemove}
                />
            )}
        </div>
    )
}
