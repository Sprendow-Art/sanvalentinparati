// script.js
window.onload = function () {
    let messageElement = document.getElementById('message');
    let subMessageElement = document.getElementById('submessage');
    let nextButton = document.getElementById('nextButton');
    let backgroundMusic = document.getElementById('backgroundMusic');

    // Inicia la música de fondo
    backgroundMusic.play();

    // Efecto de entrada de texto con "falla"
    setTimeout(() => {
        typewriterEffect(messageElement, "Hola Ana!", 100, () => {
            setTimeout(() => {
                typewriterEffect(messageElement, "", 50, () => {
                    setTimeout(() => {
                        typewriterEffect(messageElement, "Oli, tarroncito de azúcar", 100, () => {
                            setTimeout(() => {
                                fadeIn(subMessageElement, "Quería hacerte una petición cariño, ¿quieres saber qué es?", () => {
                                    nextButton.style.display = "inline-block";
                                });
                            }, 1000);
                        });
                    }, 500);
                });
            }, 1000);
        });
    }, 1000);

    // Función de tipo máquina de escribir
    function typewriterEffect(element, text, speed, callback) {
        let i = 0;
        element.innerHTML = "";
        let typing = setInterval(function () {
            element.innerHTML += text.charAt(i);
            i++;
            if (i > text.length) {
                clearInterval(typing);
                if (callback) callback();
            }
        }, speed);
    }

    // Función de fade in para el submensaje
    function fadeIn(element, text, callback) {
        element.style.display = "inline-block";
        let opacity = 0;
        let interval = setInterval(function () {
            opacity += 0.05;
            element.style.opacity = opacity;
            if (opacity >= 1) {
                clearInterval(interval);
                element.innerHTML = text;
                if (callback) callback();
            }
        }, 50);
    }

    // Función para mostrar el siguiente mensaje
    nextButton.addEventListener('click', function () {
        fadeIn(subMessageElement, "Cariño, yo solo quería decirte antes de mucho tiempo...", () => {
            nextButton.innerHTML = "Quiero preguntarte algo...";
            nextButton.addEventListener('click', function () {
                showFinalMessage();
            });
        });
    });

    function showFinalMessage() {
        let finalMessage = document.createElement("h2");
        finalMessage.innerHTML = "¿Quieres ser mi San Valentín?";
        finalMessage.style.color = "yellow";
        document.body.appendChild(finalMessage);

        // Animación de flores amarillas
        let flowerAnimation = setInterval(function () {
            let flower = document.createElement("div");
            flower.classList.add("luci", "flicker");
            flower.style.left = `${Math.random() * 100}%`;
            flower.style.top = `${Math.random() * 100}%`;
            document.body.appendChild(flower);
            setTimeout(() => {
                flower.remove();
            }, 2000);
        }, 500);

        // Botón con opciones
        setTimeout(() => {
            let yesButton = document.createElement("button");
            yesButton.innerHTML = "Sí";
            document.body.appendChild(yesButton);

            yesButton.addEventListener('click', () => {
                cleanScreen();
                let message = document.createElement("h2");
                message.innerHTML = "Okay, ya di el primer paso...";
                document.body.appendChild(message);

                let thanksMessage = document.createElement("h2");
                thanksMessage.innerHTML = "Gracias por su atención! Puedes salir de la página!";
                document.body.appendChild(thanksMessage);

                let restartButton = document.createElement("button");
                restartButton.innerHTML = "Ver todo otra vez";
                document.body.appendChild(restartButton);

                restartButton.addEventListener('click', () => {
                    window.location.reload();
                });
            });
        }, 3000);
    }

    // Limpiar la pantalla
    function cleanScreen() {
        let elements = document.body.children;
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
        }
    }
};
