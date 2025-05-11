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
    <div>
      <h1>To Reset Password</h1>
      <form onSubmit={handleForgot}>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => dispatch(setEmail(e.target.value))} />
        <button type="submit">Send Link</button>
      </form>
    </div>
  )
}

export default Forgot_pass