const titleInitialState = []

const titleReducer = (state = titleInitialState, action) => {
    switch(action.type) {
        case 'ADD_TITLE': {
            return [].concat(action.payload)
        }

        default: {
            return [].concat(state)
        }
    }
}

export default titleReducer