export default function setNewTextField(e) {
    e.preventDefault();
    const textField = e.target.value;
    return {
        type: 'SET_TEXTFIELD',
        payload: textField
    }
}