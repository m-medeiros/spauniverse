import { Router } from "./router.js";

const router = new Router();

router.add("/home", "/assets/pages/home.html");
router.add("/universe", "/assets/pages/universe.html");
router.add("/exploration", "/assets/pages/exploration.html");
router.add(404, "/assets/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.router = () => router.router();

const body = document.querySelector("body");
const home = document.querySelector(".bg__home");
const universe = document.querySelector(".bg__universe");
const exploration = document.querySelector(".bg__exploration");

home.addEventListener("click", () => {
  window.location = "home";
  body.classList.remove("bg__universe");
  body.classList.remove("bg__exploration");
});

universe.addEventListener("click", () => {
  window.location = "universe";
  body.classList.remove("bg__exploration");
  body.classList.add("bg__universe");
});

exploration.addEventListener("click", () => {
  window.location = "exploration";
  body.classList.remove("bg__universe");
  body.classList.add("bg__exploration");
});
