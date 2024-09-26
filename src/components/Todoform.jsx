import { useState } from "react"

function Todoform(props) {

    const activitylist = props.activitylist
    const setactivitylist = props.setactivitylist

    const [newactivity, setnewactivity] = useState("")

    function handlechange(e) {
        setnewactivity(e.target.value)
    }

    function handleaddactivity() {

        if (newactivity.trim() !== "") {
            setactivitylist([...activitylist, { id: activitylist.length + 1, activity: newactivity }])
            setnewactivity("")
        }

    }


    return (

        <div className="flex flex-col  gap-3 ">

            <h1 className="text-2xl font-semibold">Manage Activities</h1>

            <div>
                <input value={newactivity} onChange={handlechange} type="text" placeholder="What's Next ?" className=" border border-black bg-transparent p-1 w-72 " />
                <button onClick={handleaddactivity} className="bg-black text-white border border-black p-1">ADD</button>
            </div>



        </div>
    )
}

export default Todoform