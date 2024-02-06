class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        console.log(message)

        const lowercase = message.toLowerCase()
        console.log(this.state)

        if (lowercase.includes("merhaba" && "hello")) {
           this.actionProvider.helloChatHandler()
        }  
        
        if (lowercase.includes("todos")) {
            this.actionProvider.todosHandler()


        }
    }
}

export default MessageParser;

