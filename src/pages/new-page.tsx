export default function NewPage() {
    console.log(typeof window === "undefined" ? 'server' : 'client')

    return <>This is new-page!</>
}