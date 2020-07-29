const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NzM3ODQ3OTQ4MjU5NDkxOTMw.XyDUcw.xdE-Gtk_waKHaXJ6dqMgWTW0hlM);
