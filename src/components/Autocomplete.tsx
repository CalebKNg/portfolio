export default function Autocomplete({ commands, selectedIndex }: { commands: string[], selectedIndex: number }) {
if (commands.length === 0) return null
    return (
        <ul className="font-roboto mb-1 bg-background">
            {commands.map((cmd, i) => (
                <li key={cmd} className={`ml-4 w-fit ${i === selectedIndex ? "ring-current ring-1" : ""}`}>
                    {cmd}
                </li>
            ))}
        </ul>
    )
}