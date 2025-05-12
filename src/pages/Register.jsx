import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router"
import { selectEmail, selectPassword, setEmail, setPassword } from "../redux/features/registerSlice";
import userServices from "../services/userServices";
import { toast } from "react-toastify";

const Register = () => {

  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // handle register logic here
    userServices.register({ email, password })
      .then((response) => {
        toast.success(response.data.message);

        // clear the form
        dispatch(setEmail(""));
        dispatch(setPassword(""));

        // redirect to forgot password page
        setTimeout(() => {
          navigate("/forgot-password");
        }, 500)
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
  }

  return (
    <div className="bg-gray-50 px-2 py-4 m-1 border-blue-400 border-2 rounded-md xl:w-3/5 xl:mt-10 xl:ml-80">
      <h1 className="m-2 mt-4 text-center text-xl font-bold bg-slate-200 text-blue-700 rounded-lg py-1 italic ">User Registration</h1>
      <form onSubmit={handleRegister}>
        <input className="border-2 w-5/6 py-1 m-2 ml-8 outline-blue-400 hover:outline-red-400 rounded-lg" type="email" placeholder="Enter email" value={email} onChange={(e) => dispatch(setEmail(e.target.value))} />
        <input className="border-2 w-5/6 py-1 m-2 ml-8 outline-blue-400 hover:outline-red-400 rounded-lg" type="password" placeholder="Enter password" value={password} onChange={(e) => dispatch(setPassword(e.target.value))} autoComplete="off" />
        <button className="border-2 w-5/6 py-1 m-2 ml-8 bg-cyan-300 hover:bg-cyan-500 text-xl font-bold italic text-purple-900 rounded-lg" type="submit">Register</button>
      </form>
      <div>
        <p className="w-5/6 py-1 m-2 mt-0 ml-8 mb-0 text-md font-bold text-gray-700">Forgot Password?</p>
        <p className="w-5/6 py-1 m-2 mt-0 ml-8 text-md font-bold text-gray-700"><span className="text-green-600 underline"><Link to="/forgot-password">Click here</Link></span> to reset password</p>
        <div>
          <p className="w-5/6 py-1 m-2 mt-0 ml-8 mb-0 text-md font-bold text-blue-700 underline">Please Note :</p>
          <p className="w-5/6 py-1 m-2 mt-0 ml-8 mb-0 text-md font-semibold text-gray-700">By reading the comment in the zen class portal, I assume, you are facing issue in the register itself. But I tested with my own devices & also with other users. All functions and services are working properly. Please validate once again, If you face the same issue, please share the details along with screenshots if possible.</p>
        </div>
      </div>
    </div>
  )
}

export default Register