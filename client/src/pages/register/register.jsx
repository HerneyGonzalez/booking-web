import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
    city: "",
    phone: "",
  });
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Agregar la clase al montar el componente
    document.body.classList.add("register-page");

    // Quitar la clase al desmontar el componente
    return () => {
      document.body.classList.remove("register-page");
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });

    try {
      const res = await axios.post("/auth/register", formData);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
      // Mostrar alerta de éxito
      alert("Usuario creado correctamente");
      // Limpiar formulario después de registro exitoso
      setFormData({
        username: "",
        email: "",
        password: "",
        country: "",
        city: "",
        phone: "",
      });
      // Opcionalmente, puedes redirigir al usuario después del registro exitoso
      navigate("/login");
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
      // Mostrar alerta de error
      alert("Error al crear usuario");
    }
  };

  return (
    <div className="register">
      <div className="rContainer">
        <h2>Registrate y disfruta de la comodidad al viajar</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Nombre de usuario"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="rInput"
              required // Hacer el campo obligatorio
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Correo"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rInput"
              required // Hacer el campo obligatorio
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="rInput"
              required // Hacer el campo obligatorio
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Pais"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="rInput"
              required // Hacer el campo obligatorio
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Ciudad"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="rInput"
              required // Hacer el campo obligatorio
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Telefono"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="rInput"
              required // Hacer el campo obligatorio
            />
          </div>
          <button disabled={loading} type="submit" className="rButton">
            Registrar
          </button>
          {error && <span>{error.message}</span>}
        </form>
        <p style={{ marginTop: "20px" }}>
          ¿Ya estás registrado? <Link to="/login">Iniciar sesión </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
