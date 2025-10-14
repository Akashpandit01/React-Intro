const initialstate={isAuthenticated:false};

function authReducer(state=initialstate,action){
    switch(action.type){
        case "LOGIN":
            return {isAuthenticated:true};
            case "LOGOUT":
                return {isAuthenticated:false};

                default :
                return state;
    }
}

export default authReducer;