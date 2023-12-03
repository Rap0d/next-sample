export default function New() {
    console.log(typeof window === "undefined" ? 'server' : 'client')

    return <>This is new page!</>
}