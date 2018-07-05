const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});
client.on('message', message => {
    if (message.author.bot) {return;}
    if (message.content.toLowerCase() === 'ring ring') 
       {message.channel.send('You have a bad connection');return;}
    /*FOLLOW THIS TEMPLATE
    if (message.content.toLowerCase() === '<trigger>')
       {message.channel.send('<response>');return;}
     */
    

        
        



    
    
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
