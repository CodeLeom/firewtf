import { useState } from "react"
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"

function SignUp() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [msg, setMsg] = useState('')

  const signUpUser = async (e) => {
    e.preventDefault()
    if(password === confirmPassword){
      try {
        await createUserWithEmailAndPassword(auth, email, password)
        navigate("/")
      } catch (error) {
        setMsg("Sorry, something went wrong. Please try again")
        console.log(error)        
      }
    } else {
      setMsg("Password do not match. Please check and try again")
    }
  }

  return (
    <>
      <div className="flex justify-center mt-10">
          <div className="card w-96 bg-base-100 shadow-xl">
            <h2 className="card-title justify-center">Sign Up</h2>
              <div className="card-body">
                  <span className="label-text">Email</span>
                  <label className="input input-bordered flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                      <input type="text" className="grow" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </label>
                  <span className="label-text">Password</span>
                  <label className="input input-bordered flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                      <input type="password" className="grow" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </label>
                  <span className="label-text">Confirm Password</span>
                  <label className="input input-bordered flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                      <input type="password" className="grow" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                  </label>
                <div>
              <span className="text-error">{ "" !== msg && msg }</span>
          </div>
                <div className="card-actions justify-center">
                  <button className="btn btn-wide btn-outline btn-black" onClick={(e) => signUpUser(e)}>Sign Up</button>
                </div>
                <div className="mt-3 text-center">Already have an account?  
                <span className="text-[#AA4A44]">
                  <Link to="/"> Login</Link>
                </span>
              </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default SignUp
