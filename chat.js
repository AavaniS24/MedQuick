const API_KEY = "AIzaSyDmwj94rIo3ZTOEJBtIvKPtRS9WCAzaqM4";
// Change gemini-1.5-flash to gemini-3-flash
// Use the 'preview' alias which is currently the active endpoint for Gemini 3 Flash
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=AIzaSyDmwj94rIo3ZTOEJBtIvKPtRS9WCAzaqM4`;
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(text, sender) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", sender);
    msgDiv.innerText = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function getBotResponse(prompt) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await response.json();
        // Gemini returns response in data.candidates[0].content.parts[0].text
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("Error:", error);
        return "Sorry, I'm having trouble connecting to the AI.";
    }
}

sendBtn.addEventListener("click", async () => {
    const text = userInput.value.trim();
    if (!text) return;

    addMessage(text, "user");
    userInput.value = "";

    const botResponse = await getBotResponse(text);
    addMessage(botResponse, "bot");
});

// Allow 'Enter' key to send message
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendBtn.click();
});