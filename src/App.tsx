import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import type { JSX } from "react";

import "@/data/global.css"; 
import { Preloader, ShootingStars, ScrollIndicator } from "@/components"; 
import { Banner, Skills, Projects } from "@/pages";


const App = (): JSX.Element => {
  return (
    <Router>
      <div className="app-container">
        <ShootingStars />

        <main>
          {/* <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes> */}
          <Preloader/>
          <ScrollIndicator/>
          <Banner/>
          <Skills/>
          <Projects/>
        </main>

      </div>
    </Router>
  )
}

export default App;