
const initialState = {
    status: "",
    payload: {
        "id": "",
        "title": "",
        "author": ""
    }
}

const dataReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_SUCESS_DATA':
            return { state, status: "SUCCESS", payload: action.data[0] }
        case 'GET_FAILURE_DATA':
            return { state, status: "FAILURE" }
        default:
            return state;

    }
}

export default dataReducer;