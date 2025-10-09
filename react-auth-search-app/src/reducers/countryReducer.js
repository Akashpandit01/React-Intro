export const initialState = {
  countries: [],
  loading: false,
  error: null,
  page: 1,
  perPage: 20,
  searchQuery: "",
  isInfinite: false,
};

export const countryReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        countries: state.isInfinite ? [...state.countries, ...action.payload] : action.payload,
      };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "SET_SEARCH":
      return { ...state, searchQuery: action.payload, page: 1, countries: [] };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    case "TOGGLE_MODE":
      return { ...state, isInfinite: !state.isInfinite, countries: [], page: 1 };
    default:
      return state;
  }
};
