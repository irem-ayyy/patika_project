// LocalStorage'dan notları yükle
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Notları ekrana bastır
function displayNotes() {
    const noteList = document.getElementById("noteList");
    noteList.innerHTML = "";
    notes.forEach((note, index) => {
        noteList.innerHTML += `
      <div class="note">
        <p contenteditable="true" onblur="editNote(${index}, this.innerText)">${note}</p>
        <button onclick="deleteNote(${index})">Sil</button>
      </div>
    `;
    });
}

// Yeni not ekle
function addNote() {
    const noteInput = document.getElementById("noteInput");
    if (noteInput.value.trim() !== "") {
        notes.push(noteInput.value);
        saveNotes();
        displayNotes();
        noteInput.value = "";
    }
}

// Not düzenle
function editNote(index, newText) {
    notes[index] = newText;
    saveNotes();
}

// Not sil
function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
    displayNotes();
}

// LocalStorage'a kaydet
function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// İlk açılışta notları göster
displayNotes();
