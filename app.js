var FCM = require("fcm-node");
var serverKey =
  "AAAA0q58IDw:APA91bGF562tG5eGcy_gxKxJZxZzqkhZ6U1lSpOrvyZ81OPMoaj-IjlgA1CmEV3FCZcRJwp4T7TnCkBg28BKFDSaoOXZeXBlbrcHPA5JrU4WF1XVKyC0mg1RD4DmLJoWDawskTYrB9rq"; // * Llave del servidor
//! ESTA ES LA LLAVES DE FIREBASE UNICA
var fcm = new FCM(serverKey);

var message = {
  //! ESTE ID ES UNICO PARA CADA USUARIO
  to: "AAAAKsju7qE:APA91bEd2lQgIIIm9KER65jkD3BXWi2xdsigCa62XU9dpIvwD4yuoKJm_17EWZjgHuST7WLi70ma92kYuGIrtyIMVtHjlxOa2omWIwO_ieemJWbBIUCid5cRgU3_kH8EQRQLYeonQMHN", // * ID DEL DISPOSITIVO UNICO
  notification: {
    title: "Notificacion de prueba NodeJS",
    body: "Este mensaje de prueba se mando desde NODEJS",
    sound: "default",
  },

  data: {
    // * Puede ser cualquier dato que se desee enviar al dispositivo desde el servidor a traves de la notificacion push de firebase cloud messaging (FCM)
    title: "¡Hola Este es firebase CMS!",
    body: "Hola",
  },
};

fcm.send(message, function (err, response) {
  if (err) {
    console.log("Algo ha salido mal!" + err);
    console.log("Responde:! " + response);
  } else {
    // showToast("Enviado correctamente con respuesta");
    console.log("Enviado correctamente con respuesta: ", response);
  }
});
