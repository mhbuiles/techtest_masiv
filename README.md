
## Ejecutar la app

Clone este repositorio y, en la terminal, sobre el directorio del proyecto, ejecute el siguiente comando:

### `npm run start`

La aplicación abrirá en su navegador en el puerto 3000 de su computador, url: http://localhost:3000/

## Interacción

Al abrir el sitio, automáticamente se mostrará un cómic aleatorio, con su título. Debajo del cómic se encuentra información relacionada con el mismo, como es el número del cómic y la fecha de publicación del mismo.

Una vez se lea esta información, el usuario tiene la opción de calificar el cómic a través de un sistema de valoración por medio de corazones, el cual se encuentra después de toda la información del cómic. Este sistema consta de 5 corazones, donde el 5to corazón completo es la máxima valoración, el sistema permite valorar de manera muy precisa, es decir se puede seleccionar cada corazón completo, o la mitad de este, las calificaciones posibles son entonces: 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5 y 5.0.
A medida que el usuario arrastra el cursor sobre los corazones, estos se van rellenando indicando la calificación que daría el usuario, una vez este decida y haga click, la calificación quedará marcada en la vista incluso si retira el cursor del corazón.
El cursor cambia a pointer (dedo) cuando el usuario lo sitúa sobre los corazones.

Cada vez que se accede a la página, o se refresca, se obtendrá un cómic diferente de manera aleatoria.

Existe otra función en la app, que permite ver el cómic publicado más recientemente. Para acceder a dicho cómic, el usuario puede oprimir el botón que se encuentra al final de la página que dice: "I wanna see the latest comic!!".
El cursor cambia a pointer (dedo) cuando el usuario lo sitúa sobre el botón.
