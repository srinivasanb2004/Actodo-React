import { useLocation } from "react-router-dom"
import Header from "../components/Header"
import Card from "../components/Card"
import Todocontainer from "../components/TodoContainer"

function Landing() {

    const data = useLocation()

    return (

        <div className="bg-black p-16">

            <div className="bg-[#EFEFEF] p-10 border rounded-md">

                <Header name={data.state.user}/>

                <div className="flex justify-between gap-7 flex-wrap my-5">

                    <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Coimbatore"} />
                    <Card bgcolor={"#FD6663"} title={"September"} subtitle={"12:30:06"} />
                    <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"} />

                </div>

                <Todocontainer />


            </div>

        </div>
    )
}

export default Landing