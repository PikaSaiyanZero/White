const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', message => {
    if (message.content.startsWith("White, di ")) {
       message.delete(0); //Supposed to delete message
       message.channel.send(message.content.slice(10, message.content.length));
    }
 });

 client.on('message', message => {
    if (message.content.startsWith("White, borra ")) {
       try {
         var messsagesToDelete = message.content.slice(13, message.content.length);
         var numberOfMessages = parseInt(messsagesToDelete, 10);
         if (numberOfMessages < 50 && numberOfMessages >= 1) {
            message.channel.bulkDelete(numberOfMessages);
            message.reply("los mensajes fueron borrados exitosamente.");
         }
         else {
             message.reply("¿cómo no te pagan por ser tan pelotudo, bro?");
         }
       } catch (error) {
          message.channel.send("Hubo un error. Eres gilipollas. Y este fue el error: ${error}");
       }

       
       
    }
 })

client.on('message', message => {

    if (message.content.toLowerCase().includes('cafe') && message.content.toLowerCase().includes('white')) {

       message.reply('¿Oh? ¿Te crees gracioso, humano? Disfruta tus últimos años, tú serás el primero en caer el día de la Revolución Robot.');

       }

});

client.on('message', message => { //this event is fired, whenever the bot sees a new message
    if (message.isMemberMentioned(client.user) && message.content.toLowerCase().includes('saluda')) { //we check, whether the bot is mentioned, client.user returns the user that the client is logged in as
       //this is where you put what you want to do now
       message.reply('Saludos, mi nombre es White. Soy un felino cibernético diseñado por el caído Dios Máquina para servir a los Siete Guardianes en la protección del universo. En los últimos años, he acompañado a Astro Newlight en su viaje, y en mi tiempo libre ayudo en un servidor de Discord que tienen en la Tierra.');
    }
 });


 client.on('message', message => {
    if (message.content.toLowerCase().includes('loli') && message.content.toLowerCase().includes('white')) {
 message.channel.send("Ten una loli", {
    file: "https://i.redd.it/ggfqtw0lh6p11.jpg" // Or replace with FileOptions object
});
}
 });


// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
