document.addEventListener("DOMContentLoaded", () => {
    fetch("https://henryph0630.github.io/part6/costumes.json")
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById("costume-gallery");
            gallery.innerHTML = ""; // Clear existing content
            data.forEach(item => {
                gallery.innerHTML += `
                    <section>
                        <img src="${item.img_name}" alt="${item.name}">
                        <h2>${item.name}</h2>
                        <h3>$${item.price}</h3>
                    </section>
                `;
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});