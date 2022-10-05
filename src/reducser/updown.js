const v1 = 0;
const upDown = (state = v1,action) =>{

    switch (action.type) {
        case "incr":
            
            return state = state+1;
            
        case "decr":
            {if(state>0){
                return state = state-1;
                }}
        default:
            return state;     
    }
}
export default upDown