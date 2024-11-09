import { Gender } from "./Gender";

export interface GuessGenderType {
    gender: Gender,
    setGender: React.Dispatch<React.SetStateAction<Gender>>,
}