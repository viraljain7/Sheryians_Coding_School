// altera tem site
function alterarTemaSite() {
  let tema = document.querySelector("html").getAttribute("data-bs-theme");
  if (tema === "dark") {
    document.querySelector("html").setAttribute("data-bs-theme", "light");
    document.querySelector(
      "#alterarTemaSite"
    ).innerHTML = `<i class="bi bi-moon-fill"></i>`;
  } else {
    document.querySelector("html").setAttribute("data-bs-theme", "dark");
    document.querySelector(
      "#alterarTemaSite"
    ).innerHTML = `<i class="bi bi-brightness-high-fill""></i>`;
  }
}
