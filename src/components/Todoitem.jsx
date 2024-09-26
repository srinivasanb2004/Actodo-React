function Todoitem(props) {

    const activitylist = props.activitylist
    const setactivitylist = props.setactivitylist

    function handledelete(deleteid){

        var temparr = activitylist.filter(function(item){

            if(item.id===deleteid)
            {
                return false
            }
            else{
                return true
            }
        })

        setactivitylist(temparr)

    }

    return (

        <div className="flex justify-between">
            <p>{props.index + 1}.{props.item.activity}</p>
            <button className="text-red-600"onClick={()=>{handledelete(props.id)}}>Delete</button>
        </div>

    )
}

export default Todoitem