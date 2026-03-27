import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import "@/data/global.css"; 
import { Preloader, ShootingStars, ScrollIndicator } from "@/components"; 

const Banner = lazy(() => import("@/pages/banner/Banner"));
const Skills = lazy(() => import("@/pages/skills/Skills"));
const Projects = lazy(() => import("@/pages/projects/Projects"));

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <ShootingStars/>

        <main>
          <Preloader/>
          <ScrollIndicator/>
          
          <Suspense fallback={<div style={{ height: "100vh" }}>Loading...</div>}>
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <Banner/>
                    <Skills/>
                    <Projects/>
                  </>
                } 
             />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;