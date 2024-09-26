import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



function Signup(props) {

    const navigate = useNavigate()

    const users = props.users
    const setusers = props.setusers

    const [Eusername, setEuname] = useState()
    const [Epassword, setEpassword] = useState()

    function handleinput(e) {

        setEuname(e.target.value)

    }

    function handlepassword(e) {

        setEpassword(e.target.value)

    }

    function Adduser(){
        setusers([...users,{username:Eusername,password:Epassword}])
        navigate("/")
    }

    return (

        <div className="bg-black p-10">

            <div className="bg-[#EFEFEF] p-10 border rounded-md">

                <h1 className="text-3xl font-medium">Hey hi!</h1>
                <p>Sign Up here :)</p>

                <div className="flex flex-col gap-2 py-2">

                    <input type="text"
                        className="w-52 p-1 bg-transparent border border-black rounded-md"
                        placeholder="Username"
                        onChange={handleinput}
                    />

                    <input type="text"
                        className="w-52 p-1 bg-transparent border border-black rounded-md"
                        placeholder="Password"
                        onChange={handlepassword}
                    />

                    <input type="text"
                        className="w-52 p-1 bg-transparent border border-black rounded-md"
                        placeholder="Confirm Password"
                    />

                    <button className="bg-[#FCA201] p-1 w-24 rounded-md" onClick={Adduser}>
                        SignUp
                    </button>
                    
                    <p>Already have an account? <Link to={"/"} className="text-green-500">Login</Link> </p>


                </div>

            </div>

        </div>
    )
}

export default Signup