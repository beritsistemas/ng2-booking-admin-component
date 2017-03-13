export const RoomTypesReducer=(state:any=null,{type,payload})=>{
    switch (type) {
        case 'ADD_ROOM_TYPES':
        return payload;   
        default:
        return state;
  }
 }