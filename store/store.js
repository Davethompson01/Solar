const interactions = {
  block: document.querySelector(".svg"),
  hideDiv: document.querySelector(".hideDiv"),
  hide: document.querySelector(".cancel"),

  init() {
    this.block.addEventListener("click", () => {
      this.hideDiv.style.display = "flex";
    });

    this.hide.addEventListener("click", () => {
      this.hideDiv.style.display = "none";
    });
  },
};

interactions.init();
