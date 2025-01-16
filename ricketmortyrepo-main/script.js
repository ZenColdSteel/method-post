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
