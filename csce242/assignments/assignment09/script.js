class guitar {
    constructor(name, brand, price, category, condition, color, image) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.category = category;
        this.condition = condition;
        this.color = color;
        this.image = image;
    }

    getSection() {
        return `
        <section id="gallery-item" onclick="openModal('${this.name}', '${this.brand}', '${this.price}', '${this.category}', '${this.condition}', '${this.color}', '${this.image}')"> 
           <h2>${this.name}</h2>
            <img src="${this.image}">
        </section>
        `;
    }

    getSectionModel () {
        return `
        <h2>"Name: ${this.name}</h2>
        <h3>Brand: ${this.brand}</h3>
        <h3>Price:$${this.price}</h3>
        <h3>Category: ${this.category}</h3>
        <h3>Condition: ${this.condition}</h3>
        <h3>Color: ${this.color}</h3>
        `
    }
}



const yamahaFS800 = new guitar (
    "Yamaha FS800",
    "Yamaha",
    229.99,
    "Acoustic",
    "New",
    "Brown",
    "images/Yamaha FS800.webp"
);

const playerII = new guitar (
    "Fender Player II Stratocaster",
    "Fender",
    799.99,
    "Electric",
    "New",
    "British Racing Green",
    "images/Fender Player II.webp"
);

const fa135ce = new guitar (
    "Fender FA-135CE",
    "Fender",
    249.99,
    "Acoustic",
    "New",
    "Black",
    "images/FA135CE.jpg"
);

const telecasterThinline = new guitar(
    "Vintage Telecaster Thinline",
    "Fender",
    3599.99,
    "Electric",
    "Used",
    "Black/White",
    "images/1973FenderTelecasterThinline.webp"

);

const gibsonLesPaul = new guitar (
    "Gibson Les Paul",
    "Gibson",
    1999,
    "Electric",
    "New",
    "Cobalt Blue",
    "images/gibsonLesPaul.webp"
)

const taylor214ce = new guitar (
    "Taylor 214ce",
    "Taylor",
    999,
    "Acoustic",
    "New",
    "Brown",
    "images/taylor214ce.webp"
)

const guitars = [
    yamahaFS800,
    playerII,
    fa135ce,
    telecasterThinline,
    gibsonLesPaul,
    taylor214ce
];

const populateGallery = () => {
    document.getElementById("gallery").innerHTML = guitars
    .map((el) => el.getSection())
    .join("");

}

const openModal = (name, brand, price, category, condition, color, image) => {
    const modal = document.getElementById('pop-up');
    modal.innerHTML = `
        <span onclick="closeModal()" style="cursor:pointer;position:absolute;top:10px;right:10px;">&times;</span>
        <div class="text-content">
            <h2>${name}</h2>
            <h3>Brand: ${brand}</h3>
            <h3>Price: $${price}</h3>
            <h3>Category: ${category}</h3>
            <h3>Condition: ${condition}</h3>
            <h3>Color: ${color}</h3>
        </div>
        <img src="${image}">
    `;
    modal.classList.remove('hidden');
    modal.style.display = "block"; 
};

const closeModal = () => {
    document.getElementById('pop-up').style.display = "none";
};

populateGallery();