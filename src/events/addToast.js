export default function addToast(payload) {
    const newToast = new CustomEvent('addToast', { detail: payload })
    window.dispatchEvent(newToast)
}
