const inputs = document.querySelectorAll(".control input");

function makeChange(){
  const suffix = this.dataset.sizing || " "

  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener("change", makeChange))
inputs.forEach(input => input.addEventListener("mousemove", makeChange))
