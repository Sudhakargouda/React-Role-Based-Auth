import { useNavigate } from "react-router-dom";

const Forbidden = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>🚫 403 Forbidden</h1>
        <p style={styles.text}>You do not have the required permissions to access this page.</p>
        
        <div style={styles.buttonContainer}>
          <button onClick={() => navigate("/")} style={styles.homeButton}>
            🏠 Go to Home
          </button>
          <button onClick={() => navigate("/login")} style={styles.loginButton}>
            🔑 Login Again
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#1c1c1c",
    padding: "20px",
  },
  container: {
    textAlign: "center",
    padding: "40px",
    borderRadius: "10px",
    backgroundColor: "#ff4d4d",
    color: "white",
    width: "450px",
    maxWidth: "90%", 
    boxShadow: "0px 8px 20px rgba(255, 0, 0, 0.2)",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  text: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "10px",
    marginTop: "15px",
    flexWrap: "wrap",
  },
  homeButton: {
    padding: "12px 20px",
    fontSize: "16px",
    color: "white",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s ease",
    minWidth: "150px",
  },
  loginButton: {
    padding: "12px 20px",
    fontSize: "16px",
    color: "white",
    backgroundColor: "#ffcc00",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s ease",
    minWidth: "150px",
  },

  "@media (max-width: 600px)": {
    container: {
      padding: "30px",
    },
    heading: {
      fontSize: "22px",
    },
    text: {
      fontSize: "16px",
    },
    homeButton: {
      fontSize: "14px",
      padding: "10px",
    },
    loginButton: {
      fontSize: "14px",
      padding: "10px",
    },
  },
};

export default Forbidden;
