const { useState, useEffect } = React;

// Backend (server.js) adresi — ödev için localhost yazıyoruz
const socket = io("http://localhost:3001");

function App() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on("chat message", (msg) => {
            setMessages((prev) => [...prev, msg]);
        });

        return () => {
            socket.off("chat message");
        };
    }, []);

    const sendMessage = () => {
        if (message.trim() !== "") {
            socket.emit("chat message", message);
            setMessage("");
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>Gerçek Zamanlı Chat</h2>
            <div
                style={{
                    border: "1px solid #ccc",
                    height: "300px",
                    overflowY: "auto",
                    padding: "10px",
                    marginBottom: "10px",
                }}
            >
                {messages.map((msg, i) => (
                    <p key={i}>{msg}</p>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Mesaj yaz..."
                style={{ width: "70%", padding: "5px" }}
            />
            <button onClick={sendMessage} style={{ marginLeft: "10px", padding: "5px 10px" }}>
                Gönder
            </button>
        </div>
    );
}

// React DOM ile render et
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

