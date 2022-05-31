var FCM = require("fcm-node");
var serverKey =
  "AAAAM1P2X3U:APA91bFIkr2b1ECU_3UOQamRT4mIJDdZis6-MjtmDHtTYlvtg3ICzq1ZAvaBoyIUEbsO9cqRpP9IFJmG50GboHnD0MzJltBiu90RgovEOiiSm_WybUVzcQDQywUQ2_kfkZKM7M5NnB0M"; // * Llave del servidor
//! ESTA ES LA LLAVES DE FIREBASE UNICA
var fcm = new FCM(serverKey);

var message = {
  //! ESTE ID ES UNICO PARA CADA USUARIO
  to: "eKUZxx09RAysz6i5CDvq0U:APA91bFjIQRg2aTtvmGAvkJcf12ANUm2tyMXi_iHw_uHVOeVVAzsEn-_l7wkgCJhJngZ0QtXynAvSU1cjPW_71IVsEQBxoLe7U88pQvUCjgKsDbbFEDx5ClzTbLFwQmSIaJHRMpN0YFl", // * ID DEL DISPOSITIVO UNICO
  notification: {
    title: "Notificacion de prueba NodeJS",
    body: "Mensaje de prueba mandado desde NODEJS. Para mi Mota",
    sound: "default",
  },

  data: {
    // * Puede ser cualquier dato que se desee enviar al dispositivo desde el servidor a traves de la notificacion push de firebase cloud messaging (FCM)
    title: "¡Notify firebase Server!",
    body: "Hola mensaje de servidor",
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
