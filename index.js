const TeleBot = require('telebot');
const bot = new TeleBot('368949479:AAHvHZ88ARmTZ50ZCo4MXCCmEIXMMUcyRrw');

//welcome message
bot.on(['/start'], (msg) => msg.reply.text('Welcome to Nyx ' + msg.from.first_name + '!'));

//------------different standard replies---------------//

//reply to sticker sent
bot.on('sticker', (msg) => {
    return msg.reply.sticker('http://i.imgur.com/VRYdhuD.png', { asReply: true });
});

//send message if user edits message
bot.on('edit', (msg) => {
    return msg.reply.text('I saw it! You edited your message!', { asReply: true });
});


//-------------Functions-------------//
//for user to make bot send something
bot.on(/^\/say (.+)$/, (msg, props) => {
    const text = props.match[1];
    return bot.sendMessage(msg.from.id, text, { replyToMessage: msg.message_id });
});

//get time
bot.on('/time', msg => {

    return bot.sendMessage(msg.from.id, 'Getting time...').then(re => {
        // Start updating message
        updateTime(msg.from.id, re.result.message_id);
    });

});

function updateTime(chatId, messageId) {

    // Update every second
    setInterval(() => {
        bot.editMessageText(
            {chatId, messageId}, `<b>Current time:</b> ${ time() }`,
            {parseMode: 'html'}
        ).catch(error => console.log('Error:', error));
    }, 1000);

}

bot.start();

// Get current time
function time() {
    return new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

var http = require("http");
  setTimeout(function() {
    http.get("http://secure-oasis-14648.herokuapp.com");
}, 18000000); // every 5 minutes (300000)

server.listen(process.env.PORT, '0.0.0.0');
