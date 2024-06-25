document.addEventListener("DOMContentLoaded", function() {
    const students = [
        { name: "Haniko", class: "7", position: 1 },
        { name: "Wendy", class: "7", position: 2 },
        { name: "Susanto", class: "7", position: 3 },
        { name: "Andri", class: "7", position: 1 },
        { name: "Linda", class: "7", position: 2 },
        { name: "Melinda", class: "7", position: 3 },
        { name: "Kenzie", class: "7", position: 1 },
        { name: "Nicolas", class: "7", position: 2 },
        { name: "Fadli", class: "7", position: 3 },
        { name: "Dewa", class: "7", position: 1 },
        { name: "Junita", class: "7", position: 2 },
        { name: "Paula", class: "7", position: 3 },
    ];

    const container = document.getElementById("students-container");

    function renderStudents(students) {
        container.innerHTML = '';
        students.forEach(student => {
            const studentDiv = document.createElement("div");
            studentDiv.className = "student position-" + student.position;

            const nameElement = document.createElement("h2");
            nameElement.textContent = student.name;

            const classElement = document.createElement("p");
            classElement.textContent = "Kelas: " + student.class;

            const positionElement = document.createElement("p");
            positionElement.textContent = "Posisi: " + student.position;

            studentDiv.appendChild(nameElement);
            studentDiv.appendChild(classElement);
            studentDiv.appendChild(positionElement);

            container.appendChild(studentDiv);
        });
    }

    function randomizeWinners() {
        const shuffledStudents = students.sort(() => 0.5 - Math.random());
        const winners = shuffledStudents.slice(0, 3);

        document.getElementById("winner-1").textContent = winners[0].name + " dari kelas " + winners[0].class;
        document.getElementById("winner-2").textContent = winners[1].name + " dari kelas " + winners[1].class;
        document.getElementById("winner-3").textContent = winners[2].name + " dari kelas " + winners[2].class;

        const studentDivs = container.getElementsByClassName("student");
        for (let div of studentDivs) {
            div.classList.remove("highlight");
        }

        const winnerNames = winners.map(winner => winner.name);
        for (let div of studentDivs) {
            const name = div.querySelector("h2").textContent;
            if (winnerNames.includes(name)) {
                div.classList.add("highlight");
            }
        }
    }

    renderStudents(students);

    document.getElementById("randomize-button").addEventListener("click", randomizeWinners);
});
