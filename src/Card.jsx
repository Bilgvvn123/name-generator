import React, { useRef, useState } from "react";
import copy from "copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

export const CardShvv = ({ name }) => {
	const [copied, setCopied] = useState(false);

	const copyText = () => {
		setCopied(true);
		toast.success("Copied");
		copy(name);
	};

	return (
		<>
			<Toaster position="top-right" />
			<div
				style={{
					fontSize: "28px",
					height: "200px",
					width: "500px",
					color: "white",
					backgroundColor: "#000",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					borderRadius: "10px",
					gap: "10px",
				}}
			>
				{name}

				<button onClick={copyText}>{copied ? "Copied" : "Copy"}</button>
			</div>
		</>
	);
};
