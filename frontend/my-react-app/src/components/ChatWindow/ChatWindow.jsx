import Message from "../Message/Message";

function ChatWindow({ messages }) {
  return (
    <div style={styles.window}>
      {messages.map((msg, index) => (
        <Message key={index} sender={msg.sender} text={msg.text} />
      ))}
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
