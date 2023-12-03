export default function Hello() {
    console.log(typeof window === "undefined" ? 'server' : 'client')

    return <>Hello~</>
}