function calculate() {
  const value = document.getElementById("input").value;
  const stack = Math.floor(value / 64);
  const remaining = value % 64;
  const result = document.getElementById("result");

  result.innerHTML = "Stack: " + stack + " and " + remaining + " items";
}
