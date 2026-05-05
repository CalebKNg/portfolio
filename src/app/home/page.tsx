import { ViewTransition } from "react"
import Profile from "@/components/Profile"

export default function Home() {
    return (
        <ViewTransition name="page">
            <div className="relative flex flex-col h-dvh items-center justify-center">
                <Profile/>
            </div>
        </ViewTransition>
    )
}