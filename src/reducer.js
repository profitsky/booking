export const reducer = (state, action) => {
  switch (action.type) {
    case 'changeTheme':
      const newState = { ...state };
      newState.theme = state.theme === 'danger' ? 'primary' : 'danger';
      return newState;
    case 'setHotels':
      return { ...state, hotels: action.hotels };
    case 'setLoading':
      return { ...state, loading: action.loading };
    case 'login':
      return { ...state, isAuthenticated: true };
    case 'logout':
      return { ...state, isAuthenticated: false };
    default:
      throw new Error('wrong type of action' + action.type);
  }
};

export const initialState = {
  hotels: [],
  loading: true,
  isAuthenticated: false,
  theme: 'danger',
};
