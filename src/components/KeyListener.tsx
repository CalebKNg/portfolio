import { useEffect } from "react";

interface KeyListenerProps {
    onKey: (key: string) => void
    onBackspace: () => void
    onEnter: ()=> void
}

export default function KeyListener({onKey, onBackspace, onEnter} : KeyListenerProps){
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Backspace') {
                onBackspace()
            }
            if (event.key === 'Enter'){
                onEnter()
            }
            if (event.key.length === 1) {
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