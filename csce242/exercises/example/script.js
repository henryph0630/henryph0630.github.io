 // References to the buttons and container
 const drawStairsBtn = document.getElementById('drawStairsBtn');
 const climbStairsBtn = document.getElementById('climbStairsBtn');
 const stairsContainer = document.getElementById('stairs-container');
 const stickFigure = document.createElement('div');
 stickFigure.id = 'stick-figure';
 stairsContainer.appendChild(stickFigure);

 // Function to draw the stairs
 drawStairsBtn.addEventListener('click', () => {
   stairsContainer.innerHTML = ''; // Clear previous stairs if any
   for (let i = 0; i < 10; i++) {
     const stair = document.createElement('div');
     stair.classList.add('stair');
     stair.style.top = `${i * 20}px`; // Position each stair
     stair.style.zIndex = i;
     stairsContainer.appendChild(stair);
   }
   stickFigure.style.bottom = '0'; // Ensure stick figure is at the bottom initially
   climbStairsBtn.classList.remove('hidden'); // Show the Climb Stairs button
 });

 // Function to make the stick figure climb the stairs
 climbStairsBtn.addEventListener('click', () => {
   let currentStep = 0;
   let direction = 'left';
   const interval = setInterval(() => {
     if (currentStep < 10) {
       currentStep++;
       stickFigure.style.bottom = `${currentStep * 20}px`; // Move up the stairs
       // Switch stick figure image
       stickFigure.style.backgroundImage = direction === 'left' ? "url('left.png')" : "url('right.png')";
       direction = direction === 'left' ? 'right' : 'left'; // Alternate between left and right
     } else {
       clearInterval(interval); // Stop climbing when at the top
     }
   }, 300); // Interval time for animation
 });