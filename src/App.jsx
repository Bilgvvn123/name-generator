import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardShvv } from "./Card";

const App = () => {
	const [users, setUser] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(
				"https://jsonplaceholder.typicode.com/users"
			);

			setUser(res.data);
		};

		fetchData();
	}, []);

	const kartlagdsanUsers = () => {
		const index = Math.floor(Math.random() * 10 + 1);

		if (users.length !== 0) return <CardShvv name={users[index].name} />;

		return "No Name";
	};

	return (
		<div style={{ display: "flex", flexWrap: "wrap", gap: "50px" }}>
			{kartlagdsanUsers()}
		</div>
	);
};

export default App;
