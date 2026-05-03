import Profile from "@/components/Profile"
import Terminal from "@/components/Terminal"
export default function Home() {
    return (
        <div className="relative flex flex-col h-dvh overflow-hidden">
            <div className="flex-1 flex items-center justify-center">
                <Profile/>
            </div>
            <div className="absolute flex left-10 sm:left-50 bottom-10 w-full">
                <Terminal/>
            </div>
        </div>
    )
}