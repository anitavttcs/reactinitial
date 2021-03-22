import React, { useState } from "react";
import Subscription from "./Subscription";

export default function Hotel({ name, stars, city }) {
	const [showDetails, setShowDetails] = useState(false);
	const [showForm, setShowForm] = useState(false);

	return (
		<div className="hotelDiv">
			<p>{name}</p>
			{showDetails ?
				<button onClick={() => setShowDetails(false)}>Show less</button> :
				<button onClick={() => setShowDetails(true)}>Show more</button>
			}
			{showDetails &&
				<>
					<p> stars: {stars}</p>
					<p> city: {city}</p>
					<button onClick={showForm ? () => setShowForm(false) : () => setShowForm(true)}>Request more info about {name}</button>
				</>
			}
			{showDetails && showForm && <Subscription name={name} />}
		</div>
	);
}