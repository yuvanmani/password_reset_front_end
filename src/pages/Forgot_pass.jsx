import { useDispatch, useSelector } from "react-redux"
import { selectEmail, setEmail } from "../redux/features/forgotSlice";
import userServices from "../services/userServices";
import { toast } from "react-toastify";

const Forgot_pass = () => {

  const email = useSelector(selectEmail);
  const dispatch = useDispatch();

  const handleForgot = (e) => {
    e.preventDefault();

    // handle the generate link logic here
    userServices.forgot({ email })
      .then((response) => {
        toast.success(response.data.message);

        // clear the form
        dispatch(setEmail(""));

      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
  }

  return (
    <div className="bg-gray-50 px-2 py-4 m-1 border-blue-400 border-2 rounded-md xl:w-3/5 xl:mt-10 xl:ml-80">
      <h1 className="m-2 mt-4 text-center text-xl font-bold bg-slate-200 text-blue-700 rounded-lg py-1 italic">To Reset Password</h1>
      <form onSubmit={handleForgot}>
        <input className="border-2 w-5/6 py-1 m-2 ml-8 outline-blue-400 hover:outline-red-400 rounded-lg" type="email" placeholder="Enter email" value={email} onChange={(e) => dispatch(setEmail(e.target.value))} />
        <button className="border-2 w-5/6 py-1 m-2 ml-8 bg-cyan-300 hover:bg-cyan-500 text-xl font-bold italic text-purple-900 rounded-lg" type="submit">Send Link</button>
      </form>
    </div>
  )
}

export default Forgot_pass