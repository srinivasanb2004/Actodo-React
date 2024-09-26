import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate} from "react-router-dom"



function Login(props) {

    const navigate = useNavigate()

    const [Eusername, setEuname] = useState()
    const [Epassword, setEpassword] = useState()

    const [ruser,setruser] = useState(true)

    const users = props.users

    function handleinput(e) {

        setEuname(e.target.value)

    }

    function handlepassword(e) {

        setEpassword(e.target.value)

    }

   
    function checkuser() {

        var userfound=false
        users.forEach(function (item) {

            if (item.username === Eusername && item.password === Epassword) {
                console.log("Login Successfull !")
                userfound = true
                navigate("/landing",{state:{user:Eusername}})
                
            }
        })

        if(userfound === false){
            console.log("Login Failed:)")
            setruser(false)
        }

    }

    return (

        <div className="bg-black p-10">

            <div className="bg-[#EFEFEF] p-10 border rounded-md">

                <h1 className="text-3xl font-medium">Hey hi!</h1>

                {ruser?<p>I help you manage your activities after login :)</p>:<p className="text-red-600">Please Sign up before you Login !!!</p>}
               

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

                    <button className="bg-[#8272DA] p-1 w-24 rounded-md" onClick={checkuser}>
                        Login
                    </button>

                    <p>Don't have an account? <Link to={"/signup"} className="text-red-500">Sign Up</Link> </p>


                </div>

            </div>

        </div>
    )
}

export default Login