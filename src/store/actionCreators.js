import {SET_COORDS} from "./actions"


export const coordsFetched = () => {

    return dispatch => {

        // fetch all coordinates 
        fetch('https://boiling-escarpment-07603.herokuapp.com/coordinates')
        .then(response => response.json())
        .then(json => {
            dispatch({type: SET_COORDS, payload: json})
        })

    }
}