const buttonList = () => {
    const buttonListArray = [
        {
            name:"Happy Birthday",
            data:"images/birthday.jpg"
        },
        {
            name:"Crazy Clown",
            data:"images/clown.jpg"
        },
        {
            name:"It's Raining",
            data:"images/rain.jpg"
        },
        {
            name:"Quiet Time",
            data:"images/read.jpg"
        },
        {
            name:"Working Hard",
            data:"images/shovel.jpg"
        },
        {
            name:"Work from Home",
            data:"images/work.jpg"
        },
    ];


    document.getElementById("button-list").innerHTML = buttonListArray.map(
        (el) => `
          <button name ="${el.data}" class="button">${el.name}</button>
          `
      )
      .join("");


}

buttonList();



    const buttons = document.querySelectorAll("button");
    const header = document.getElementById("pop-up-header");
    const popupimage = document.getElementById("pop-up").querySelector("img");
    const popupdiv = document.getElementById("pop-up");


    buttons.forEach((btn) => {
        btn.onclick = () => {

            popupdiv.classList.remove("hidden");

            const data = btn.textContent;

            header.textContent = data;

            popupimage.src = btn.name;
            
            

        }

    const closeButton = document.getElementById("close");

    closeButton.onclick = () => {
        popupdiv.classList.add("hidden");
    }
    });










