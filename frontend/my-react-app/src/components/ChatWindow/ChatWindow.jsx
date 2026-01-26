import Message from "../Message/Message";

function ChatWindow() {
  return (
    <div style={styles.window}>
      <Message sender="ai" text="Hello! How can I help you?" />
      <Message sender="user" text="I want to chat." />
    </div>
  );
}

const styles = {
  window: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    backgroundColor: "#ffffff",
  },
};

export default ChatWindow;
