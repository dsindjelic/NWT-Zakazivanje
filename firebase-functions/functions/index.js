const functions = require('firebase-functions');

//http primer 1
exports.randomNumber = functions.https.onRequest((request,response)=>{
    const number=Math.round(Math.random()*100)
    response.send(number.toString())

})

//http callable funkcija
exports.sayHello=functions.https.onCall((data,context)=>{
    return 'hello, man!'

})