import React, { useState, useEffect } from "react";
import LoadingMask from "./components/LoadingMask";
import Hotel from "./components/Hotel";
import './App.css'

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("./api/hotels")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setData(null))
      .finally(() => setLoading(false))
  }, []);

  return (
    <div className="App">
      <h1>Hotels</h1>
      {loading && <LoadingMask />}
      {data && data.map(val => <Hotel key={val.name} name={val.name} stars={val.stars} city={val.city} />)}
    </div>
  )
}

export default App
