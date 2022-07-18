//actions that can be performed on document data
// writen seprately from reducer to pass it into bindActionCreators.(see in code in finalizePage)


import * as actionTypes from './actionTypes';
const { v4: uuidv4 } = require('uuid');
export const setSkinCd = (skinCd) => {
    let id = uuidv4();
    return { type: actionTypes.SET_SKIN, 
        document: { skinCd: skinCd, id: id} }    
}
export const updateSkinCd = (documentId, skinCd) => {
    return { type: actionTypes.UPDATE_SKIN, 
        document: { skinCd: skinCd} }
}