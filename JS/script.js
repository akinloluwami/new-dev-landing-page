import Hero from "../modules/hero.js";
import whyJoin from "../modules/why-join.js";
import Stats from "../modules/stats.js";
import Cta from "../modules/cta.js";
import Footer from "../modules/footer.js";

const Page = () => {
  return `
    ${Hero()}
    ${whyJoin()}
    ${Stats()}
    ${Cta()}
    ${Footer()}
    `;
};

document.querySelector(".page").innerHTML = Page();
