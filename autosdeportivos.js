const modelosAutos = [
    {
      nombre: "Chevrolet Camaro ZL1",
      precio: 180000,
      opciones: {
        seguridad: [
          "Sistema de frenos ABS",
          "Control de tracción",
          "Control de estabilidad"
        ],
        tapizados: ["Cuero", "Pana", "Terciopelo sintetico"]
      }
    },
    {
      nombre: "Ford Mustang Shelby GT500",
      precio: 250000,
      opciones: {
        seguridad: ["Control de estabilidad", "Airbags frontales y laterales", "Control de Fuerza de Frenado"],
        tapizados: ["Cuero", "Pana", "Terciopelo", "Chenille"]
      }
    },
    {
      nombre: "Volkswagen Phaeton W12",
      precio: 115000,
      opciones: {
        seguridad: ["Airbags frontales y laterales", "Asistente de Estacionamiento", "Control de Tracción Independeinte"],
        tapizados: ["Cuero", "Pana", "Sintetico"]
      }
    },
      {
        nombre: "Toyota 86-GTR",
        precio: 160000,
        opciones: {
          seguridad: ["Airbags frontales y laterales", "Asistente de Estacionamiento", "Control de Etabilidad"],
          tapizados: ["Cuero", "Pana", "Sintetico"]
        }
      },
      {
        nombre: "Nissan GT-RXZ",
        precio: 155000,
        opciones: {
          seguridad: ["Airbags frontales y laterales", "Asistente de Estacionamiento", "Dirección Electronica Asistida con AI"],
          tapizados: ["Cuero", "Pana","Chenille", "Sintetico"]
        }
      }, 
      {
        nombre: "Hyundai Génesis G-90",
        precio: 175000,
        opciones: {
          seguridad: ["Airbags frontales y laterales", "Asistente de Estacionamiento" , "Control de Etabilidad"],
          tapizados: ["Cuero", "Pana", "Sintetico", "Terciopelo"]
        }
      }
  ];
  //Elegimos colores disponibles
  const colores = [
    "Rojo",
    "Azul",
    "Blanco",
    "Beige",
    "Bordó",
    "Gris",
    "Gris oscuro"
  ];
  

  //Elegimos un método de pago
  const metodosDePago = [
    {
      id: 1,
      nombre: "Efectivo",
      descripcion: "No se sumarán cargos por impuestos ni intereses (Es lo más conveniente)"
    },
    {
      id: 2,
      nombre: "Transferencia Bancaria",
      descripcion: "Se sumará el costo del IVA"
    },
    {
      id: 3,
      nombre: "Plan de financiación",
      descripcion:
        "Se sumará el costo del IVA y se incrementará el valor según las cuotas elegidas"
    }
  ];
  
  // De esta forma se solicita una opción válida al usuario. De ser inválida la opción el programa no avanza.
  function solicitarOpcion(mensaje, opciones) {
    let opcion = prompt(mensaje);
    while (!opcion || !opciones.find(o => o.id == parseInt(opcion))) {
      opcion = prompt("Opción inválida. No me hagas perder el tiempo!!. " + mensaje);  
    }
    return parseInt(opcion);
  }
  
  //con esta función podemos ver en consola las opciones seleccionadas
  function mostrarOpcionesSeleccionadas(opcionesSeleccionadas) {
    console.log("Opciones seleccionadas:");
    opcionesSeleccionadas.forEach((opcion, index) => {
      console.log(`Opción ${index + 1}:`);
      console.log(`Modelo: ${opcion.modelo.nombre}`);
      console.log(`Color: ${opcion.color}`);
      console.log(`Tapizado: ${opcion.tapizado}`);
      console.log(`Seguridad: ${opcion.seguridad}`);
      console.log(`Método de pago: ${opcion.metodoPago.nombre}`);
      console.log(`Pequeño detalle del Método de pago: ${opcion.metodoPago.descripcion}`);
      console.log("----------------------------------------");
    });
  }
  
  //función principal
  function programaCompraAutos() {
    const opcionesSeleccionadas = [];
  
    let ingresarNombre = prompt("Bienvenido a Concesionaria LAZARO B. Ingresa tu Nombre");
     while (ingresarNombre.trim() === "") {
      ingresarNombre = prompt("Por favor, ingresa tu Nombre para seguir operando");
      return(ingresarNombre);
    }
  
    let ingresarApellido = prompt("Ahora ingresa tu Apellido");
    while (ingresarApellido.trim() === "") {
      ingresarApellido = prompt("Es necesario que ingreses tu Apellido");
    }

    alert(`Hola ${ingresarNombre} ${ingresarApellido}. Ahora pasemos a elegir tu próximo auto.`);
  
    let preferencia = solicitarOpcion(
      "Prefieres un auto:\n1. Usado\n2. Nuevo\n3. Me da lo Mismo",
      [
        { id: 1, nombre: "Usado" },
        { id: 2, nombre: "Nuevo" },
        { id: 3, nombre: "Me da lo Mismo" }
      ]
    );
  
    alert(`Has elegido la opción de ${preferencia === 1 ? "Usado" : preferencia === 2 ? "Nuevo" : "Me da lo Mismo (Ya que sabes que lo nuestro es garantía)"}.`);
  
    let modeloSeleccionado = solicitarOpcion(
      "Selecciona el auto de tu preferencia:\n" +
        modelosAutos.map((modelo, index) => `${index + 1}. ${modelo.nombre}`).join("\n"),
      modelosAutos.map((modelo, index) => ({ id: index + 1, nombre: modelo.nombre }))
    );
    let modelo = modelosAutos[modeloSeleccionado - 1];
  
    let colorSeleccionado = solicitarOpcion(
      "Selecciona el color de tu preferencia:\n" +
        colores.map((color, index) => `${index + 1}. ${color}`).join("\n"),
      colores.map((color, index) => ({ id: index + 1, nombre: color }))
    );
    let color = colores[colorSeleccionado - 1];
  
    let tapizadoSeleccionado = solicitarOpcion(
      "Selecciona el tapizado de tu preferencia:\n" +
        modelo.opciones.tapizados.map((tapizado, index) => `${index + 1}. ${tapizado}`).join("\n"),
      modelo.opciones.tapizados.map((tapizado, index) => ({ id: index + 1, nombre: tapizado }))
    );
    let tapizado = modelo.opciones.tapizados[tapizadoSeleccionado - 1];
  
    let seguridadSeleccionada = [];
    modelo.opciones.seguridad.forEach((opcion, index) => {
      const respuesta = prompt(`¿Deseas agregar la opción de seguridad "${opcion}"? (s/n)`);
      if (respuesta.toLowerCase() === "s") {
        seguridadSeleccionada.push(opcion);
      }
    });
    let metodoPagoSeleccionado = solicitarOpcion(
      "Selecciona el método de pago de tu nueva joya:\n" +
        metodosDePago.map(
          metodo => `${metodo.id} ${metodo.nombre} - ${metodo.descripcion}`
        ).join("\n"),
      metodosDePago
    );
    let metodoPago = metodosDePago.find(metodo => metodo.id === metodoPagoSeleccionado);
  
    opcionesSeleccionadas.push({
      modelo,
      color,
      tapizado,
      seguridad: seguridadSeleccionada,
      metodoPago
    });
  
    let seguirAgregando = prompt("¿Deseas agregar otro modelo de auto? (s/n)").toLowerCase() === "s";
    while (seguirAgregando) {
      modeloSeleccionado = solicitarOpcion(
        "Selecciona el auto de tu preferencia:\n" +
          modelosAutos.map((modelo, index) => `${index + 1}. ${modelo.nombre}`).join("\n"),
        modelosAutos.map((modelo, index) => ({ id: index + 1, nombre: modelo.nombre }))
      );
      modelo = modelosAutos[modeloSeleccionado - 1];
  
      colorSeleccionado = solicitarOpcion(
        "Selecciona el color de tu preferencia:\n" +
          colores.map((color, index) => `${index + 1}. ${color}`).join("\n"),
        colores.map((color, index) => ({ id: index + 1, nombre: color }))
      );
      color = colores[colorSeleccionado - 1];
  
      tapizadoSeleccionado = solicitarOpcion(
        "Selecciona el tapizado de tu preferencia:\n" +
          modelo.opciones.tapizados.map((tapizado, index) => `${index + 1}. ${tapizado}`).join("\n"),
        modelo.opciones.tapizados.map((tapizado, index) => ({ id: index + 1, nombre: tapizado }))
      );
      tapizado = modelo.opciones.tapizados[tapizadoSeleccionado - 1];
  
      seguridadSeleccionada = [];
      modelo.opciones.seguridad.forEach((opcion, index) => {
        const respuesta = prompt(`¿Deseas agregar la opción de seguridad "${opcion}"? (s/n)`);
        if (respuesta.toLowerCase() === "s") {
          seguridadSeleccionada.push(opcion);
        }
      });
      metodoPagoSeleccionado = solicitarOpcion(
        "Selecciona el método de pago de tu nueva joya:\n" +
          metodosDePago.map(
            metodo => `${metodo.id} ${metodo.nombre} - ${metodo.descripcion}`
          ).join("\n"),
        metodosDePago
      );
      metodoPago = metodosDePago.find(metodo => metodo.id === metodoPagoSeleccionado);
  
      opcionesSeleccionadas.push({
        modelo,
        color,
        tapizado,
        seguridad: seguridadSeleccionada,
        metodoPago
      });
  
      seguirAgregando = prompt("¿Deseas agregar otro modelo de auto a tus compras? (s/n)").toLowerCase() === "s";
    }
  
    mostrarOpcionesSeleccionadas(opcionesSeleccionadas);//Para mostrar conjunto de opciones por consola
    mostrarOpcionesSeleccionadasB(opcionesSeleccionadas);//Para mostrar conjunto de opciones escritos en el html (esto modifica el mismo despues de ejecutarse)

    // Acá va el saludo final sólo con el nombre para hacerlo mas informal
    alert(`Muchas gracias por tu compra ${ingresarNombre}. ¡Fue un placer hacer negocios contigo!.`);
  }
  
  programaCompraAutos();
 function mostrarOpcionesSeleccionadasB(opcionesSeleccionadas) {
    document.write("<hr>"); // Con hr le agrego una línea sólo para separar y organizar el contenido
    document.write("<h2>Opciones seleccionadas para esta compra:</h2>");
opcionesSeleccionadas.forEach((opcion, index) => {
      document.write(`<h3>Opción ${index + 1}:</h3>`);
      document.write(`<p>Modelo: ${opcion.modelo.nombre}</p>`);
      document.write(`<p>Color: ${opcion.color}</p>`);
      document.write(`<p>Tapizado: ${opcion.tapizado}</p>`);
      document.write(`<p>Seguridad: ${opcion.seguridad.join(", ")}</p>`);
      document.write(`<p>Método de pago: ${opcion.metodoPago.nombre}</p>`);
      document.write(`<p>Pequeño detalle del Método de pago: ${opcion.metodoPago.descripcion}</p>`);
      document.write("<hr>"); 
    });
  };
   
