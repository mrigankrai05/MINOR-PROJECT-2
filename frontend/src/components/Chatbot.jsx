import { useState } from "react"
import axios from "axios"

import { useRef, useEffect } from "react"


export default function Chatbot({ values }) {



    const [messages, setMessages] = useState([])
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)

    const bottomRef = useRef()

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    const sendMessage = async () => {

        if (!input.trim()) return

        const userMsg = { role: "user", text: input }

        setMessages(prev => [...prev, userMsg])
        setInput("")
        setLoading(true)

        try {

            const res = await axios.post(
                "http://127.0.0.1:8000/chat",
                {
                    question: userMsg.text,
                    values: values
                }
            )

            const botMsg = {
                role: "bot",
                text: res.data.answer
            }

            setMessages(prev => [...prev, botMsg])

        } catch (err) {

            setMessages(prev => [
                ...prev,
                { role: "bot", text: "AI assistant unavailable" }
            ])

        }

        setLoading(false)

    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            sendMessage()
        }
    }

    return (

        <div className="chatContainer">

            <h2 className="chatTitle">
                🧠 AI Medical Assistant
            </h2>

            <div className="chatMessages">

                {messages.map((msg, i) => (

                    <div
                        key={i}
                        className={
                            msg.role === "user"
                                ? "message userMessage"
                                : "message botMessage"
                        }
                    >

                        {msg.text}

                    </div>

                ))}

                {loading && (
                    <div className="botMessage typing">
                        AI is analyzing...
                    </div>
                )}

            </div>


            <div className="chatInputContainer">

                <input
                    className="chatInput"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ask about your medical report..."
                />

                <button
                    className="sendButton"
                    onClick={sendMessage}
                >
                    Send
                </button>

            </div>

        </div>

    )

}