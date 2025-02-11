
const helloButton = document.getElementById("hello-button");
const helloCount = document.getElementById("hello-counter");

helloButton.onclick = () => {
    const h2 = document.createElement("h2");
    h2.textContent = "Hello";
    helloCount.appendChild(h2);
}

const starColor = document.getElementById("star");
const colorInput = document.getElementById("color-button");

colorInput.onchange = () => {
    starColor.style.color = colorInput.value;
}

const imageClicker = document.getElementById("image");


imageClicker.onclick = () => {
    const imageSrc = imageClicker.src;

    if (imageSrc.includes("d4394e/909090"))
    {
        imageClicker.src = "https://fakeimg.pl/200x200";
    }
    else {
        imageClicker.src = "https://fakeimg.pl/200x200/d4394e/909090";
    }

};
