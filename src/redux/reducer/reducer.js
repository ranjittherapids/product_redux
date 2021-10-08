const initialState={
    product:[],
    ID:'',
    basket:[],
    loading:true
}
 export const reducer=(state=initialState,action)=>{
    const {type,payload}=action
    console.log(payload)
switch(type)
{
    case 'loading':
        return{...state,loading:payload}
    case"SHOW_ITEMS":
    return {...state,product:payload}
    case"ITEMS_ID":
    return{...state,ID:payload}
    case"ADD_ITEMS":
    return{...state,basket:[...state.basket,payload]}
     case"REMOVE_ITEMS":
    return {...state,basket:[...state.basket.slice(0,payload),
        ...state.basket.slice(payload + 1)
    ]}
    default:
        return state
}
}