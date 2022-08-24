import { useEffect } from "react";

function App() {
    useEffect(() => {
      const google = window.google;
      function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
      }
      
      google.accounts.id.initialize({
        client_id: "894546797267-n6av96su8ljjncu7rhoto3oivu3r76tu.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });
      
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }
      );
      
      google.accounts.id.prompt(); 

    });
    return (
        <div className="App">
          <h1>Hello User</h1>
            <div id="buttonDiv"></div>
        </div>
    );
}

export default App;
