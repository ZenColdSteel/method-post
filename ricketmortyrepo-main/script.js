const btnLoadData = document.querySelector(".btnLoadData");
const allData = document.querySelector(".allData");

btnLoadData.addEventListener("click", (event) => {
    event.preventDefault();
    let pagesNumber;
    fetch(`https://rickandmortyapi.com/api/character`)
        .then((response) => response.json())
        .then((data) => {
            pagesNumber = data.info.pages;

            for (let i = 1; i <= pagesNumber; i++) {
                console.log(pagesNumber);
                fetch(`https://rickandmortyapi.com/api/character?page=${i}`)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);

                        data.results.forEach((element) => {
                            console.log(element);
                            const div = document.createElement("div");
                            allData.appendChild(div);

                            const name = document.createElement("p");
                            name.textContent = element.name;
                            div.appendChild(name);

                            const img = document.createElement("img");
                            img.src = element.image;
                            div.appendChild(img);
                        });
                    });
            }
        });
});

// const formulaire = document.querySelector("#mon-formulaire");

// formulaire.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const formData = new FormData(formulaire);
//     const data = {};

//     formData.forEach((value, key) => {
//         data[key] = value;
//     });
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     })
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .catch((error) => console.log("Erreur:", error));
// });
