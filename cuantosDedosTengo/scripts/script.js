document.getElementById("compruebaNumero").onclick = function()
            {
                var numeroAleatorio = Math.random();
                // numeroAleatorio contiene un número real entre 0 y 1
                numeroAleatorio = numeroAleatorio*6; // Ahora está entre 0 y 5.999999
                numeroAleatorio = Math.floor(numeroAleatorio);
                if (document.getElementById("numero").value == numeroAleatorio)
                    {   
                        alert("Acertaste!! Bien !!");
                    }
                else
                    {
                        alert("Mala suerte! El número era "+numeroAleatorio);
                    }
            }