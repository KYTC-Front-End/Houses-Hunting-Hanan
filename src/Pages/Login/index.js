import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";import './style.css';
function Login() {
  const navigate = useNavigate();
  const initialValues = {  email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSignUp = (event) => {
    navigate("/register");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 5) {
      errors.password = "Password must be more than 5 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify()}</pre>
      )}
      <form onSubmit={handleSubmit} className="form">
 
      <diV id='signin-continar'>
        <h1 >Sign in</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
           
            <input
              type="text"
              name="email"
              placeholder="Email..."
              value={formValues.email}
              onChange={handleChange}
              className="ii"
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
          
            <input
              type="password"
              name="password"
              placeholder="Password..."
              value={formValues.password}
              onChange={handleChange}
              className="ii"
            />
          </div>
          <p>{formErrors.password}</p>
          <button id='buttonsubmit' >Sign in</button>
          <div className="signup-text">
              Don't have an account? <a href="#" id='buttontext' onClick={handleSignUp}>Sign Up</a>
            </div>
        </div>
        </diV>
      </form>
    </div>
  );
}
export default Login;