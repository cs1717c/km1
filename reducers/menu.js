const defaultState = {
    menuOpen : false
};
 
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'MENU': 
            return Object.assign({}, state, { 
                menuOpen: action.isOpen,
            });
        default:
            return state;
    }
}