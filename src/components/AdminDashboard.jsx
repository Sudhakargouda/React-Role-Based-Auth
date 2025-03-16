import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div style={styles.dashboard}>
      <aside style={{ ...styles.sidebar, width: isSidebarOpen ? "250px" : "60px" }}>
        <h2 style={{ ...styles.logo, display: isSidebarOpen ? "block" : "none" }}>Admin Panel</h2>
        <button style={styles.toggleButton} onClick={() => setSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? "❌" : "📂"}
        </button>
        <nav style={styles.nav}>
          <button style={styles.navButton} onClick={() => alert("Manage Users Coming Soon!")}>
            👥 {isSidebarOpen ? "Manage Users" : ""}
          </button>
          <button style={styles.navButton} onClick={() => alert("View Orders Coming Soon!")}>
            📦 {isSidebarOpen ? "View Orders" : ""}
          </button>
          <button style={styles.navButton} onClick={() => alert("Settings Coming Soon!")}>
            ⚙️ {isSidebarOpen ? "Settings" : ""}
          </button>
        </nav>
        <button style={styles.logoutButton} onClick={() => { logout(); navigate("/login"); }}>
          🚪 {isSidebarOpen ? "Logout" : ""}
        </button>
      </aside>

      <main style={styles.content}>
        <h1 style={styles.heading}>👋 Welcome, {user?.email}</h1>
        <p style={styles.subText}>Manage users, orders, and settings efficiently.</p>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>👥 Manage Users</h3>
            <p>View, edit, or remove user accounts.</p>
            <button style={styles.cardButton} onClick={() => alert("Manage Users Coming Soon!")}>Go to Users</button>
          </div>
          <div style={styles.card}>
            <h3>📦 Orders</h3>
            <p>Track all customer orders & updates.</p>
            <button style={styles.cardButton} onClick={() => alert("Orders Coming Soon!")}>View Orders</button>
          </div>
          <div style={styles.card}>
            <h3>📊 Reports</h3>
            <p>Analyze sales & business performance.</p>
            <button style={styles.cardButton} onClick={() => alert("Reports Coming Soon!")}>View Reports</button>
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
    backgroundColor: "#343a40",
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
    color: "#343a40",
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

export default AdminDashboard;
