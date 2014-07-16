var five = require("johnny-five"), board, piezo;
board = new five.Board();

board.on("ready", function() {

  piezo = new five.Piezo(8);

  // Injects the piezo into the repl
  board.repl.inject({
    piezo: piezo
  });

   // Plays a song
  piezo.play({
    // song is composed by an array of pairs of notes and beats
    // The first argument is the note (null means "no note")
    // The second argument is the length of time (beat) of the note (or non-note)
    song: [
      ["F4", 1/8], ["C4", 1/8], ["A3", 1/8], ["C4", 1/8], ["A3", 1/8], ["F4", 1/8],
      ["F4", 1/8], ["C4", 1/8], ["A3", 1/8], ["C4", 1/8], ["A3", 1/8], ["F4", 1/8],
      ["E4", 1/8], ["C4", 1/8],["G3", 1/8], ["C4", 1/8], ["G3", 1/8], ["E4", 1/8],
      ["E4", 1/8], ["C4", 1/8], ["G3", 1/8], ["C4", 1/8], ["G3", 1/8], ["E4", 1/8],
      ["E4", 1/8], ["C#4", 1/8], ["A3", 1/8], ["C#4", 1/8],["A3", 1/8], ["E4", 1/8],
      ["E4", 1/8], ["C#4", 1/8], ["A3", 1/8], ["C#4", 1/8], ["A3", 1/8],["E4", 1/8],

      ["D4", 1/2], ["E4", 1/3], ["F4", 1/3], ["A4", 1/4], ["G4", 1/4], ["A4", 1/2],["C4", 1/2],
      ["D4", 1/2], ["E4", 1/3], ["F4", 1/3], ["E4", 1/4], ["G4", 1/4], ["A4", 1/2],["G4", 1/2], ["F4", 1/2],

      ["F4", 1/8], ["F4", 1/8], ["F4", 1/8], ["A4", 1/8], ["A4", 1/8],["G4", 1/8], ["F4", 1/8],
      ["A4", 1/8], ["A4", 1/8], ["A4", 1/8], ["G4", 1/8], ["A4", 1/8],["G4", 1/8], ["F4", 1/8],
      ["F4", 1/8], ["F4", 1/8], ["F4", 1/8], ["A4", 1/8], ["A4", 1/8],["G4", 1/8], ["F4", 1/8],

      ["A4", 1/3], ["A4", 1/3], ["A4", 1/3], ["C#5", 1/3], ["C#5", 1/3], ["C#5", 1/2],
      ["F4", 1/3], ["F4", 1/3], ["F4", 1/3], ["A4", 1/3], ["A4", 1/3], ["G4", 1/3],["F4", 1/2],
      ["A#4", 1/2], ["A#4", 1/2], ["A#4", 1/2], ["G4", 1/2], ["C5", 1/2], ["A4", 1/8], ["C#5", 1/8], ["D5", 1/8]
    ],
    tempo: 100
  });

});