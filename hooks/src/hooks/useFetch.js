import { useState, useEffect } from "react";

export const useFetch = (url, method = 'get') => {

    const [state, setState] = useState({
        data: null,
        loading: true
    });

    useEffect(function() {
        fetch(url, { method: method })
            .then(res => res.json())
            .then(json => setState({
                data: json,
                loading: false
            }))
    }, [url, method]);

    return state;

}