import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Agregar la clase al montar el componente
    document.body.classList.add("login-page");

    // Quitar la clase al desmontar el componente
    return () => {
      document.body.classList.remove("login-page");
    };
  }, []);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <h2>Inicio de sesión</h2>
        <form onSubmit={handleClick}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Nombre de usuario"
              id="username"
              value={credentials.username}
              onChange={handleChange}
              className="lInput"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Contraseña"
              id="password"
              value={credentials.password}
              onChange={handleChange}
              className="lInput"
              required
            />
          </div>
          <button disabled={loading} type="submit" className="lButton">
            Iniciar
          </button>
          {error && <span>{error.message}</span>}
        </form>
        <p style={{ marginTop: "20px" }}>
          ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
