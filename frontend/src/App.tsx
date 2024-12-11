import { useEffect, useState, useRef } from "react";

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();

  function sendMessage() {
    if (!socket) {
      return;
    }

    const message = inputRef.current.value;
    //@ts-ignore
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    setSocket(ws);
    ws.onmessage = (ev) => {
      alert(ev.data);
    };
  }, []);

  return (
    <>
      <div>
        <input
          ref={inputRef}
          style={{ padding: "8px", borderRadius: "15px" }}
          type="message"
          placeholder="message"
        />
        <br />
        <button
          onClick={sendMessage}
          style={{ padding: "8px", borderRadius: "15px" }}
        >
          send
        </button>
      </div>
    </>
  );
}

export default App;
