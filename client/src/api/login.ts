import {SERVER_URL} from "../common/constants";

export const login = async (username: string) => {
    const response = await fetch(`http://${SERVER_URL}/login`, {
        method: 'POST',
        headers: {
            "content-type": 'application/json',
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(username)
    })

    const result = await response.json()
    // const result

    console.log(result,'RESUL!')

}

export const test = async (username: string) => {
    const response = await fetch(`http://${SERVER_URL}/login`, {
        method: 'GET'
    });

    const result = await response.json()
    // const result

    console.log(result,'RESUL!')

}
