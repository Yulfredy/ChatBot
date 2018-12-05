## Chat Base Watson Assistant

Este es un ejemplo para realizar pruebas de las conversaciones.

Ingrese sus datos en las siguientes lineas en el archivo app.js :

```
var conversation = new watson.AssistantV1({
    iam_apikey = 'Su apikey',
    url = 'Su URL',
    version: '2018-02-16'
});

var workspace = 'Su Workspace';
```
Estos datos estan en la plataforma de Bluemix.
(iam_apikey y url ) son las credenciales del servicio
(workspace ) se encuentra en el skill
