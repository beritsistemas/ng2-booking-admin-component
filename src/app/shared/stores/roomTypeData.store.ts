export const RoomTypeDataReducer = (state: any = null, {type, payload}) => {
    console.log("llego accion "+type,payload)
  switch (type) {
    case 'ADD_ITEMS':
      return payload;    
    case 'UPDATE_ITEM': 
       return state.map(item => {
        return item.id === payload.id ? Object.assign({}, item, payload) : item;
      });  
/*
    case 'UPDATE_DAYINFO':
       return state.dayInfos.map(item => {
        return item.id === payload.id ? Object.assign({}, item, payload) : item;
      });*/
    default:
      return state;
  }
};
