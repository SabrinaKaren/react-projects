import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import urls from '../common/consts/urls'
import { USER_FETCHED, TOKEN_VALIDATED } from '../common/consts/actionsType'

export function login(values) {
    return submit(values, `${urls.OAPI_URL}/login`)
}

export function signup(values) {
    return submit(values, `${urls.OAPI_URL}/signup`)
}

export function logout() {
    return { type: TOKEN_VALIDATED, payload: false }
}

export function validateToken(token) {
    return dispatch => {
        if (token) {
            axios.post(`${urls.OAPI_URL}/validateToken`, { token })
                .then(resp => {
                    dispatch({ type: TOKEN_VALIDATED, payload: resp.data.valid })
                })
                .catch(e => dispatch({ type: TOKEN_VALIDATED, payload: false }))
        } else {
            dispatch({ type: TOKEN_VALIDATED, payload: false })
        }
    }
}

function submit(values, url) {
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                dispatch([
                    { type: USER_FETCHED, payload: resp.data }
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error))
            })
    }
}