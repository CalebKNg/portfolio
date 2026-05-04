import { useEffect } from "react";

interface KeyListenerProps {
    onKey: (key: string) => void
    onBackspace: () => void
    onEnter: () => void
    onArrowUp?: () => void
    onArrowDown?: () => void
    onEscape?: () => void
}

export default function KeyListener({onKey, onBackspace, onEnter, onArrowUp, onArrowDown, onEscape} : KeyListenerProps){
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Backspace') {
                onBackspace()
            }
            if (event.key === 'Enter'){
                onEnter()
            }
            if (event.key === 'ArrowUp') {
                event.preventDefault()
                onArrowUp?.()
            }
            if (event.key === 'ArrowDown') {
                event.preventDefault()
                onArrowDown?.()
            }
            if (event.key === 'Escape') {
                onEscape?.()
            }
            if (event.key.length === 1) {
                // if any key that's printable is clicked
                onKey(event.key)
            }
        }
        
        window.addEventListener('keydown', handleKeyDown);

        return () =>{
            window.removeEventListener('keydown', handleKeyDown)
        }
        
    }, [onKey, onBackspace, onEnter]);
    return null
}