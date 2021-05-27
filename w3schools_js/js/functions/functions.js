function myFunction(p1, p2) {
    return p1 * p2;
  }
  document.getElementById("multiply").innerHTML = myFunction(4, 3);

  function toCelsius(f) {
    return (5/9) * (f-32);
  }
  document.getElementById("celsius").innerHTML = toCelsius(77);

