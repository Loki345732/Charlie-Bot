const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});
client.on('message', message => {
    if (message.author.id === '464251263257935872') {return;}
    if (message.content.toLowerCase() === 'ring ring') 
       {message.channel.send('You have a bad connection');return;}
    /*FOLLOW THIS TEMPLATE
    if (message.content.toLowerCase() === '<trigger>')
       {message.channel.send('<response>');return;}
     */
    if (message.content.toLowerCase() === 'oh my god')
       {message.channel.send('STOP STOP IT, I dont care about each and everyone of the sea creatures');return;}
    if (message.content.toLowerCase() === "we gotta be sneaky charlie")
       {message.channel.send('Yeah theres no way my legs can do that');return}
    
                         
    

        
        



    
    
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
