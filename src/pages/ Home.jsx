import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleAdminAccess = () => {
    if (user?.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/forbidden");
    }
  };

  const handleUserAccess = () => {
    if (user?.role === "user") {
      navigate("/user");
    } else {
      navigate("/forbidden");
    }
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h2>🍔 Food Order App</h2>
        <nav>
          {user ? (
            <>
              <button style={styles.navButton} onClick={handleUserAccess}>
                🔍 User Dashboard
              </button>
              <button style={styles.navButton} onClick={handleAdminAccess}>
                🛠️ Admin Dashboard
              </button>
              <button style={styles.logoutButton} onClick={() => { logout(); navigate("/login"); }}>
                🚪 Logout
              </button>
            </>
          ) : (
            <button style={styles.navButton} onClick={() => navigate("/login")}>
              🔑 Login
            </button>
          )}
        </nav>
      </header>

      <main style={styles.container}>
        <div style={styles.textSection}>
          <h1 style={styles.heading}>🍕 Delicious Food Delivered to Your Doorstep</h1>
          <p style={styles.text}>
            Craving something tasty? Explore our wide range of delicious 
            dishes and get them <br />delivered fresh & hot to your home in minutes.  
          </p>
          <button style={styles.orderButton} onClick={() => navigate("/login")}>
            🛒 Start Ordering
          </button>
        </div>
        <div style={styles.imageSection}>
          <img src="/food-order.jpg" alt="Food Ordering" style={styles.image} />
        </div>
      </main>

      <footer style={styles.footer}>
        <p>© 2025 Food Order App. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#ff6600",
    color: "white",
    boxShadow: "none",
    mixBlendMode: "multiply",
    backdropFilter: "blur(10px)",
    flexWrap: "wrap",
  },
  navButton: {
    backgroundColor: "white",
    color: "#ff6600",
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    margin: "5px",
    transition: "background 0.3s ease",
  },
  logoutButton: {
    backgroundColor: "#ff3300",
    color: "white",
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s ease",
    margin: "5px",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    padding: "40px 20px",
    flexWrap: "wrap",
  },
  textSection: {
    flex: "1",
    maxWidth: "50%",
    paddingRight: "30px",
    marginBottom: "50px",
    textAlign: "center",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  text: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#555",
  },
  orderButton: {
    backgroundColor: "#ff6600",
    color: "white",
    padding: "12px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  imageSection: {
    flex: "1",
    maxWidth: "50%",
    textAlign: "center",
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    borderRadius: "10px",
    boxShadow: "none",
    marginLeft: "20px",
    opacity: "1",
    backgroundColor: "transparent",
    mixBlendMode: "multiply",
  },
  footer: {
    textAlign: "center",
    padding: "15px",
    backgroundColor: "#333",
    color: "white",
  },

  "@media (max-width: 900px)": {
    container: {
      flexDirection: "column",
      textAlign: "center",
    },
    textSection: {
      maxWidth: "100%",
      paddingRight: "0px",
    },
    imageSection: {
      maxWidth: "100%",
    },
    image: {
      maxWidth: "90%",
      marginLeft: "0px",
    },
  },
};

export default Home;
