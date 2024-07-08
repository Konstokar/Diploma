import {Money} from "./Money"

export interface Action extends Money{
    grade: number
    isDivids: boolean
    dividSize?: number
    payments?: string
}