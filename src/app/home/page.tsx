import Profile from "@/components/Profile"
export default function Home() {
    return (
        <div className="relative flex flex-col h-dvh">
            <div className="flex-1 flex items-center justify-center">
                <Profile/>
            </div>
        </div>
    )
}