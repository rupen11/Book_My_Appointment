const initialState = "";

const userData = (state = initialState, action) => {
    switch (action.type) {
        case "getuser":
            state = action.payload
            return state;
        default:
            return state;
    }
}

export default userData;