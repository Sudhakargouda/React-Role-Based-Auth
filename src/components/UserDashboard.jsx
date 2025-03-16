import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div style={styles.dashboard}>
      <aside style={{ ...styles.sidebar, width: isSidebarOpen ? "250px" : "60px" }}>
        <h2 style={{ ...styles.logo, display: isSidebarOpen ? "block" : "none" }}>User Panel</h2>
        <button style={styles.toggleButton} onClick={() => setSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? "❌" : "📂"}
        </button>
        <nav style={styles.nav}>
          <button style={styles.navButton} onClick={() => alert("Profile Feature Coming Soon!")}>
            📋 {isSidebarOpen ? "Profile" : ""}
          </button>
          <button style={styles.navButton} onClick={() => alert("Orders Feature Coming Soon!")}>
            🛒 {isSidebarOpen ? "My Orders" : ""}
          </button>
          <button style={styles.navButton} onClick={() => alert("Settings Feature Coming Soon!")}>
            ⚙️ {isSidebarOpen ? "Settings" : ""}
          </button>
        </nav>
        <button style={styles.logoutButton} onClick={() => { logout(); navigate("/login"); }}>
          🚪 {isSidebarOpen ? "Logout" : ""}
        </button>
      </aside>

      <main style={styles.content}>
        <h1 style={styles.heading}>👋 Welcome, {user?.email}!</h1>
        <p style={styles.subText}>Manage your orders, profile, and settings in one place.</p>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>🛍️ Your Orders</h3>
            <p>Track your recent purchases and past orders.</p>
            <button style={styles.cardButton} onClick={() => alert("View Orders Coming Soon!")}>View Orders</button>
          </div>
          <div style={styles.card}>
            <h3>🎁 Offers & Rewards</h3>
            <p>Check your latest discounts, offers, and reward points.</p>
            <button style={styles.cardButton} onClick={() => alert("Offers Feature Coming Soon!")}>View Offers</button>
          </div>
        </div>
      </main>
    </div>
  );
};

const styles = {
  dashboard: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#f8f9fa",
  },
  sidebar: {
    backgroundColor: "#007bff",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.1)",
    transition: "width 0.3s ease",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  toggleButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
    marginBottom: "15px",
  },
  nav: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  navButton: {
    backgroundColor: "white",
    color: "#007bff",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s ease",
    width: "100%",
    textAlign: "left",
  },
  logoutButton: {
    backgroundColor: "#dc3545",
    color: "white",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    marginTop: "auto",
    transition: "background 0.3s ease",
    width: "100%",
    textAlign: "left",
  },
  content: {
    flex: 1,
    padding: "30px",
    textAlign: "center",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subText: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "20px",
  },
  cardContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    width: "300px",
    textAlign: "center",
  },
  cardButton: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },

  "@media (max-width: 900px)": {
    dashboard: {
      flexDirection: "column",
    },
    sidebar: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
      padding: "10px",
    },
    nav: {
      flexDirection: "row",
      gap: "5px",
    },
    navButton: {
      fontSize: "14px",
      padding: "8px",
    },
    logoutButton: {
      fontSize: "14px",
      padding: "8px",
    },
    content: {
      padding: "20px",
    },
    cardContainer: {
      flexDirection: "column",
    },
    card: {
      width: "100%",
    },
  },
};

export default UserDashboard;
