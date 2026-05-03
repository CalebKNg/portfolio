"use client"
import { useState } from "react"
import Input from "@/components/Input"
import History from "./History"
import KeyListener from "@/components/KeyListener"


export default function Terminal() {
    const [input, setInput] = useState<string>("")
    const [sentLines, setSentLines] = useState<string[]>(Array(30).fill(""))


    const backspace = ()=>{
        if (input){
            setInput(input => input.slice(0, -1))
        }
    }
    const keyPress = (key: string) =>{
        setInput(input + key)
    }
    const addLine = () => {
        setSentLines(sentLines => [...sentLines.slice(-29), input])
        setInput("")
    }
    

    return (
        <div className="absolute flex flex-col left-10 sm:left-50 bottom-10 w-full pointer-events-none">
                <History
                    sentLines={sentLines}
                />
                <Input
                    input={input}
                />
                <KeyListener
                    onKey={keyPress}
                    onBackspace={backspace}
                    onEnter={addLine}
                />
        </div>

    )
}