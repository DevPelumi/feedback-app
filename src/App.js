import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import About from "./pages/About"
import AboutIconLink from "./components/AboutIconLink"
import { FeedbackProvider } from "./context/FeedbackContext"

function App(){

    return (
        <FeedbackProvider>
        <Router>
        <div className="container">
        <Header text='Feedback UI' />
        <Routes>
        <Route exact path="/" element={
            <>
             <FeedbackForm />
             <FeedbackStats/>   
             <FeedbackList />
            </>
        }/>
         <Route path="/about" element={<About/>}/>
         </Routes> 
         <AboutIconLink/>
        </div>
                
        </Router>
        </FeedbackProvider>
 )
}

export default App