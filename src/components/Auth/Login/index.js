import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as Input from "../Input";
import { useFormValidation } from "../../../lib/hooks/useFormValidation";
import useAuthentication from "../../../lib/hooks/useAuthentication";

const Alert = ({ isVisible }) =>
  isVisible && (
    <div className="alert alert-info mt-3">
      <p className="icontext">
        <i className="icon text-primary fa fa-thumbs-up"></i>Utilisateur connecté
      </p>
    </div>
  );
const ErrorMessage = ({ error }) => {
  return (
    error && (
      <div className="alert alert-danger mt-3">
        <p className="icontext]" style={{ color: "crimson" }}>
          <i className="icon text-danger fas fa-exclamation-circle"></i>{" "}
          {error?.error || "Please login"}
        </p>
      </div>
    )
  )
}


const defaultValues = {
  email: "",
  password: "",
};
const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const { handleUserLogin } = useAuthentication(dispatch);
  const { user, error } = useSelector((state) => state.user);
  const {
    formValues,
    validate,
    register,
    handleOnChange,
    isValid,
  } = useFormValidation({ formName: "login", defaultValues: defaultValues });
  const { email, password } = formValues["login"] ?? {};
  useEffect(() => {
    register(defaultValues);
  }, []);
  useEffect(() => {
    validate(formValues["login"] ?? {});
  }, [formValues]);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleUserLogin(email, password).then((currentUser) => {
      currentUser && setTimeout(() => history.push("/"), 2000);
    });
  };
  return (
    <>
      <div
        className="card mx-auto"
        style={{ maxWidth: "380px", marginTop: "200px" }}
      >
        <div className="card-body">
          <h4 className="card-title mb-4">Se connecter</h4>
          {/* feedback et message d'erreurs */}
          <ErrorMessage error={error} />
          <Alert isVisible={!!user} />
          <form name="login" onSubmit={handleOnSubmit}>
            {/* 
          <a href="#" className="btn btn-facebook btn-block mb-2"> <i className="fab fa-facebook-f"></i> &nbsp  Sign in with Facebook</a>
          <a href="#" className="btn btn-google btn-block mb-4"> <i className="fab fa-google"></i> &nbsp  Sign in with Google</a> 
          */}
            <div className="form-group" style={{ marginBottom: 0 }}>
              <Input.Email
                label="Adresse e-mail"
                style={{ padding: 0 }}
                onChange={handleOnChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <Input.Password
                label="Mot de passe"
                name="password"
                style={{ padding: 0 }}
                onChange={handleOnChange}
                value={password}
              />
            </div>
            <div className="form-group">
              <Input.Checkbox col="6">Se souvenir</Input.Checkbox>
            </div>
            <div className="form-group">
              <Input.Submit
                classNames="btn-primary btn-block"
                title="Se connecter"
                disabled={!isValid}
              />
            </div>
          </form>
        </div>
      </div>
      <p className="text-center mt-4">
        Avez vous déjà un compte? <Link to="/register">Se connecter</Link>
      </p>
      <br />
      <br />
    </>
  );
};
export default Login;
