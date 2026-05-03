import { useEffect } from "react";

interface KeyListenerProps {
    onKey: (key: string) => void
    onBackspace: () => void
}

export default function KeyListener({onKey, onBackspace} : KeyListenerProps){
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Backspace') {
                onBackspace()
            }
            if (event.key.length === 1 && event.key.match(/[a-zA-Z0-9 ]/)) {
                onKey(event.key)
            }
        }
        
        window.addEventListener('keydown', handleKeyDown);

        return () =>{
            window.removeEventListener('keydown', handleKeyDown)
        }
        
    }, [onKey, onBackspace]);
    return null
}