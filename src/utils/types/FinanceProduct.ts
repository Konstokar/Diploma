import {Money} from "./Money"

export interface FinanceProduct extends Money{
    bank: string
    procentGrade: number
    payments: string
    procentType: string
    validityPeriod?: number
    removal: string
    replanishment: string
}