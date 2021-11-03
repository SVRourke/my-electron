const heading = document.querySelector("h1");
const button = document.querySelector("button#mybutton");

button.addEventListener("click", () => {
  console.log("CLICKED");
  new Notification("Hello World", { body: "ITWORKED" });
});
