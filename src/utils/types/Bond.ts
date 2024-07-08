import {Money} from "./Money"

export interface Bond extends Money{
    grade: number
    coupon: number
    payments: string
}