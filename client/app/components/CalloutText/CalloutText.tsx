export default function CalloutText({ 
    children, 
    icon 
}: {
    children?: React.ReactNode,
    icon?: string
}) {

    return (
        <span className="callout-text">
            {children}
        </span>
    )
}