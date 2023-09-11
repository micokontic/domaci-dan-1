import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import AvatarImage from "./AvatarImage";

export default function Location({ name, type, dimension, url, residents }) {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent pl={2}>
				<Typography
					align="left"
					variant="h5"
					color="text.secondary"
					gutterBottom
				>
					PLANET NAME:{" "}
					<Typography
						variant="h5"
						component="div"
						style={{ display: "inline-block", color: "black" }}
					>
						{name}
					</Typography>
				</Typography>
				<Typography
					variant="h5"
					color="text.secondary"
					align="left"
					gutterBottom
				>
					DIMENSION:{" "}
					<Typography
						variant="h5"
						component="div"
						style={{ display: "inline-block", color: "black" }}
					>
						{dimension}
					</Typography>
				</Typography>
				<Typography
					variant="h5"
					color="text.secondary"
					align="left"
					gutterBottom
				>
					TYPE:{" "}
					<Typography
						variant="h5"
						component="div"
						style={{ display: "inline-block", color: "black" }}
					>
						{type}
					</Typography>
				</Typography>
				<Typography
					variant="h5"
					color="text.secondary"
					align="left"
					gutterBottom
				>
					RESIDENTS:
				</Typography>
				{residents.length == 0 ? (
					<Typography variant="h5" color="black" align="left" gutterBottom>
						NO RESIDENTS
					</Typography>
				) : (
					<Stack direction="row" spacing={2}>
						{residents.map((resident, i) => {
							if (i < 5) {
								return <AvatarImage key={i} resident={resident}></AvatarImage>;
							}
						})}
					</Stack>
				)}
			</CardContent>
			<CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
				<Button align="right" size="small">
					<a href={url} rel="noreferrer" target="_blank">
						GO TO PLANET PAGE
					</a>
				</Button>
			</CardActions>
		</Card>
	);
}
