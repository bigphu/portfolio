import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import type { JSX } from "react";

import "@/data/global.css"; 
import { Preloader } from "@/components";
import { ShootingStars } from "@/components"; 
import { Banner } from "@/pages";


const App = (): JSX.Element => {
  return (
    <Router>
      <div className="app-container">
        <ShootingStars />

        <main>
          {/* <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes> */}
          <Preloader />
          <Banner/>
        </main>

      </div>
    </Router>
  )
}

export default App;