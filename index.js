var TeleBot = require('telebot');
const bot = new TeleBot({token: '368949479:AAHvHZ88ARmTZ50ZCo4MXCCmEIXMMUcyRrw', usePlugins: ['askUser']});
var niggaswag = -195813094;
var user = -1001129475063;
var user1 = -195813094;
var me = 259921505;

//-1001094358645
//me = 259921505
// niggaswag 0.0 = -195813094
//Nyx chat = -1001129475063
//------------Random test functions---------------//


//------------different standard replies---------------//

//reply to sticker sent
/*bot.on('sticker', (msg) => {
  return msg.reply.sticker('http://i.imgur.com/VRYdhuD.png', { asReply: true });
});*/

//send message if user edits message
bot.on('edit', (msg) => {
  return msg.reply.text('I saw it! You edited your message!;)', { asReply: true });
});

//when any user says hi/hello
bot.on('text', (msg) => {

  var greeting1 = "hi";
  var greeting2 = "hey";
  var greeting3 = "hello";
  if (msg.text.toLowerCase() ===  greeting1 || msg.text.toLowerCase() === greeting2 || msg.text.toLowerCase() === greeting3) {
    bot.sendMessage(msg.chat.id, "Hi " + msg.from.first_name + " :)");
  }
});

//initiate NyxxBot
bot.on(['/initiate'], (msg) => msg.reply.text('Hi Everyone! I am NyxBot:)'));

bot.on('text', (msg) => {
  var start = "start";
  if(msg.text.toLowerCase() === start && msg.chat.id === niggaswag) {
    bot.sendMessage(user, "Welcome to Nyx! Over next 3 days, I will give all of you tasks to complete as part of getting initiated to Nocturna.");
  }
});


//initiate the bot
bot.on('text', (msg) => {
  var welcome = "welcome nyx bot";
  if(msg.text.toLowerCase() === welcome) {
    bot.sendMessage(msg.chat.id, "Hello Everyone:)");
  }
});

//when any user says bye
bot.on('text', (msg) => {

  var bye1 = "bye";
  var bye2 = "buh bye";
  if (msg.text.toLowerCase().includes(bye1) || msg.text.toLowerCase().includes(bye2)) {
    bot.sendMessage(msg.chat.id, "Bye " + msg.from.first_name + " :) It was nice knowing you");
  }
});

//when user says excite
bot.on('text', (msg) => {

  var excite1 = "excited";
  var excite2 = "excites";
  var excite3 = "excite";
  if (msg.text.toLowerCase().includes(excite1) || msg.text.toLowerCase().includes(excite2) || msg.text.toLowerCase().includes(excite3)) {
    bot.sendMessage(msg.chat.id, "I am excited too!!");
  }
});


//-------------Functions-------------//

// <--- welcome message --/start --->
bot.on(['/start'], (msg) => msg.reply.text('Welcome to Nyx ' + msg.from.first_name + '!' + ' Over next 3 days, I will give all of you tasks to complete as part of getting initiated to Nocturna.'));

//<--- general help message --/help --->
bot.on(['/help'], (msg) => msg.reply.text(
  '/start -- Get greeted!\n/say -- make the bot say something(e.g /say Black House Swag!)'
));

//<-- implement help for admin -->
bot.on('text', (msg) => {
  var help = "/help";
  if(msg.text.toLowerCase() === help && msg.chat.id === niggaswag) {
    bot.sendMessage(user, "/start -- Get greeted!\n/say -- make the bot say something(e.g /say Black House Swag!)\n\nActivate tasks:\nType task followed by a task number(e.g. @Nyxxbot task1)\n\nConfirmation of activities:\nType Awesome/Nice/Great");
  }
});

//<--- for user to make bot send something -- /say --->
bot.on(/^\/say (.+)$/, (msg, props) => {
  const text = props.match[1];
  return bot.sendMessage(msg.from.id, text, { replyToMessage: msg.message_id });
});

//<--- get time -- /time --->
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

// Get current time
function time() {
  return new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}


//-------------Tasks for users-------------//
/*
1. spin in circles for 20 rounds then put lipstick on someone
2. take a batch photo
3. take a photo with a senior who loves coldplay
4. 30 seconds music video of swalla
5. make any oweek comm member laugh with a pickup line (without joash)
6. take a jump shot everyone must jump in ascending height
7. do spider-man dance from d1 bus stop to food clique
8. take a photo with 5 other people from different faculties from usp
9. drink a weird concoction of drinks
10. replicate stupid wenjie videos
11. find a phallic object in Cinnamon lobby
12. use any foreign word and hold an entire conversation with another house ogl
13. join NoctaBot
14. take a photo with a senior who went to Ultra Music Festival 2017
15. WCP task*/

//get list of Tasks
bot.on('text', (msg) => {
  var tasklist1 = "tasklist";
  var tasklist2 = "taskslist";
  if(msg.text.toLowerCase() ===  tasklist1 || msg.text.toLowerCase() ===  tasklist2) {
    bot.sendMessage(niggaswag, "1. spin in circles for 20 rounds then put lipstick on someone\n2. take a batch photo\n3. take a photo with a senior who loves coldplay\n4. 30 seconds music video of swalla\n5. make any oweek comm member laugh with a pickup line (without joash)\n6. take a jump shot everyone must jump in ascending height\n7. do spider-man dance from d1 bus stop to food clique\n8. take a photo with 4 other people from different faculties in black house\n9. drink a weird concoction of drinks\n10. replicate stupid wenjie videos\n11. find a phallic object in Cinnamon lobby\n12. use any foreign word and hold an entire conversation with another house ogl\n13.Join NoctaBot\n14.take a photo with a senior who went to Ultra Music Festival 2017\n15.WCP task");
  }
});

//Intro
bot.on('text', (msg) => {
  var task = "tasks intro";
  if(msg.chat.id === niggaswag && msg.text.toLowerCase() ===  task) {
    bot.sendMessage(user, "OWeek has so many talks! I understand it takes a toll on you so throughout the camp so, I will give you some fun things to do! Hope you enjoy them:)");
  }
});


//task 1 -- spin and apply lipstick
bot.on('text', (msg) => {
  var task = "task1";
  if(msg.chat.id === niggaswag && msg.text.toLowerCase() ===  task) {
    bot.sendMessage(user, "Nominate an individual to spin in circles 20 times on the spot and put lipstick on someone!");
  }
});

//task 2 -- take a batch photo
bot.on('text', (msg) => {
  var task = "task2";
  if(msg.chat.id === niggaswag && msg.text.toLowerCase() ===  task) {
    bot.sendMessage(user, "Find a nice spot around here and take a batch photograph");
    bot.sendMessage(user, "Don't forget to send that picture to me! ");
  }
});

//task 3 - take a pic with a senior who went to coldplay
bot.on('text', (msg) => {
  var task = "task3";
  if(msg.chat.id === niggaswag && msg.text.toLowerCase() ===  task) {
    bot.sendMessage(user, "Find a senior who went to coldplay concert");
    bot.sendMessage(user, "Don't forget to send that picture to me! ");
  }
});

//task 4 - take a 30s music video of swalla
bot.on('text', (msg) => {
  var task = "task4";
  if(msg.chat.id === niggaswag && msg.text.toLowerCase() ===  task) {
    bot.sendMessage(user, "Remember this?\nhttps://youtu.be/NGLxoKOvzu4");
    bot.sendMessage(user, "Make a 30s dance video to that song and send it on the group;)");
  }
});

//task 5 - make any oweek comm member laugh
bot.on('text', (msg) => {
  var task = "task5";
  if(msg.chat.id === niggaswag && msg.text.toLowerCase() ===  task) {
    bot.sendMessage(user, "Find an Oweek committee member(NOT JOASH) and make them laugh with an interesting pick up line");

  }
});

//task 6 -- take a jump shot in ascending height
bot.on('text', (msg) => {
  var task = "task6";
  if(msg.chat.id === niggaswag && msg.text.toLowerCase() ===  task) {
    bot.sendMessage(user, "Take a jump shot with at least six people (Arrange yourselves in ascending height");
    bot.sendMessage(user, "Don't forget to share that picture with me!");
  }
});

//task 7 -- do spider-man dance from d1 bus stop to food clique
bot.on('text', (msg) => {
  var task = "task7";
  if(msg.chat.id === niggaswag && msg.text.toLowerCase() ===  task) {
    bot.sendMessage(user, "Do you love peter parker?\nEver wanted to be a superhero?\nDo a spider-man dance from UTown bus-stop to food clique!");
  }
});

//task 8 -- take a photo with 5 other people from different faculties from usp
bot.on('text', (msg) => {
  var task = "task8";
  if(msg.chat.id === niggaswag && msg.text.toLowerCase() ===  task) {
    bot.sendMessage(user, "Find 5 other people from different faculties & snap a pic with them:)\nRemember, no two people can be from the same house!");
    bot.sendMessage(user, "Don't forget to share that picture with me!");
  }
});

//task 9 -- drink a weird concoction of drinks
bot.on('text', (msg) => {
  var task = "task9";
  if(msg.chat.id === niggaswag && msg.text.toLowerCase() ===  task) {
    bot.sendMessage(user, "Thirsty? Approach OGLs for a once-in-a-lifetime drink;)");
  }
});

//task 10 -- replicate stupid wenjie videos
bot.on('text', (msg) => {
  var task = "task10";
  if(msg.chat.id === niggaswag && msg.text.toLowerCase() ===  task) {
    bot.sendMessage(user, "Do you know the current MC President? Pick one of his crazy moves and replicate it!");
  }
});

//task 11 -- find a phallic object in Cinnamon lobby
bot.on('text', (msg) => {
  var task = "task11";
  if(msg.chat.id === niggaswag && msg.text.toLowerCase() ===  task) {
    bot.sendMessage(user, "Find a phallic object in Cinnamon lobby;)");
  }
});

//task 12 -- use any foreign word and hold an entire conversation with another house ogl
bot.on('text', (msg) => {
  var task = "task12";
  if(msg.chat.id === niggaswag && msg.text.toLowerCase() ===  task) {
    bot.sendMessage(user, "Using a word from a foreign language, hold a 3 minute conversation with an OGL from another house");
  }
});

//task 13 -- join NoctaBot
bot.on('text', (msg) => {
  var task = "task13";
  if(msg.chat.id === niggaswag && msg.text.toLowerCase() ===  task) {
    bot.sendMessage(user, "Welcome to Nocturna! I hope you find a home here at Cinnamon college. Follow @Noctabot on telegram & be part of our family!")
  }
});

//task 14 - take a pic with a senior who has been to
bot.on('text', (msg) => {
  var task = "task14";
  if(msg.chat.id === niggaswag && msg.text.toLowerCase() ===  task) {
    bot.sendMessage(user, "Find a senior who went to Ultra Music Festival 2017!");
    bot.sendMessage(user, "Don't forget to send that picture to me! ");
  }
});

//task 15 -- WCP task
bot.on('text', (msg) => {
  var task = "task15";
  if(msg.chat.id === niggaswag && msg.text.toLowerCase() ===  task) {
    bot.sendMessage(user, "WCP Surprise task;)")
  }
});

//------------Send users confirmation--------------//
bot.on('text', (msg) => {
  var awesome = "Awesome";
  var great = "great";
  var nice = "nice";
  if(msg.chat.id === niggaswag) {
    if(msg.text.toLowerCase() === awesome || msg.text.toLowerCase() === great || msg.text.toLowerCase() === nice) {
      bot.sendMessage(user, "Yay! Good job:)");
    }
  }

});

//-------------Server side-------------//
bot.start();

var http = require("http");
setTimeout(function() {
  http.get("http://secure-oasis-14648.herokuapp.com");
}, 18000000); // every 5 minutes (300000)

const server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end();
});

server.listen(process.env.PORT, '0.0.0.0');
