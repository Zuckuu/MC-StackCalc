function calculate() {
  const value = document.getElementById("input").value;

  const stack = Math.floor(value / 64);
  const remaining = value % 64;
  console.log(stack );
  console.log(remaining);
}