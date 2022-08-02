
let greetingMessage = "Welcome to GraphQL";

function setGreetingMessage(_, { message }) {
    return greetingMessage = message;
}
function getGreetingMessage() {
    return greetingMessage;
}

module.exports = {
    getGreetingMessage, setGreetingMessage
}