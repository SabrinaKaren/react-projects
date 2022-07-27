import axios from 'axios'
import { BILLING_SUMMARY_FETCHED } from '../common/consts/actionsType'

const BASE_URL = 'http://localhost:3003/api'

export function getSummary() {
    const response = axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
        type: BILLING_SUMMARY_FETCHED,
        payload: response
    }
}