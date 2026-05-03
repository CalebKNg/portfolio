"use client"

import KeyListener from "@/components/KeyListener"
import Profile from "@/components/Profile"
import Terminal from "@/components/Terminal"
import { useState } from "react"
export default function Home() {
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
        <div className="relative flex flex-col h-dvh overflow-hidden">
            <div className="flex-1 flex items-center justify-center">
                <Profile/>
            </div>
            <div className="absolute flex left-10 sm:left-50 bottom-10 w-full">
                <Terminal
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