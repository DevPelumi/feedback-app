import { createContext, useState } from "react";
import {v4 as uuidv4} from "uuid"


const FeedbackContext = createContext()

export const FeedbackProvider = ({children})=> {
  const [feedback, setFeedback] = useState([
      {
        id: 1,
        text: 'This is feedback item 1',
        rating: 9, 
      },
      {
        id: 2,
        text: 'This is feedback item 2',
        rating: 9, 
      },
      {
        id: 3,
        text: 'This is feedback item 3',
        rating: 8, 
      }
    ])  

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you wnat to delete')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }

        
    }

    const [feedbackEdit , setFeedbackEdit] = useState(
        {item: {},
         edit: false}
    )

    const editFeedback = (item) =>{
        setFeedbackEdit (
            {
                item: item,
                edit: true
            }
        )

    }

    const updateFeedback = (id, udtItem)=>{
        setFeedback(
            feedback.map((item) => item.id === id ? {...item,...udtItem} : item)
        )
    }

    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback ([newFeedback,...feedback])
    }

  return (
      <FeedbackContext.Provider value={{feedback,feedbackEdit,updateFeedback,deleteFeedback,addFeedback,editFeedback}}>
          {children}
      </FeedbackContext.Provider>
  )
}

export default FeedbackContext