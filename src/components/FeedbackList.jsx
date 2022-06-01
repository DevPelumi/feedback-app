import { motion, AnimatePresence } from "framer-motion"
import FeedbackItem from "./FeedbackItem"
import { useContext } from "react"
import Spinner from './shared/Spinner'
import FeedbackContext from "../context/FeedbackContext"

function FeedbackList() {

  const{ feedback, isLoading } = useContext(FeedbackContext)
  if (isLoading === false && (!feedback || feedback.length === 0)){
    return <p>'no feedback'</p>
  }

  return isLoading ? <Spinner/> : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item)=>(
          <motion.div
           key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
          <FeedbackItem
            key={item.id} item={item}/>
           </motion.div>
        ))}
        </AnimatePresence>
    </div>
  )
}


export default FeedbackList