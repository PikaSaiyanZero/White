const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'Pika es marica') {

       message.reply('¿Que putas chingadas madres dijiste de Pika, pinche escuincle baboso? para que sepas yo entrené en el gimnasio del señor Julio Cesar Chavez, tengo un record de 50 knockouts, fui al colegio militar de la ciudad de México y un doctorado en ingenieria nuclear, ¿sabes que significa eso? que pudo volar tu pinche cabecita hueca con una bomba que estoy preparando especialmente para tí, y no sólo eso tambien soy experto en el manejo de armas largas y tengo acceso a todo un arsenal de Uzis AK 47 y R-15s, si tan solo hubieras pensado un poquito más y no hubieras abierto el pinche hocico de perro que tienes, no tendrías que rezar por tu vida. En estos momentos estoy rastreando tu direción IP para ubicar tu domicilio, te vas cagar cuando veas un chingo de camionetas esperando en la entrada de tu casa para acriibillarte. Mis hombres estan bien armados y son muy temerarios, saben hacer muy bien su trabajo y están dispuestos a exterminar hasta la ultima puta celúla más pequeña e insignificantede tu puta miserable existencia, escucha bien mis palabras nene, que ya no hay vuelta atrás, vete despidiendo de tu miserable existencia, escucha bien mis palabras nene, que ya no hay vuelta atrás, vete despidiendo de tu miserable vida cabrón, voy a convertir tus ultimas horas de vida en un autentico infierno, estas bien pinche muerto nene, estas bien pinche muerto.');

       }

});

client.on('message', message => {

    if (message.content.toLowerCase().includes('ping')) {

       message.reply('pong');

       }

});

client.on('message', message => { //this event is fired, whenever the bot sees a new message
    if (message.isMemberMentioned(client.user)) { //we check, whether the bot is mentioned, client.user returns the user that the client is logged in as
       //this is where you put what you want to do now
       message.reply('Saludos, mi nombre es White. Soy un felino cibernético diseñado por el caído Dios Máquina para servir a los Siete Guardianes en la protección del universo. En los últimos años, he acompañado a Astro Newlight en su viaje, y en mi tiempo libre ayudo en un servidor de Discord que tienen en la Tierra.');
    }
 });

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
