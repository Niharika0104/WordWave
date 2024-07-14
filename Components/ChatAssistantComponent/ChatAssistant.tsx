'use client'
import { useState, useEffect } from "react";

export default function ChatAssistant() {
    const [query, setQuery] = useState("");
    const [flag, setFlag] = useState<undefined | boolean>(undefined);
    const [conversation, setConversation] = useState([]);
    const [res, setRes] = useState("");

    const handleSubmit = async () => {
        // For example, you might want to send the query to an API
        setFlag(true);
      
    };

    return (
        <>
            <div className="w-[70%] mx-auto h-screen flex flex-col">
                <div className="flex-1 overflow-y-auto p-4">
                    {flag === undefined ? (
                        <div className="flex rounded-lg px-5 py-3 bg-gray-100 border border-gray-300 mb-4">
                            <p>Hello! I'm your blog writing assistant. I can help you craft beautiful blog posts. How can I assist you today?</p>
                        </div>
                    ) : null}

                    {flag === true ? (
                        <div className="fixed right-10 rounded-full px-5 py-3 max-w-max bg-blue-100 border border-blue-300 mb-4">
                            <p>{query}</p>
                        </div>
                    ) : null}
                </div>

                <div className="fixed bottom-0 left-0 w-full flex justify-center  bg-white border-t border-gray-300 p-3">
                   
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Enter your prompt here"
                        className="flex-1 p-2 border border-gray-300 rounded-lg placeholder:text-gray-500"
                    />
                    <button
                        className="bg-indigo-600 px-4 py-2 text-white rounded-lg ml-3 disabled:bg-gray-200 cursor-pointer disabled:text-gray-600 disabled:cursor-not-allowed"
                        disabled={query.length === 0}
                        onClick={handleSubmit}
                    >
                        Send
                    </button>
               </div>
            </div>
        </>
    );
}
