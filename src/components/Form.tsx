import { useGuessGenderContext } from "../contexts/GuessGender"

export default function Form () {

    const {
        sendGenderData
    } = useGuessGenderContext()

    return (
        <form onSubmit={(e) => sendGenderData(e)}>
            <input placeholder="Add your name here"></input>
            <input type="submit"></input>
        </form>
    )
}