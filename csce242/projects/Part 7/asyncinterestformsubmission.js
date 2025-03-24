document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = e.target;
    const status = document.getElementById("form-status");
    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: data
        });

        const result = await response.json();

        if (result.success) {
            status.textContent = "Thanks! Your interest form was submitted.";
            status.style.color = "green";
            form.reset();
        } else {
            status.textContent = "Something went wrong. Please try again.";
            status.style.color = "red";
        }
    } catch (error) {
        status.textContent = "Network error. Please try again.";
        status.style.color = "red";
    }
});