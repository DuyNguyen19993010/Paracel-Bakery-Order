// Style
import "./assets/ui/css/app.css"

// Pages

import Catalog from "./pages/Catalog";

// Components

import Nav from "./components/ui/nav";

import { Loading } from "./components/ui/loading";

function App() {

  return (
    <Loading>
      
      <div id="App">
        
        <Nav>

          {/* Home page */}

          {/* Catalog page */}

          <Catalog/>

          {/* Order page */}

          {/* Sale page */}


        </Nav>

      </div>

    </Loading>

  );

}

export default App;
