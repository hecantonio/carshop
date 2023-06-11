# **DESCRIPCIÓN**

## **Car Shop**
Aplicación para recepción de autos en un taller automotriz. Luego de tomar todos los datos necesarios la aplicación generará una orden de trabajo.

El proceso de recepción de un auto consiste de los siguientes pasos:

1. Datos del cliente:
- En la primera ventana de la aplicación, se debe llenar un formulario para solicitar los datos del cliente.
- Todos los campos son obligatorios, tales como: Nombre del cliente, Email, Número de contacto, Identificación fiscal y tipo de identificación (Cédula, RUC, Pasaporte).

2. Datos del vehículo:
- Una vez completados los datos del cliente, se debe llenar un formulario adicional para solicitar los datos del vehículo.
- Se debe ingresar los datos como: marca, modelo, placa, nivel del tanque de gasolina, y un campo de observaciones donde se detallará abolladuras, rayones o cualquier dato relevante sobre el estado exterior del vehículo.

3. Selección de servicios:
- Después de ingresar los datos del vehículo, se presentará una lista de servicios disponibles que se pueden realizar en el taller automotriz.
- Tiene la posibilidad de seleccionar uno o varios de los servicios que el cliente desea realizar en su vehículo.

4. Orden de trabajo:
- Se visualizará toda la información ingresada para mostrarle al cliente y solicitar su aprobación final.
- Se indicará una fecha y hora estimada de entrega.

### **NOTA:** Se agrega una opción para cambiar entre tema claro y oscuro en la aplicación.

# **DESARROLLO**
* Al descargar el proyecto se ejecutar el comando `npm install`.
* Se utilizó la libreria `sweetalert2` para mostrar los mensajes en la aplicación.
* Se utilizó `bootstrap` para el diseño del CSS de las pantallas.
* Para correr el proyecto utilizar el comando `npm run start`.


# **DESPLIEGUE**
Los pasos para desplegar la aplicación en AWS S3 son las siguientes:
1. Ejecutar el comando `npm run build`
2. Ir al sitio de [AWS](https://aws.amazon.com/es/) 
3. Buscar el servicio S3

