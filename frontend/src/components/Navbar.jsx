import { Link } from "react-router-dom";

function Navbar() {
  const styles = {
    nav: {
      backgroundColor: "#0078ff",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    link: {
      color: "white",
      textDecoration: "none",
      margin: "0 10px",
      fontWeight: "bold",
    },
  };

  return (
    <nav style={styles.nav}>
      <div>
        <Link style={styles.link} to="/">Accueil</Link>
        <Link style={styles.link} to="/products">Produits</Link>
      </div>
    </nav>
  );
}

export default Navbar;
