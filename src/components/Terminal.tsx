"use client"
import { useEffect, useState } from "react"
import Input from "@/components/Input"
import History from "./History"
import KeyListener from "@/components/KeyListener"
import Autocomplete from "./Autocomplete"
import { useRouter } from 'next/navigation'

const autocompleteOptions = ["/home", "/about", "/skills", "/experience", "/projects"]

export default function Terminal() {
    const router = useRouter()
    const [input, setInput] = useState<string>("")
    const [sentLines, setSentLines] = useState<string[]>(Array(30).fill(""))
    const [selectedCommandIndex, setSelectedCommandIndex] = useState<number>(0)

    // Autocomplete
    const availableCommands = autocompleteOptions.filter((option: string) => {
        const inputLen = input.length
        const lowInput = input.toLowerCase()
            if (inputLen > 0 && inputLen <= option.length && lowInput == option.substring(0, inputLen)) {
                return option
            }
    })

    // Key mapping
    const backspace = ()=>{
        if (input){
            setInput(input => input.slice(0, -1))
        }
    }
    const keyPress = (key: string) =>{
        setInput(input + key)
        setSelectedCommandIndex(0)
    }
    const addLine = () => {
        setSentLines(sentLines => [...sentLines.slice(-29), input])
        setInput("")
    }
    const onEnter = () => {
        // process autocomplete
        if (availableCommands.length != 0) {
            router.push(availableCommands[selectedCommandIndex])
            setInput("")
            return
        }
        addLine()
        // process the enter command
        switch (input) {
            case "clear":
                // clear terminal
                setSentLines(Array(30).fill(""))
                break
        }
    }
    const onTab = () => {
        setInput(availableCommands[selectedCommandIndex])
    }
  
    return (
        <div className="absolute flex flex-col left-10 sm:left-50 bottom-10 w-full max-w-[calc(100%-2.5rem)] pointer-events-none">
                <History
                    sentLines={sentLines}
                />
                <div className="relative">
                    <div className="absolute bottom-full">
                        <Autocomplete
                            commands={availableCommands}
                            selectedIndex={selectedCommandIndex}
                        />
                    </div>
                    <Input
                        input={input}
                    />
                </div>
                <KeyListener
                    onKey={keyPress}
                    onBackspace={backspace}
                    onEnter={onEnter}
                    onArrowDown={() => {
                            if (selectedCommandIndex < availableCommands.length -1) setSelectedCommandIndex(selectedCommandIndex => selectedCommandIndex + 1)
                        }
                    }
                    onArrowUp={() => {
                        if(selectedCommandIndex > 0) setSelectedCommandIndex(selectedCommandIndex => selectedCommandIndex - 1)
                    }}
                    onTab={onTab}
                />
        </div>

    )
}