import { useMyContext } from "../context/MyContext"

const ComponentWithContext = () => {
    const sharedValue = useMyContext()
    return (
        <section>
            <h2>Component with Context</h2>
            <div>
                My Context Value: {sharedValue}
            </div>
        </section>
    )
}

export default ComponentWithContext