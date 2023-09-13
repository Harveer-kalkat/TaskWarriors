import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const steps = [
  {
    id: "1",
    message: "What number I am thinking?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: 1, label: "Number 1", trigger: "4" },
      { value: 2, label: "Number 2", trigger: "3" },
      { value: 3, label: "Number 3", trigger: "3" },
    ],
  },
  {
    id: "3",
    message: "Wrong answer, try again.",
    trigger: "2",
  },
  {
    id: "4",
    message: "Awesome! You are a telepath!",
    end: true,
  },
];

// Creating our own theme
const theme = {
  background: "#C9FF8F",
  headerBgColor: "#197B22",
  headerFontSize: "20px",
  botBubbleColor: "#0F3789",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#FF5733",
  userFontColor: "white",
};

// Set some properties of the bot
const config = {
  botAvatar: require("../images/bot.jpg"),
  floating: true,
};

function Chatbot() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot
          // This appears as the header
          // text for the chat bot
          headerTitle="GeekBot"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </div>
  );
}

export default Chatbot;
