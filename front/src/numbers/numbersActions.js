import axios from 'axios'

const BASE_URL = "http://localhost:3001/numbers"
const INITIAL_VALUES = {value: [], monthyPrice: [], setupPrice: []}

export function getList() {
    const request = axios.get(`${BASE_URL}`)
    return {
        type: 'PHONE_NUMBERS',
        payload: request
    }
}