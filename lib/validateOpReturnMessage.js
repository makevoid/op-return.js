const validateOpReturnMessage = (message) => {
  if (!message || message.trim() == '') throw new Error("Message cannot be blank.")
  if (message.length > 75) throw new Error("Message is too long, max 75 chars")
}

module.exports = validateOpReturnMessage
