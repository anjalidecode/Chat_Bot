import { useState } from "react";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import ChatInput from "./components/ChatInput/ChatInput";

function App() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! How can I help you?" },
    { sender: "user", text: "Help me with a task." },
  ]);

  return (
    <div style={styles.app}>
      <div style={styles.chatContainer}>
        <ChatWindow messages={messages} />
        <ChatInput />
      </div>
    </div>
  );
}

const styles = {
  app: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f7f7f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  chatContainer: {
    width: "100%",
    maxWidth: "800px",
    height: "95vh",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    overflow: "hidden",
  },
};

export default App;
