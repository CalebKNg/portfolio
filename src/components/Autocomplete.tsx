export default function Autocomplete({ commands, selectedIndex }: { commands: string[], selectedIndex: number }) {
if (commands.length === 0) return null
    return (
        <ul className="font-roboto mb-1">
            {commands.map((cmd, i) => (
                <li key={cmd} className={`ml-4 ${i === selectedIndex ? "invert" : ""}`}>
                    {cmd}
                </li>
            ))}
        </ul>
    )
}