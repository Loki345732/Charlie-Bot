const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});
client.on('message', message => {
    if (message.author.id === '5090') 
       {message.channel.send('Sorry you do not have access to use me');return}
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
    if (message.content.toLowerCase() === 'it has spoken it has told us the way')
       {message.channel.send('it didnt say anything');return}
    if (message.content.toLowerCase() === 'goodbye charlie, goodbye')
       {message.channel.send('goodbye what, hey whats going on here. Hello who is that...');return}
    if (message.content.toLowerCase() === 'oh no here comes a school of poisonous fugo fish')
       {message.channel.send('oh you gotta watch out for those');return}
    if (message.content.toLowerCase() === 'the vortex is open')
       {message.channel.send('oh God okay what is this');return}
    
    
    if (message.author.id === "450834805072855040" && message.content.toLowerCase() === 'the')
       {message.channel.send('KRUSTY');return}
    if (message.author.id === "450834805072855040" && message.content.toLowerCase() === 'krab')
       {message.channel.send('PIZZA');return}
    if (message.author.id === "450834805072855040" && message.content.toLowerCase() === 'is')
       {message.channel.send('THE');return}
    if (message.author.id === "450834805072855040" && message.content.toLowerCase() === 'pizza')
       {message.channel.send('FOR');return}
    if (message.author.id === "450834805072855040" && message.content.toLowerCase() === 'you')
       {message.channel.send('AND');return}
    
    
    
    

        
        



    
    
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
