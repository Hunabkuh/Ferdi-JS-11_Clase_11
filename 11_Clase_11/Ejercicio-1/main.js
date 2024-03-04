// Bienvenid @a la pitonisa Astro - Loca! Dime tu signo del zodiaco y te diré como irá tu semana: -)

// - Pedir mediante un input en pantalla tu horóscopo.

// - Enviarlo mediante pulsar un botón, imagen o texto

// - que ejecute una función dentro de la cual debe hallarse un switch/case: "capricornio", "leo", "geminis"...

//     - El switch case debe mostrar en un espacio destinado a tal fin, un texto con la predicción, y una imagen.La imagen no hace falta que sea diferente en cada caso, pero sí al menos una general y otra para el caso en el que no se entre correctamente el signo del zodiaco.
//________________________________________________________________________________________________

// var signo = "";

function horoscopo(signo) {
    // signo = document.getElementById("signo-zodiaco").value; // OPCIÓN 1: ESCRIBIR INPUT

    switch (signo) {
        case 1:
            document.getElementById("resultado").innerHTML = "El asteroide Ceres, relacionado con el compromiso y los sentimientos sinceros que sobrepasan todo tipo de intereses personales y sentimientos de egoísmo, hoy estará pasando al signo Acuario y activando al mismo tiempo tus relaciones. Así comprenderás que es el tiempo de integrar tus conocimientos superiores, lo mismo te conviene hacer con el camino espiritual recorrido para compartirlo con tus amigos más cercanos.En este orden de ideas, sentirás que es el momento adecuado para unirte a nuevas personas y hacer prácticas chamánicas.";
            document.getElementById("img-resultado").innerHTML = "<img src=/JavaScript/11_Clase_11/Ejercicio-1/Img/01aries.jpg>";
            break;

        case 2:
            document.getElementById("resultado").innerHTML = "Hoy el asteroide Ceres, asociado con tus responsabilidades y compromisos, pasa al signo Acuario. Esta influencia astrológica te ayudará a superar los miedos y las inseguridades en tu desarrollo profesional y laboral. Lo dicho, particularmente, a través de un trabajo interno, permitiéndote sentir la abundancia y prosperidad material que puedes lograr.Mediante este proceso, en la semana que ya inicias cambiarás tus costumbres de mantener una competencia insana con tus colegas por un sentimiento de fraternidad.";
            document.getElementById("img-resultado").innerHTML = "<img src=/JavaScript/11_Clase_11/Ejercicio-1/Img/02tauro.jpg>";
            break;

        case 3:
            document.getElementById("resultado").innerHTML = "Hoy Ceres, asteroide que representa tu seriedad y compromisos, comienza su recorrido por el signo Acuario. Esto lo sentirás a medida que pasen las horas y tu mente y tu corazón estarán serenos y flexibles. También tendrás la capacidad de seguir tu intuición y así escuchar la voz de tu alma a la hora de escoger la técnica o el camino correcto para conseguir tus metas. Toda esta energía que te menciono te generará tranquilidad para que puedas estar más comprensivo frente a las personas más cercanas y relaciones íntimas.";
            document.getElementById("img-resultado").innerHTML = "<img src=/JavaScript/11_Clase_11/Ejercicio-1/Img/03geminis.jpg>";
            break;

        case 4:
            document.getElementById("resultado").innerHTML = "Hoy Ceres, el asteroide del Universo relacionado con tus compromisos y fuerza interna, en su camino ingresa al signo Acuario. Con esta influencia astrológica, estará aumentando tu fuerza expansiva y lo sentirás a través de una nueva vibración en tu interior. Esto, particularmente, te hará ordenar de manera clara tus metas y preparar tu agenda del resto del mes de acuerdo con tus intereses.De esta forma y dejando el ego de lado, pondrás toda tu capacidad organizativa y tu disciplina para generar sociedades comerciales.";
            document.getElementById("img-resultado").innerHTML = "<img src=/JavaScript/11_Clase_11/Ejercicio-1/Img/04cancer.jpg>";
            break;

        case 5:
            document.getElementById("resultado").innerHTML = "Es un día diferente porque sientes paz en tu interior. Esto es porque Ceres, asteroide asociado con tus responsabilidades y compromisos, ingresa a Acuario, brindándote alegría para transmitir en tus relaciones. Percibirás que ahora estás en el mejor momento para corregir algunas decisiones, ya que con esta influencia puedes apoyarte más en tus emociones. Por lo mencionado, construirás relaciones más duraderas y aumentará tu facultad intuitiva.A través del asteroide mencionado, comenzarás a buscar otras habilidades amorosas dentro de ti.";
            document.getElementById("img-resultado").innerHTML = "<img src=/JavaScript/11_Clase_11/Ejercicio-1/Img/05leo.jpg>";
            break;

        case 6:
            document.getElementById("resultado").innerHTML = "Hoy el asteroide Ceres, relacionado con tu compromiso interno y lo espiritual, ingresa a Acuario. Esta influencia te hará sentir una vibración especial que te estimulará a realizar diferentes tipos de ayudas en tu entorno. Por ejemplo, buscarás colaborar más con aquellas personas que se sientan preocupadas debido la situación actual social y así estarás ayudándolos anímicamente. Renacerá en ti el amor universal y la compasión, más aún si preparas una botella de amor propio para hallar la paz y la felicidad dentro de tu corazón.";
            document.getElementById("img-resultado").innerHTML = "<img src=/JavaScript/11_Clase_11/Ejercicio-1/Img/06virgo.jpg>";
            break;

        case 7:
            document.getElementById("resultado").innerHTML = "Hoy Ceres inicia su recorrido por Acuario activando el área del amor de tu horóscopo. Como su aporte es otorgar una visión más responsable a tu vida, serás capaz de resolver mejor lo que te esté sucediendo a nivel sentimental. Lo mencionado se da debido a que últimamente te estás sintiendo con un vacío interno difícil de esquivar y, a través de esta influencia, el Universo te aconseja buscar una unión donde lo espiritual predomine sobre lo físico.De esta forma, tendrás más tranquilidad y podrás comprender la vida a un nivel más profundo y superior.";
            document.getElementById("img-resultado").innerHTML = "<img src=/JavaScript/11_Clase_11/Ejercicio-1/Img/07libra.webp>";
            break;

        case 8:
            document.getElementById("resultado").innerHTML = "Ceres, el asteroide relacionado con el amor al hogar, pasa a Acuario y activa el sector de tu horóscopo relacionado con el hogar y las relaciones familiares. Como el astro mencionado disfruta de este aspecto, expande su buena influencia haciendo crecer los vínculos afectivos entre el núcleo familiar. También hace que se sientan unidos por un amor superior que los fortalezca para superar cualquier conflicto entre ustedes.Además, este aspecto genera en tu corazón mucha paz para que reorganices los planes con la familia de una manera optimista y amena.";
            document.getElementById("img-resultado").innerHTML = "<img src=/JavaScript/11_Clase_11/Ejercicio-1/Img/08escorpio.webp>";
            break;

        case 9:
            document.getElementById("resultado").innerHTML = "Ceres es un asteroide asociado con los compromisos de amor y se encarga de transmitir paz y sabiduría. Hoy en su camino pasa a Acuario y para tu signo esta influencia se relaciona con tus pensamientos y programaciones. Por este motivo, vas a sentir mucha calma y te es muy fácil ser paciente, enfocar tu mente a temas positivos y no dispersar energías ni emociones en enojos. Además, tendrás el sosiego suficiente para concentrarte en mantener tus pensamientos limpios y superar todo tipo de contrariedades porque estarás conectado a tu maestro interno.";
            document.getElementById("img-resultado").innerHTML = "<img src=/JavaScript/11_Clase_11/Ejercicio-1/Img/09sagitario.webp>";
            break;

        case 10:
            document.getElementById("resultado").innerHTML = "Hoy Ceres, asteroide muy importante por ser el encargado de despertar dentro de ti el compromiso y las responsabilidades, pasa a Acuario. Con esta influencia, el Universo te recuerda que las características citadas son las que te benefician integrar en estos días en tu economía. También que debes vibrar más con la prosperidad, integrar esta sensación y así salir de la desmotivación.Además, el asteroide mencionado te dará la seguridad que cada esfuerzo hecho y el desarrollo de tu perseverancia para tener estabilidad material te será reconocido.";
            document.getElementById("img-resultado").innerHTML = "<img src=/JavaScript/11_Clase_11/Ejercicio-1/Img/10capricornio.jpg>";
            break;

        case 11:
            document.getElementById("resultado").innerHTML = "Hoy, con el paso del asteroide Ceres a tu signo, podrás superar tu alto hermetismo al aumentar tu fuerza espiritual y mística. Percibirás que nuevamente te será muy fácil dejarte guiar por tu intuición y que ante cualquier mal gesto o tono de quienes te rodean puedes saber qué les sucede. Además, se despertará tu lado más serio y comprometido al comprender que se pierde mucha energía y tiempo al enojarse.Por otro lado, decidirás organizar tu agenda de la semana porque lo harás con una energía especial y positiva.";
            document.getElementById("img-resultado").innerHTML = "<img src=/JavaScript/11_Clase_11/Ejercicio-1/Img/11acuario.jpg>";
            break;

        case 12:
            document.getElementById("resultado").innerHTML = "Muchas veces, en tu rápido andar, te enfocas tanto en la relación de pareja que dejas de conectarte con tu mundo interno y lo descuidas, pero hoy será un día diferente. Esto es porque Ceres, asteroide relacionado con el compromiso que asumes espiritualmente y el amor universal, comienza a transitar el sector de tu horóscopo relacionado con las reflexiones, meditaciones. Con esta influencia astrológica, podrías estar haciendo distintas visualizaciones y regresiones, y favorecerá aprender quién es el arcángel Uriel y cuál es la bendición que te puede otorgar.";
            document.getElementById("img-resultado").innerHTML = "<img src=/JavaScript/11_Clase_11/Ejercicio-1/Img/12piscis.jpg>";
            break;

        default:
            document.getElementById("resultado").innerHTML = "Introduce un signo del zodiaco occidental válido.";
            document.getElementById("img-resultado").innerHTML = "<img src=/JavaScript/11_Clase_11/Ejercicio-1/Img/signos.webp>";
            break;
    }
}