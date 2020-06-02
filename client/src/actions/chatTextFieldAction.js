export default function setNewChatTextField(e) {
    e.preventDefault();
    const chatTextField = e.target.value;
    return {
        type: 'SET_CHAT_TEXTFIELD',
        payload: chatTextField
    }
}