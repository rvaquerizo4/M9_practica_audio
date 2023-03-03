
const songs = [
    {
      name: "Canción 1",
      artist: "Artista 1",
      file: "./audios/song1.mp3",
    },
    {
      name: "Canción 2",
      artist: "Artista 2",
      file: "./audios/song2.mp3",
    },
    {
      name: "Canción 3",
      artist: "Artista 3",
      file: "./audios/song3.mp3",
    },
  ];
  
  const audioPlayer = document.getElementById("audio-player");
  const albumArt = document.getElementById("album-art");
  const albumArt2 = document.getElementById("album-art-2");
  const albumArt3 = document.getElementById("album-art-3");
  const songNameElement = document.getElementById("song-name");
  const artistNameElement = document.getElementById("artist-name");
  const songDurationElement = document.getElementById("song-duration");
  const playPauseButton = document.getElementById("play-pause-button");
  const stopButton = document.getElementById("stop-button");
  const volumeSlider = document.getElementById("volume-slider");
  const previousSong = document.getElementById("previous-song-button");
  const nextSong = document.getElementById("next-song-button");

  
 
  let reproductor = document.querySelector("audio");
  let imagen = document.querySelector(".disco img");
  
  
  function mostrarCancionActual(cancion) {
    let nombreCancion = document.querySelector(".cancion h2");
    let artistaCancion = document.querySelector(".cancion h3");
    let contadorCancion = document.querySelector(".cancion p");
    nombreCancion.textContent = cancion.nombre;
    artistaCancion.textContent = cancion.artista;
    contadorCancion.textContent = `Reproducciones: ${cancion.contador}`;
  }
  
  let cancionActual = canciones[0];
  mostrarCancionActual(cancionActual);
  
  reproductor.addEventListener("play", function() {
    imagen.style.animationPlayState = "running";
  });
  
  reproductor.addEventListener("pause", function() {
    imagen.style.animationPlayState = "paused";
  });
  
  // Agregar un manejador de eventos al botón de "Next" en el reproductor
  reproductor.addEventListener("ended", function() {
    cancionActual.contador++;
    let indiceCancionActual = canciones.indexOf(cancionActual);
    if (indiceCancionActual < canciones.length - 1) {
      // Pasar a la siguiente canción
      cancionActual = canciones[indiceCancionActual + 1];
    } else {
      // Volver a la primera canción
      cancionActual = canciones[0];
    }
    reproductor.src = `./audios/${cancionActual.nombre}.mp3`;
    mostrarCancionActual(cancionActual);
  });
  
  // Agregar un manejador de eventos al botón de "Previous" en el reproductor (opcional)
  // Este código permite que el usuario retroceda a la canción anterior
  reproductor.addEventListener("timeupdate", function() {
    if (reproductor.currentTime < 2) {
      let indiceCancionActual = canciones.indexOf(cancionActual);
      if (indiceCancionActual > 0) {
        // Volver a la canción anterior
        cancionActual = canciones[indiceCancionActual - 1];
        reproductor.src = `./audios/${cancionActual.nombre}.mp3`;
        mostrarCancionActual(cancionActual);
      }
    }
  });
  
  