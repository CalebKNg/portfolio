"use client"

import Profile from "@/components/Profile"
import Terminal from "@/components/Terminal"
export default function Home() {

    return (
        <div className="relative flex flex-col h-dvh overflow-hidden">
            <div className="flex-1 flex items-center justify-center">
                <Profile/>
            </div>
           <Terminal/>
        </div>
    )
}