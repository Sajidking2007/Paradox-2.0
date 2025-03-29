module.exports = {
    config: {
        name: "Sajid",
        version: "1.0",
        author: "Sajid", //** original author fb I'd : https://m.me/facebook.paradox **//
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "sajid") return message.reply("ALMIGHTY LORD YHWACH IS BUSY PLEASE WAIT 👑");
}
}; 
