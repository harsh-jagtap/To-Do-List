console.log("Wel-Come to To-Do list");

let save = document.getElementById("inputSave");

// saving data to local storage
save.addEventListener("click", function(e) {
    e.preventDefault()
    let title = document.getElementById("inputTitle");
    let description = document.getElementById("inputDescription");
    let data = localStorage.getItem("data");

    if (data == null) {
        dataArray = [];
    } else {
        dataArray = JSON.parse(data);
    }

    let informationObject = {
        title: title.value,
        description: description.value,
    };

    if (title.value != "" && description.value != "") {
        dataArray.push(informationObject);
        localStorage.setItem("data", JSON.stringify(dataArray));
        title.value = ""
        description.value = ""
    }

    displayData()
});

function displayData() {
    let data = localStorage.getItem("data");
    let main = document.getElementById("displayCenter")
    dataArray = `<div id="diplayCard">
                    <div class="cardTitle font-Large">Try to add Something.</div>
                    <div class="cardDescription font-Mid">Nothing to show add something to display.</div>
                </div>`;
    main.innerHTML = dataArray

    if (data == null) {
        let main = document.getElementById("displayCenter")
        dataArray = `<div id="diplayCard">
                        <div class="cardTitle font-Large">Wel-Come</div>
                        <div class="cardDescription font-Mid">Hi! Wel Come here to our web app knows as To-Do list here you can save you notes and use whenever you want.Don't worry your notes will not been given to anyone another.</div>
                    </div>`;
        main.innerHTML = dataArray
    } else {
        let main = document.getElementById("displayCenter")
        dataArray = JSON.parse(data);
        let note = "";

        for (const key in dataArray) {
            const hi = dataArray[key];
            note += `<div class="card">
                <div class="cardTitle">${hi.title}</div>
                <pre class="cardDescription font-Small">${hi.description}</pre>
                <button id="${key}" onclick="deleteNote(this.id)" class="cardDelete">Delete</button>
                </div>`;
            main.innerHTML = note
        };
    }
};

function deleteNote(index) {
    let data = localStorage.getItem("data");
    if (data == null) {
        dataArray = [];
    } else {
        dataArray = JSON.parse(data);
    }

    dataArray.splice(index, 1);
    console.log(index, dataArray);
    localStorage.setItem("data", JSON.stringify(dataArray))
    displayData();
}

displayData();