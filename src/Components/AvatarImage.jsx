import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";

function AvatarImage({ resident }) {
	const [imageUrl, setImageUrl] = useState(null);

	useEffect(() => {
		if (resident) {
			fetch(resident)
				.then((response) => {
					if (!response.ok) {
						throw new Error("Network response was not ok");
					}
					return response.json(); // Parse the response as JSON
				})
				.then((data) => {
					// Work with the data here
					setImageUrl(data.image);
				})
				.catch((error) => {
					console.error("There was a problem with the fetch operation:", error);
				});
		}
	}, []);

	return imageUrl == null ? (
		""
	) : (
		<a href={resident} rel="noreferrer" target="_blank">
			<Avatar
				alt="avatar image"
				src={imageUrl}
				sx={{ width: 50, height: 50 }}
			/>
		</a>
	);
}

export default AvatarImage;
