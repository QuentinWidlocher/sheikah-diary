export default function HeartIcon({
    className = 'w-full h-full',
}: {
    className?: string
}) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 78.76">
            <path d="M93.86,49A21,21,0,1,0,64.12,19.26L50,33.38,79.75,63.13Z" transform="translate(0 -13.13)" fill="currentColor" />
            <path d="M35.88,19.26a21.09,21.09,0,0,0-29.74,0h0A21.08,21.08,0,0,0,6.14,49L20.25,63.13,50,33.38Z" transform="translate(0 -13.13)" fill="currentColor" />
            <path d="M50,33.38,16.68,59.55,48.32,91.19a2.37,2.37,0,0,0,3.36,0L82.45,60.42Z" transform="translate(0 -13.13)" fill="currentColor" />
        </svg>
    )
}