import "./App.css";
import Locations from "./Components/Locations";
import Typography from "@mui/material/Typography";

function App() {
	return (
		<>
			<Typography
				variant="h2"
				component="div"
				m={3}
				style={{ display: "inline-block", color: "black" }}
			>
				Planets in Rick and Morty
			</Typography>
			<Locations></Locations>
		</>
	);
}

export default App;
