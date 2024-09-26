import Todoform from "./Todoform"
import Todolist from "./TodoList"
import { useState } from "react"


function Todocontainer() {

    const [activitylist, setactivitylist] = useState([

        {
            id: 1,
            activity: "Wakeup At 6AM"
        },
        {
            id: 2,
            activity: "Get Freshed Up"
        },
        {
            id: 3,
            activity: "Go for Jogging"
        }
    ])

    return (

        <div className="flex gap-8 flex-wrap">

            <Todoform activitylist= {activitylist} setactivitylist = {setactivitylist}/>

            <Todolist activitylist= {activitylist} setactivitylist = {setactivitylist} />

        </div>
    )
}

export default Todocontainer





