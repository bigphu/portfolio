import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import type { JSX } from "react";
// import "./App.css"
import "@/data/global.css";
import { Home } from "@/pages";
import { Preloader } from "@/components";

const App = (): JSX.Element => {

  return (
    <Router>
      <div className="app-container">
        <Preloader />
        {/* <Navbar/> */}

        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </main>

        {/* <Footer/> */}
      </div>
    </Router>
  )
}

export default App;
