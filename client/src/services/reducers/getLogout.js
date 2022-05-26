const initialState = false;

const userAuth = (state = initialState, action) => {
    switch (action.type) {
        case "logout":
            state = action.payload
            return state;
        default:
            return state;
    }
}

export default userAuth;