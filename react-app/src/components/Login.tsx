import React from "react";

interface LoginOptionsProps {
  onOptionClick: (option: string) => void; // Callback when an option is clicked
}

const LoginOptions: React.FC<LoginOptionsProps> = ({ onOptionClick }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Login Portal</h1>
      <div style={styles.optionsContainer}>
        <button style={styles.button} onClick={() => onOptionClick("Student")}>
          Student Login
        </button>
        <button style={styles.button} onClick={() => onOptionClick("Counselor")}>
          Counselor Login
        </button>
        <button style={styles.button} onClick={() => onOptionClick("Admin")}>
          Admin Login
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f4f9",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  optionsContainer: {
    display: "flex",
    gap: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    transition: "background-color 0.3s",
  },
};

export default LoginOptions;
