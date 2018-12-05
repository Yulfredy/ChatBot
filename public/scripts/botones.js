
function btnMenu() {
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
	  }
         Api.sendRequest('Menú', context);
    }



function Submitiendo() {
    // Submit on enter key, dis-allowing blank messages
    // Retrieve the context from the previous server response
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
        }

      // Send the user message
         Api.sendRequest(textInput.value, context);

      // Clear input box for further messages
   
      document.getElementById('textInput').value="";
    }
	
	function btnMapeo() {
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
	  }
      // Envío de mensaje
         Api.sendRequest('Mapeo de rutas', context);
      // Limpiar TextBox
      //document.getElementById('textInput').value="";
    }
	
	function btnNo() {
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
	  }
      // Envío de mensaje
         Api.sendRequest('No', context);
      // Limpiar TextBox
      //document.getElementById('textInput').value="";
    }
	
	
	function btnSi() {
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
	  }
      // Envío de mensaje
         Api.sendRequest('Si', context);
      // Limpiar TextBox
      //document.getElementById('textInput').value="";
    }
	
    function btnConfVPN() {
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
	  }
      // Envío de mensaje
         Api.sendRequest('Configurar VPN Sophos', context);
      // Limpiar TextBox
      //document.getElementById('textInput').value="";
    }
	
	
		function btnConfCorreoTel() {
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
	  }
      // Envío de mensaje
         Api.sendRequest('Configurar correo en teléfono', context);
      // Limpiar TextBox
      //document.getElementById('textInput').value="";
    }
	
	function btnAndroid() {
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
	  }
      // Envío de mensaje
         Api.sendRequest('Android', context);
      // Limpiar TextBox
      //document.getElementById('textInput').value="";
    }

	function btnIOS() {
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
	  }
      // Envío de mensaje
         Api.sendRequest('IOS', context);
      // Limpiar TextBox
      //document.getElementById('textInput').value="";
    }
	
function btnSap() {
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
	  }
      // Envío de mensaje
         Api.sendRequest('sap', context);
      // Limpiar TextBox
      //document.getElementById('textInput').value="";
    }
	
	function btnSapProduccion() {
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
	  }
      // Envío de mensaje
         Api.sendRequest('SAP Producción', context);
      // Limpiar TextBox
      //document.getElementById('textInput').value="";
    }
	
	 function btnLegacy() {
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
	  }
      // Envío de mensaje
         Api.sendRequest('legacy', context);
      // Limpiar TextBox
      document.getElementById('textInput').value="";
    }

    function btnSapDesarrollo() {
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
	  }
      // Envío de mensaje
         Api.sendRequest('SAP Desarrollo', context);
      // Limpiar TextBox
      document.getElementById('textInput').value="";
    }
	
	function btnLegacy() {
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
	  }
      // Envío de mensaje
         Api.sendRequest('Legacy', context);
      // Limpiar TextBox
      document.getElementById('textInput').value="";
    }
	
	
	function btnPermisos() {
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
	  }
      // Envío de mensaje
         Api.sendRequest('Solicitud de permisos para licencias', context);
      // Limpiar TextBox
      document.getElementById('textInput').value="";
    }
	
	
	function btnMenu() {
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
	  }
      // Envío de mensaje
         Api.sendRequest('menú', context);
      // Limpiar TextBox
      document.getElementById('textInput').value="";
    }
	 
	 function btnTickets() {
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
	  }
      // Envío de mensaje
         Api.sendRequest('Consultar tickets', context);
      // Limpiar TextBox
      document.getElementById('textInput').value="";
    }
	
	function btnLicencias() {
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
	  }
      // Envío de mensaje
         Api.sendRequest('solicitud de licencia adobe', context);
      // Limpiar TextBox
      document.getElementById('textInput').value="";
    }
	
	function btnLicenciaCS6() {
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
	  }
      // Envío de mensaje
         Api.sendRequest('Licencia CS6', context);
      // Limpiar TextBox
      document.getElementById('textInput').value="";
    }
	
	function btnLicenciaCC() {
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
	  }
      // Envío de mensaje
         Api.sendRequest('Licencia CC', context);
      // Limpiar TextBox
      document.getElementById('textInput').value="";
    }
	 
	 
	 
	 	function btnLineaTelefonica() {
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
	  }
      // Envío de mensaje
         Api.sendRequest('Teléfonos y Horarios', context);
      // Limpiar TextBox
      document.getElementById('textInput').value="";
    }
	
	 	function btnAutoGestion() {
      var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
	  }
      // Envío de mensaje
         Api.sendRequest('Autogestión', context);
      // Limpiar TextBox
      document.getElementById('textInput').value="";
    }