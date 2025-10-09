import { useReducer, useEffect } from "react";
import { fetchCountries } from "../api/countryApi.js";
import { countryReducer, initialState } from "../reducers/countryReducer.js";
import { debounce } from "lodash";

const CountryList = () => {
  const [state, dispatch] = useReducer(countryReducer, initialState);

  const loadCountries = async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const data = await fetchCountries();
      const filtered = state.searchQuery
        ? data.filter(c => c.country.toLowerCase().includes(state.searchQuery.toLowerCase()))
        : data;
      dispatch({ type: "FETCH_SUCCESS", payload: filtered.slice(0, state.page * state.perPage) });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
    }
  };

  const handleSearch = debounce(query => dispatch({ type: "SET_SEARCH", payload: query }), 500);

  useEffect(() => {
    loadCountries();
  }, [state.page, state.searchQuery]);

  return (
    <div style={{ padding: "20px" }}>
      <input type="text" placeholder="Search countries..." onChange={e => handleSearch(e.target.value)} />
      <button onClick={() => dispatch({ type: "TOGGLE_MODE" })}>
        Toggle {state.isInfinite ? "Pagination" : "Infinite Scroll"}
      </button>

      {state.loading && <p>Loading...</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}

      <ul>
        {state.countries.map(c => (
          <li key={c.country}>{c.country}</li>
        ))}
      </ul>

      {!state.isInfinite && (
        <div>
          <button onClick={() => dispatch({ type: "SET_PAGE", payload: state.page - 1 })} disabled={state.page === 1}>
            Prev
          </button>
          <span style={{ margin: "0 10px" }}>{state.page}</span>
          <button onClick={() => dispatch({ type: "SET_PAGE", payload: state.page + 1 })}>Next</button>
        </div>
      )}
    </div>
  );
};

export default CountryList;
