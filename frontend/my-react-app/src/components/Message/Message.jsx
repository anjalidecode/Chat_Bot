function Message({ sender, text }) {
  const isUser = sender === "user";

  return (
    <div
      style={{
        alignSelf: isUser ? "flex-end" : "flex-start",
        backgroundColor: isUser ? "#d2e3fc" : "#eeeeee",
        color: "#1f1f1f",
        padding: "10px 14px",
        borderRadius: "14px",
        maxWidth: "65%",
        fontSize: "14px",
        lineHeight: "1.4",
      }}
    >
      {text}
    </div>
  );
}

export default Message;
