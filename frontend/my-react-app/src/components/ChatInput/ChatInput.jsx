function ChatInput() {
  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Type a message..."
        style={styles.input}
      />
      <button style={styles.button}>Send</button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    padding: "12px",
    borderTop: "1px solid #ddd",
    backgroundColor: "#ffffff",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
  },
  button: {
    marginLeft: "10px",
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4f8cff",
    color: "white",
    fontWeight: "500",
    cursor: "pointer",
  },
};

export default ChatInput;
