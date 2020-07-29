const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});
client.on('message', message => {
    //members
    var barryid = '450834805072855040';   var barry = message.guild.members.get(barryid);
    var charlid = '464251263257935872';   var charlie = message.guild.members.get(charlid);
    var palid = '361013294783528962';     var pal = message.guild.members.get(palid);
    var kerwinid = '450759594751426580';  var kerwin = message.guild.members.get(kerwinid);
    var carpid = '191039112340307968';    var carp = message.guild.members.get(carpid);
    var joeid = '409038055115063297';     var joe = message.guild.members.get(joeid);
    var danid = '94555965663219712';      var dan = message.guild.members.get(danid);
    var kirkid = '450818241430814723';    var kirk = message.guild.members.get(kirkid);
    var lupesid = '450787117358907393';   var lupes = message.guild.members.get(lupesid);
    var malfaid = '451458447511388171';   var malfa = message.guild.members.get(malfaid);
    var frankid = '231616220602826753';   var frank = message.guild.members.get(frankid);
    var pokeid = '365975655608745985';    var poke = message.guild.members.get(pokeid);
    //channels
    var sjrid = '451161188466950146';     var sjr = message.guild.channels.get(sjrid);
    //restriction case
    if (message.author.id === carpid || message.author.id === joeid || message.author.id === danid ||
        message.author.id === kirkid || message.author.id === lupesid || message.author.id === malfaid ||
        message.author.id === frankid || message.author.id === pokeid) {return;}
    /*FOLLOW THIS TEMPLATE
    if (message.content.toLowerCase() === '<trigger>')
       {message.channel.send('<response>');return;}
     */
    if (message.content.toLowerCase() === 'ring ring') 
       {message.channel.send('You have a bad connection');return;}
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
       {setTimeout(function(){message.channel.send('KRUSTY');},500);}
    if (message.author.id === "450834805072855040" && message.content.toLowerCase() === 'krab')
       {setTimeout(function(){message.channel.send('PIZZA');},500);}
    if (message.author.id === "450834805072855040" && message.content.toLowerCase() === 'is')
       {setTimeout(function(){message.channel.send('THE');},500);}
    if (message.author.id === "450834805072855040" && message.content.toLowerCase() === 'pizza')
       {setTimeout(function(){message.channel.send('FOR');},500);}
    if (message.author.id === "450834805072855040" && message.content.toLowerCase() === 'you')
       {setTimeout(function(){message.channel.send('AND');},500);}
    if (message.content.toLowerCase() === 'your the banana king charlie')
       {message.channel.send('Im the banana king');}
    if (message.content.toLowerCase() === 'oh, look at that')
       {message.channel.send('pink and blue: Z!!!!!!');}
    if (message.content.toLowerCase() === 'i dont see any train, all I see is a giant sneaker')
       {message.channel.send('pink and blue: Its the Choo Choo Shoe, Charlie');return;}
    
    
    

        
        



    
    
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
