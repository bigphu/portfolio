import { BrowserRouter as Router, Route} from "react-router-dom";
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
          <Preloader/>
          <ScrollIndicator/>
          <Route path="/">
            <Banner/>
            <Skills/>
            <Projects/>
          </Route>/
        </main>

      </div>
    </Router>
  )
}

export default App;