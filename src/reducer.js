export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 'BQBlxs8Q-qrig7RPcA8u_Iqc3WI91Fpswf9nNaiKlmL5qTL9z7…0OnQ3q3dkfxgcOnu5iQujp4dklltZy8EXTug7MG3Y-hIVd9BH',
};

const reducer = (state, action) => {
  console.log(action)
  //Action -> type , [payload]
   switch(action.type) {    
    case 'SET_USER':
        return {
            ...state,
            user: action.user,
        };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
            case 'SET_PLAYLISTS':
                return {
                    ...state,
                    playlists: action.playlists,
                };
            case 'SET_DISCOVER_WEEKLY':
                return {
                    ...state,
                    discover_weekly: action.discover_weekly,
                }    
        default:
            return state;
   }
};

export default reducer;