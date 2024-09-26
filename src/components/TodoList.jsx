import Todoitem from "./Todoitem"

function Todolist(props) {

    const activitylist = props.activitylist
    const setactivitylist = props.setactivitylist

    return (

        <div className="bg-green-300 flex-grow border rounded-md p-3" >

            <h1 className="text-2xl font-semibold">Today's Activity</h1>

            {
            activitylist.length===0? <p>You haven't added anything yet!</p>: ""
            }


            {
                activitylist.map(function (item, index) {

                    return <Todoitem id={item.id} item={item} index= {index} activitylist={activitylist} setactivitylist={setactivitylist}/>

                })

            }

        </div>

    )
}

export default Todolist