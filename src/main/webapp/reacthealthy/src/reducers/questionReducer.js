const initialState = {
    questionList: [],
};

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_QUESTION_LIST' :
            return {
                ...state,
                questionList: action.payload,
            };
        default:
            return state;
    }
};

export  default  questionReducer;