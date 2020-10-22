const createTransporter = async () => {
  return {
    sendMail: async () => {
      return {messageId: 'mock-sent-message-id'}
    }
  };
}

module.exports = { createTransporter };
