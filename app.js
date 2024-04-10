const readline = require('readline');
const { addNote, showNotes, deleteNote } = require('./utils');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mainMenu() {
    console.log('\nHauptmenü:');
    console.log('1. Notiz hinzufügen');
    console.log('2. Notizen anzeigen');
    console.log('3. Notiz löschen');
    console.log('4. Beenden');

    rl.question('Wählen Sie eine Option: ', answer => {
        switch (answer) {
            case '1':
                rl.question('Geben Sie die Notiz ein: ', note => {
                    addNote(note);
                    mainMenu();
                });
                break;
            case '2':
                showNotes();
                mainMenu();
                break;
            case '3':
                rl.question('Geben Sie den Text der zu löschenden Notiz ein: ', noteToDelete => {
                    deleteNote(noteToDelete);
                    mainMenu();
                });
                break;
            case '4':
                console.log('Auf Wiedersehen!');
                rl.close();
                break;
            default:
                console.log('Ungültige Option.');
                mainMenu();
                break;
        }
    });
}

mainMenu();
