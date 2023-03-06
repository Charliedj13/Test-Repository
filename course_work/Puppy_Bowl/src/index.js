import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { AllPuppies, SinglePuppy } from "./components"

const App = () => {
    const [puppies, setPuppies] = useState([]);

    async function fetchPuppyData() {
        try {
            console.log("This function is running")
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-MT-WEB-FT/players")
            console.log(response)
            const translatedData = await response.json();

            setPuppies(translatedData.data.players)
            console.log(translatedData)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchPuppyData();
    }, [])
    return (
        <BrowserRouter>
        <div>
            <nav>
                <Link to="/puppies">See all Puppy Players</Link>
            </nav>
        
            <Routes>
                <Route path="/puppies" element={<AllPuppies puppyProps={puppies}/>} />
                <Route path="/puppies/:id" element={<SinglePuppy puppyProps={puppies}/>} />
            </Routes>

        </div>
        </BrowserRouter>
    )
}

const appElement = document.getElementById("app")
const root = createRoot(appElement)
root.render(<App />)