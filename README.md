# Proyecto MERN 6

Hola 👋🏽 en este proyecto se encuentra la información para crear un servidor en Express, pero en esta ocasión, con modelos de datos relacionados entre sí.

El proyecto, tiene una temática de mascotas se verá información de Cuidadores, Perritos y Gatitos. Los modelos de datos de MongoDB es un objeto, con las siguientes claves: 

Para Gatitos y Perritos:
```javascript
const document = {
    _id: "id_de_mongoDB",
    name: "nombre_de_la_mascota",
    race: "raza_de_la_mascota",
    color: "color_del_pelaje_de_la_mascota",
    age: "edad_de_la_mascota",
    responsiblePerson: "persona_responsable_de_la_mascota"
}
```

Para Cuidadores:
```javascript
const document = {
    _id: "id_de_mongoDB",
    name: "nombre_del_cuidador",
    surname: "apellido_del_cuidador",
    avatar: "imagen_del_cuidador",
    age: "edad_del_cuidador",
    pets: {
        puppies: ["perritos_a_cargo"],
        kittens: ["gatitos_a_cargo"]
    }
}
```

## Endpoints:

https://localhost:4001/api/v1

### MODELO GATITOS:
https://localhost:4001/api/v1/kittens 

| HTTP Request | Endpoint      | Descripción                           |
|--------------|---------------|---------------------------------------|
| POST         | /reload       | Para registrar datos predeterminados. |
| GET          | /             | Todos los gatitos registrados.        |
| GET          | /:id          | Gatito por su id.                     |
| POST         | /             | Crear un nuevo gatito.                |
| PUT          | /:id          | Editar un gatito.                     |
| DELETE       | /:id          | Borrar un gatito.                     |

### MODELO PERRITOS:
https://localhost:4001/api/v1/puppies 

| HTTP Request | Endpoint      | Descripción                           |
|--------------|---------------|---------------------------------------|
| POST         | /reload       | Para registrar datos predeterminados. |
| GET          | /             | Todos los perritos registrados.       |
| GET          | /:id          | Perrito por su id.                    |
| POST         | /             | Crear un nuevo perrito.               |
| PUT          | /:id          | Editar un perrito.                    |
| DELETE       | /:id          | Borrar un perrito.                    |

### MODELO CUIDADORES:
https://localhost:4001/api/v1/responsiblepersons 

| HTTP Request | Endpoint      | Descripción                           |
|--------------|---------------|---------------------------------------|
| POST         | /reload       | Para registrar datos predeterminados. |
| GET          | /             | Todos los cuidadores registrados.     |
| GET          | /:id          | Cuidador por su id.                   |
| POST         | /             | Crear un nuevo cuidador.              |
| PUT          | /:id          | Editar un cuidador.                   |
| PUT          | /pet/:id      | Agregar mascotas al cuidador*         |
| DELETE       | /:id          | Borrar un cuidador.                   |

**Leyenda**:

*Al utilizar este endpoint para agregar una o varias mascotas, garantizas que no se dupliquen en el modelo de cuidadores. Esto proporciona una forma más eficaz de registrar y editar el modelo.

### MODELOS DE DATOS RELACIONADOS:
https://localhost:4001/api/v1/relatedmodels

| HTTP Request | Endpoint               | Descripción                           |
|--------------|------------------------|---------------------------------------|
| GET          | /responsibleperson     | Todos los cuidadores con las mascotas*|
| GET          | /responsibleperson/:id | Cuidador por su id y mascotas**       |
| GET          | /kitten/:id            | Gatito por su id con cuidador***      |
| GET          | /puppy/:id             | Perrito por su id con cuidador***     |
| PUT          | /:id                   | Borrar una mascota por su id*+        |

**Leyenda**:

*Apareceran todos los cuidadores, con todos los datos de las mascotas a su cargo.

**Permite buscar al cuidador por su id y muestra toda la información relacionada con las mascotas a su cargo.

***Este endpoint proporciona datos de la mascota junto con información parcial sobre su cuidador, incluyendo el nombre, apellido, avatar y edad. Los detalles de otras mascotas a cargo del cuidador no estarán disponibles en esta respuesta.

*+Cuando asignas mascotas a su cuidador, no se permiten duplicados. Por lo tanto, en este endpoint, tienes la posibilidad de eliminar una mascota específica del cuidador al proporcionar su id.

#### Recuerda que para cualquier duda o comentario, puedes contactarme ✌🏼😊

![Gif gatito feliz](https://i.pinimg.com/originals/9e/e9/02/9ee902c4fcbed59c1c7f5a8ccabb0cc6.gif)