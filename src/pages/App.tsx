import GenericButton from "../components/button"
import Container from "react-bootstrap/Container"
import FloatingInput from "../components/input"
import "bootstrap/dist/css/bootstrap.min.css"
import  style  from "./App.module.scss"


function App() {
	return (
		<Container className="p-3">
			<h1>
        GitHub user
			</h1>
			<div className="App">
				<FloatingInput
					label="GitHub user"
					className="mb-3"
					placeholder="Insert GitHub user"/>
				<GenericButton
					buttonName="Search"
					type="submit" />
			</div >
		</Container>
	)
}

export default App
