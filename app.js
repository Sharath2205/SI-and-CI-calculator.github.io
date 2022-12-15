const simpleInterestEl = document.getElementById("si");
const compoundInterestEl = document.getElementById("ci");
const resultEl = document.querySelector(".result");
const paEl = document.getElementById("pa");
const irEl = document.getElementById("ir");
const diyEl = document.getElementById("diy");
const cfEl = document.getElementById("cf");
const calculateEl = document.getElementById("calculate");

let calculationType = 0;

simpleInterestEl.addEventListener("click", () => {
  calculationType = 0;
  changeInputs(0);
  reset();
  compoundInterestEl.classList.remove("active");
  simpleInterestEl.classList.add("active");
});

compoundInterestEl.addEventListener("click", () => {
  calculationType = 1;
  changeInputs(1);
  reset();
  simpleInterestEl.classList.remove("active");
  compoundInterestEl.classList.add("active");
});

function reset() {
  paEl.value = "";
  irEl.value = "";
  diyEl.value = "";
  cfEl.value = "";

  resultEl.style.display = "none";
}

function changeInputs(ci) {
  const cfEl = document.getElementById("cfreq");
  if (ci == 0) {
    cfEl.style.display = "none";
  } else {
    cfEl.style.display = "block";
  }
}

calculateEl.addEventListener("click", () => {
  let p = paEl.value;
  let r = irEl.value;
  let t = diyEl.value;

  if (isNaN(p) || isNaN(r) || isNaN(t)) {
    alert("All values must be numeric only");
    reset();
  } else if (!p || !r || !t) {
    alert("Enter all values");
    reset();
  } else {
    if (calculationType == 0) {
      let result = p * (1 + r * t);
      resultEl.style.display = "block";
      document.getElementById("result").innerText = result;
    } else {
      let n = cfEl.value;
      if (isNaN(n)) {
        alert("All values must be numeric only");
        reset();
      } else if (!n) {
        alert("Enter all values");
        reset();
      } else {
        r /= 100;
        let result = parseFloat(p * Math.pow(1 + r / n, n * t)).toFixed(2);
        resultEl.style.display = "block";
        document.getElementById("result").innerText = result;
      }
    }
  }
});

// css link
