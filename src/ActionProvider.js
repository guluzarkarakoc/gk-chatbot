class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   helloChatHandler =() => {
    const message = this.createChatBotMessage("Merhaba! Şu anda buradasın")
    this.setChatbotMessage(message)
   }

   todosHandler=()=>{
    const message = this.createChatBotMessage("İşte Yapılacaklar", {
        widget: "todos",
    })
    this.setChatbotMessage(message)
   }

   setChatbotMessage = (message) => {
    this.setState(state =>({...state, messages:[...state.messages,message]}))
   }
 }
 
 export default ActionProvider;