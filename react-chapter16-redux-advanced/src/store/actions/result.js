export const saveResult = (result ) => {

    /**
     *291. Where to Put Data Transforming Logic?
     * sunucudan diyelim data geldi,
     * onun uzerinde islem yapilacak,
     * nerede yapalim? 
     * Ya burasi, ya da reducer.
     * Reducer daha merkezi ya sanki oraya koyarim
     */
     //const updatedResult = result * 2;
    return {
        //type:'STORE_RESULT', result: updatedResult
        type:'STORE_RESULT', result: result
    }
}

export const storeResult = (result) => {    
    return (dispatch, getState) => {
        setTimeout(() => {
            //292. Using Action Creators and Get State
            const oldCounter = getState().ctr.counter;
            console.log("oldCounter", oldCounter);
            dispatch(saveResult(result));
        }, 3000);
    }
}

export const deleteResult = (index) => {
    return {
        type:'DELETE_RESULT', index: index
    }
}