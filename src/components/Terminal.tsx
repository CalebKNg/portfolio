"use client"
import { useState } from "react"
import Input from "@/components/Input"
import KeyListener from "@/components/KeyListener"


export default function Terminal() {
    const [input, setInput] = useState<string>("")
    const backspace = ()=>{
        if (input){
            setInput(input.slice(0, -1))
        }
    }
    const keyPress = (key: string) =>{
        setInput(input + key)
    }

    return (
        <div>
            <div className="absolute flex left-10 sm:left-50 bottom-10 w-full">
                <Input
                    input={input}
                />
            </div>
                <KeyListener
                onKey={keyPress}
                onBackspace={backspace}
            />
        </div>

    )
}