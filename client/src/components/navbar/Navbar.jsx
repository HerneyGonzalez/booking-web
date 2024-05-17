import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    const confirmLogout = window.confirm("¿Estás seguro de que deseas cerrar sesión?");
    if (confirmLogout) {
      logout();
    }
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">RoadToRest</span>
        </Link>
        <div className="authButtons">
          {!user ? (
            <>
              <Link to="/login" className="headerLink">
                <button className="headerBtn">Iniciar sesión</button>
              </Link>
              <Link to="/register" className="headerLink">
                <button className="headerBtn">Registrarse</button>
              </Link>
            </>
          ) : (
            <>
              <div>Bienvenido, {user.username}</div>{" "}
              {/* Puedes mostrar el nombre de usuario si lo deseas */}
              <button className="headerBtn2" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
