console.log("testing..");
const main = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const submit = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelector(".btn");

submit.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden");
    main.style.display = "none";
});
rateAgain.addEventListener("click", () => {
    thanksContainer.classList.add("hidden");
    main.style.display = "block";
})

// rates.forEach((rate) ()=> {
//     rate.addEventListener("click", () => {
//         rating.innerHTML = rate.innerHTML;
//     })
// });

