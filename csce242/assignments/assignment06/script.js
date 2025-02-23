    const drawStairBtn = document.getElementById("draw-stairs");
    const stairs = document.getElementById("stairs-container");

    drawStairBtn.onclick = () => {
        stairs.classList.add("railing");
        for (let i = 0; i < 10; i++){
            const hr = document.createElement("hr");
            stairs.append(hr);
        }
        stairs.classList.remove("hidden");
    }

    const climbStairsBtn = document.getElementById("climb-stairs");
    const stickFigure = document.querySelector("img");

    let count = 0;
    let intervalClimb;

    const Climb = () => {
        ++count;


        const stickFigureSource = stickFigure.src;
        if(stickFigureSource.includes("left")){
            stickFigure.src = "images/right.png";
        }
        else{
            stickFigure.src = "images/left.png";
        }

        if(count === 12) {
            clearInterval(intervalClimb);
        }

        const elevation = Number.parseInt(getComputedStyle(stickFigure).bottom);
        stickFigure.style.bottom = `${elevation + 32}px`;   


    }

    climbStairsBtn.onclick = () => {
        intervalClimb = setInterval(Climb, 1000);
    }