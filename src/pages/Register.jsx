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
    <div>
      <h1>User Registration</h1>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => dispatch(setEmail(e.target.value))} />
        <input type="password" placeholder="Enter password" value={password} onChange={(e) => dispatch(setPassword(e.target.value))} autoComplete="off" />
        <button type="submit">Register</button>
      </form>
      <p>Forgot Password? <Link className="underline" to="/forgot-password">Click here</Link> to reset password</p>
    </div>
  )
}

export default Register