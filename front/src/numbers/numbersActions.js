import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const BASE_URL = "http://localhost:3001/numbers"
const INITIAL_VALUES = { value: [], monthyPrice: [], setupPrice: [] }

export function getList() {
    const request = axios.get(`${BASE_URL}`)
    return {
        type: 'PHONE_NUMBERS',
        payload: request
    }
}

export function create(values) {
    axios.post(`${BASE_URL}`, values)
    .then(resp => {
        toastr.success('Success', 'Operation successfully performed')
    })
    .catch(e => {
        toastr.error('Erro')
    })
    return {
        type: 'TEMP'
    }
}