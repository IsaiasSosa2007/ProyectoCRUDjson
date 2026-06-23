// Arrays con datos de prueba aleatorios
const dnis = ["12345678", "87654321", "45678912", "98765432"];
const nombres = ["Juan Carlos", "María Belén", "Alejandro", "Sofía Ana"];
const apellidos = ["Pérez", "García", "Rodríguez", "Fernández"];
const direcciones = [
  "Av. Siempreviva 742",
  "Calle Falsa 123",
  "Ruta 9 Km 45",
  "Paseo de la Plaza 456",
];
const razonesSociales = [
  "Tech Solutions S.A.",
  "Almacén Don Tito SRL",
  "Logística Express",
  "Cosme Fulanito Enterprise",
];
const rucs = ["20123456789", "30876543210", "27456789123", "23987654321"];

// Función utilitaria para obtener un elemento al azar
const obtenerAzar = (array) => array[Math.floor(Math.random() * array.length)];

// Rellenar los inputs en el HTML
document.getElementById("clienteInDni").value = obtenerAzar(dnis);
document.getElementById("clienteInNombre").value = obtenerAzar(nombres);
document.getElementById("clienteInApellido").value = obtenerAzar(apellidos);
document.getElementById("clienteInDireccion").value = obtenerAzar(direcciones);
document.getElementById("clienteInRS").value = obtenerAzar(razonesSociales);
document.getElementById("clienteInRuc").value = obtenerAzar(rucs);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////funcion del boton//////////////////////////////////////////////////////////

//<!--*******************************************************************************************************-->
//<!--******************************************ARRAYS CON DIAS Y MESES*************************************************************-->
const diasDelAnio = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const mesesDelAnio = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

//<!--*******************************************************************************************************-->
//<!--*****************************************DECLARACION ARRAYS DE DATOS A MOSTRAR**************************************************************-->
//array con los datos del cliente
let cliente = [];
let empleado = [];
//array con los datos que se terminaran usando para mostrar el boleto
let boletoFinal = [];
//array para guardar los datos del boleto, cliente y empleado, asi poder agregarle cosas y no tener problemas cpn el array final
let datosBoleto = [];

//se establece un contador que aumenta cada vez que se ingresa los datos del boleto o cliente
let i = 0;
let numeroBoleto = 0;

//se establece la fecha actual para usarla segun se requiera
let fechaActual = new Date();

//se declara la fecha de emision como la fecha actual por una cuestion de comodidad
let fechaEmision = fechaActual;

//la fecha del viaje es fecha actual+ x numero
let fechaViaje = fechaActual;
fechaViaje.setDate(fechaActual.getDate() + 3);

//se establece la hora del viaje a un numero x de forma provisoria
fechaViaje.setHours(14);
console.log(fechaViaje);

//<!--*******************************************************************************************************-->
//<!--**************************************FUNCION BOTON CLIENTE*****************************************************************-->
document
  .getElementById("btnIngresarDatosCliente")
  .addEventListener("click", () => {
    //Se declara una variable con el valor de los input.
    //se hace dentro de la funcion para que cambie cada vez que se presiona el boton(se puedan guardar mas de un dato)
    let dni = document.getElementById("clienteInDni").value;
    let nombre = document.getElementById("clienteInNombre").value;
    let apellido = document.getElementById("clienteInApellido").value;
    let direccion = document.getElementById("clienteInDireccion").value;
    let razonSocial = document.getElementById("clienteInRS").value;
    let ruc = document.getElementById("clienteInRuc").value;

    let destino = "cordoba";
    let valor = 3000;

    if (cliente.length == 0) {
      let listaClientes = document.getElementById("listaClientes");
      let option = document.createElement("option");
      option.value = `${nombre} ${apellido}`;
      option.textContent = `${nombre} ${apellido}`;
      listaClientes.appendChild(option);
    } else if (
      `${nombre.toUpperCase()} ${apellido.toUpperCase()}` !=
      `${cliente[i - 1].nombres.toUpperCase()} ${cliente[i - 1].apellidos.toUpperCase()}`
    ) {
      let listaClientes = document.getElementById("listaClientes");
      let option = document.createElement("option");
      option.value = `${nombre} ${apellido}`;
      option.textContent = `${nombre} ${apellido}`;
      listaClientes.appendChild(option);
    } else {
      console.log("Cliente ingresado es el mismo que el anterior");
    }

    //Ingresa objeto al array cliente
    cliente.push({
      dni: dni,
      nombres: nombre,
      apellidos: apellido,
      direccion: direccion,
      razonSocial: razonSocial,
      ruc: ruc,
    });

    //se da un numero aleatorio a la variable asiento
    asiento = Math.floor(Math.random() * 100 + 1);

    //Ingresa objeto al array datosBoleto
    datosBoleto.push({
      numeroBoleto: i,
      fechaEmision: fechaActual,
      fechaViaje: `${diasDelAnio[fechaViaje.getDay()]}, ${fechaViaje.getDate()} ${mesesDelAnio[fechaViaje.getMonth]} ${fechaViaje.getFullYear}`,
      horaViaje: fechaViaje.getHours(),
      numeroAsiento: asiento,
      origen: "Buenos Aires, avellaneda",
      destino: destino,
      valor: valor,
      datosPasajero: {
        dni: dni,
        nombres: nombre,
        apellidos: apellido,
        direccion: direccion,
        razonSocial: razonSocial,
        ruc: ruc,
      },
    });
    console.log(cliente);
    console.log(datosBoleto);

    i++;
  });
//<!--*******************************************************************************************************-->
//<!--**********************************FUNCION BOTON BOLETO*********************************************************************-->
// document
//   .getElementById("bntIngresarFechaViaje")
//   .addEventListener("click", () => {});

//<!--*******************************************************************************************************-->
//<!--************************************FUNCION BOTON EMPLEADO*******************************************************************-->
document
  .getElementById("btnIngresarDatosEmpleado")
  .addEventListener("click", () => {
    let empleadoDni = document.getElementById("empleadoInDni").value;
    let empleadoNombre = document.getElementById("empleadoInNombre").value;
    let empleadoApellido = document.getElementById("empleadoInApellido").value;

    empleado.push({
      DNI: empleadoDni,
      nombre: empleadoNombre,
      apellido: empleadoApellido,
    });
    console.log(empleado);
  });
