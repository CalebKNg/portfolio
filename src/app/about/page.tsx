import { ViewTransition } from "react"

export default function About() {
    return (
        <ViewTransition name="page">
            <div>
                <h1 className="text-8xl max-w-xs sm:max-w-lg font-roboto leading-24">
                    About
                </h1>
            </div>
        </ViewTransition>
    )
}