const getCostumes = async () => {
    const url = "https://raw.githubusercontent.com/henryph0630/henryph0630.github.io/main/csce242/projects/Part%206/costumes.json";
    
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log('Error fetching JSON data:', error);
    }
};

const retrieveCostumesCostumes = async () => {
    const costumes = await getCostumes();
    const gallery = document.getElementById("costume-gallery");

    costumes.forEach((item) => {
        const section = document.createElement("section");

        const img = document.createElement("img");
        img.src = item.img_name;
        img.alt = item.name;
        section.appendChild(img);

        const h2 = document.createElement("h2");
        h2.innerHTML = item.name;
        section.appendChild(h2);

        const h3 = document.createElement("h3");
        h3.innerHTML = `$${item.price}`;
        section.appendChild(h3);

        const p = document.createElement("p");
        p.innerHTML = item.description;
        section.appendChild(p);

        gallery.appendChild(section);
    });
};

retrieveCostumesCostumes();