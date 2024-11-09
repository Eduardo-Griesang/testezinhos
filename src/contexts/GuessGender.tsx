import { createContext, useContext, useState } from "react";
import { Gender } from "../Types/Gender";
import { GuessGenderType } from "../Types/GuessGender";

const guessGender = createContext<GuessGenderType | undefined>(undefined)
guessGender.displayName = "useGenderContext"

function GuessGender ({children}:any) {
    const [gender, setGender] = useState<Gender>({gender: '', probability : 0})

    return (
        <guessGender.Provider value={{gender, setGender}}>
            {children}
        </guessGender.Provider>
    )
}

export function useGuessGenderContext () {
    const context = useContext(guessGender)

    if(!context) {
        throw new Error("No context provided")
    }

    const {
        gender,
        setGender
    } = context

    async function sendGenderData(params:any) {
        params.preventDefault()
        console.log(params)
        const name = params.target[0].value
        const promisse = await fetch(`https://api.genderize.io?name=${name}`)
        const data = await promisse.json()
        setGender(data)
    }

    return {
        gender,
        setGender,
        sendGenderData
    }
}

export {
    GuessGender
}