import React, { useState } from "react";
import LoadingMask from "./LoadingMask";

const Subscription = ({ name, close }) => {
	const [loading, setLoading] = useState(false);
	const [resp, setResp] = useState(null);
	const [value, setValue] = useState("");

	const submitForm = () => {
		setLoading(true);
		fetch("api/hotels/subscribe", {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ email: value, hotel: name })
		}).then(res => setResp(true))
			.catch(err => setResp(false))
			.finally(() => { setLoading(false); setTimeout(close, 500) })
	}

	return (
		<div>
			<h2>Request more info about {name}</h2>
			{resp ?
				"Subscribed."
				: resp === false ?
					"Something happened"
					: loading ?
						<LoadingMask />
						:
						<>
							<input value={value} type="email" placeholder="e-mail address"
								onChange={e => setValue(e.target.value)} />
							<button disabled={!(value.includes("@") && value.includes("."))}
								onClick={() => submitForm()}>Submit</button>
						</>
			}
		</div>
	);
}

export default Subscription;
