import React, { useContext } from 'react'
import { DataContext } from './DataProvider'

function DataComponent() {

    const { state, fetchData } = useContext(DataContext);
    console.log(state);

  return (
    <div>
      <button onClick={fetchData}>Fetch Posts</button>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      {state.data && <p>Fetched {state.data.length} posts!</p>}
    </div>
  );
}

export default DataComponent
