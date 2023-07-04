import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container"
import GenericButton from "../components/button"
import FloatingInput from "../components/input"
import { http } from "../http"


function App() {

  function submitForm(userName: string) {

    http.request({
      url: `user/${userName}`,
      method: "GET",
      headers: {
        "accept": "application/json",
      }
    }).then((reponse) => console.log(reponse))
      .catch(error => console.error(error))
  }

  const input: HTMLInputElement = document.getElementById("userInput") as HTMLInputElement

  return (
    <Container className="p-3">
      <h1>
        GitHub user
      </h1>
      <div className="App">
        <FloatingInput
          label="Insert GitHub user"
          className="mb-3"
          placeholder="Insert GitHub user" />
        <GenericButton
          buttonName="Search"
          type="button"
          onClick={() => submitForm(input.value)} />
      </div >
    </Container>
  )
}

export default App
