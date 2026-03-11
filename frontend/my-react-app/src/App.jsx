import { useState } from "react";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import ChatInput from "./components/ChatInput/ChatInput";

function App() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! How can I help you?" },
  ]);

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    // Add user message
    setMessages((prevMessages) => [...prevMessages, { sender: "user", text }]);

    try {
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();

      // Add AI response
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "ai", text: data.reply },
      ]);
    } catch (error) {
      console.error("Error:", error);

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "ai", text: "Error contacting AI backend." },
      ]);
    }
  };

  return (
    <div style={styles.app}>
      <div style={styles.chatContainer}>
        <ChatWindow messages={messages} />
        <ChatInput onSend={handleSendMessage} />
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
