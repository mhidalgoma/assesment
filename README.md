# Prueba de código para Junior Developer

Para evaluar tus habilidades técnicas, te pedimos que desarrolles dos artefactos de software:
**un frontend y un backend**.

## Front end

Para el frontend, necesitamos que diseñes un **formulario** que envíe una solicitud POST a la
API. El formulario **debe incluir** los siguientes campos:

- Nombre completo (obligatorio, con más de 3 caracteres)
- Correo electrónico (obligatorio, con validación sencilla de email)
- Teléfono (opcional, solo números y sin tener en cuenta los prefijos del país)
- Mensaje (obligatorio, con más de 10 caracteres)

Además, es importante que valides los campos del formulario antes de enviar los datos a la
API.

## Back end

Para el backend, necesitamos que desarrolles una API con un único endpoint. Este endpoint
debe ser un POST que reciba la información introducida en el formulario descrito
anteriormente. La API debe responder en formato JSON y contener al menos los siguientes
campos:

- Nombre completo
- Correo electrónico
- Teléfono
- Mensaje

      {
        "name": "Ana Pérez",
        "email": "ana.perez@example.com",
        "phone": "123456789",
        "message": "Hola, estoy interesada en vuestros servicios.
        ¿Podéis contactarme para más información?"
      }

## Extras

1. Puedes estilizar el formulario utilizando los **colores y la tipografía de mediasmart**
   (https://www.mediasmart.io/contact-us).
2. Te damos la opción de agregar un **campo dinámico en el formulario**. Este campo
   consiste en un checkbox que permita al usuario seleccionar si desea incluir el
   tratamiento que se le dará al enviar el formulario. Si el checkbox está activo, se debe
   mostrar un menú desplegable (select) con dos opciones: ["Sr.", "Sra."]. La información
   seleccionada en este menú desplegable se enviará junto con el resto de los campos del
   formulario a la API. Si el checkbox está desactivado, el menú desplegable no se
   mostrará ni se tendrá en cuenta para el envío de campos de la API.

## Notas finales

- Tienes total libertad para decidir el nombre de los campos en las peticiones y la URL del
  endpoint.
- Valoramos el uso de buenas prácticas de programación.
- Recomendamos utilizar NextJS para unificar la implementación del lado backend y el
  frontend, pero eres libre de utilizar otra opción. Puedes escoger las librerías y
  herramientas que consideres pertinentes tanto para el desarrollo como la maquetación.

## Entrega

> El código de esta prueba deberá subirse a un **repositorio de github** y mandarnos enlace de ese
> repo a **matrix@mediasmart.io**
