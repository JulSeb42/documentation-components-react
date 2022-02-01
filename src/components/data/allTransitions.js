const allTransitions = [
    { name: "Short", css: "var(--transition-short)", value: "all 0.2s ease" },
    { name: "Long", css: "var(--transition-long)", value: "all 0.5s ease" },
    {
        name: "Bezier",
        css: "var(--transition-bezier)",
        value: "all 0.5s cubic-bezier(0.25, 0.75, 0, 0.66)",
    },
]

export default allTransitions
