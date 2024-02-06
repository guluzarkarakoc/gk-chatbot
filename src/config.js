import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar";
import React from "react";
import { Todos } from "./components/Todos/Todos";

const config = {
    initialMessages: [createChatBotMessage(`Hello world`,
   { widget:`todos`
}
    )],
    botName: "BlueBot",
    customComponents: {
        botAvatar: (props) => <BotAvatar {...props} />
    },
    customStyles: {
        // Overrides the chatbot message styles
        botMessageBox: {
            backgroundColor: "pink",
        },
        // Overrides the chat button styles
        chatButton: {
            backgroundColor: "green",
        },
        state: {
            todos: []
        },
        widgets: [
            {
                wiggetName: "todos",
                widgetFunc: (props) => <Todos{...props} />,
                mapStateToProps: ["todos"],
            }
        ]
    }

}

export default config