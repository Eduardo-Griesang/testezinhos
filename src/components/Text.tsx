import { useGuessGenderContext } from "../contexts/GuessGender"

export default function Text () {

    const { gender } = useGuessGenderContext()
    const probability = gender.probability * 100  

    return (
        <>
            <span>Your gender is {probability}% {gender.gender}</span>
        </>
    )
}