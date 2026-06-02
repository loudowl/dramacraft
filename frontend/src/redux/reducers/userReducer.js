// User reducer

const initialState = {
  token: null,
  userId: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
}
