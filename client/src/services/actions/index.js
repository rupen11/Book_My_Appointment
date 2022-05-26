export const getUser = (data) => {
    return {
        type: "getuser",
        payload: data
    }
}

export const logOut = (data) => {
    return {
        type: "logout",
        payload: data
    }
}