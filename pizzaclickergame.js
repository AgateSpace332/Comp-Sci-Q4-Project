let pizzas = 0, oven = 0, chef = 0, factory = 0, machine = 0, robot = 0, megaFactory = 0, goldenEgg = 0, pizzaTrain = 0, pizzaSpaceship = 0;

document.getElementById("click").onclick = () => { pizzas++; update(); };
document.getElementById("buy1").onclick = () => { if (pizzas >= 20) { pizzas -= 20; oven++; update(); } };
document.getElementById("buy2").onclick = () => { if (pizzas >= 100) { pizzas -= 100; chef++; update(); } };
document.getElementById("buy3").onclick = () => { if (pizzas >= 400) { pizzas -= 400; factory++; update(); } };
document.getElementById("buy4").onclick = () => { if (pizzas >= 1000) { pizzas -= 1000; machine++; update(); } };
document.getElementById("buy5").onclick = () => { if (pizzas >= 2000) { pizzas -= 2000; robot++; update(); } };
document.getElementById("buy6").onclick = () => { if (pizzas >= 10000) { pizzas -= 10000; megaFactory++; update(); } };
document.getElementById("buy7").onclick = () => { if (pizzas >= 20000) { pizzas -= 20000; goldenEgg++; update(); } };
document.getElementById("buy8").onclick = () => { if (pizzas >= 40000) { pizzas -= 40000; pizzaTrain++; update(); } };
document.getElementById("buy9").onclick = () => { if (pizzas >= 100000) { pizzas -= 100000; pizzaSpaceship++; update(); } };

function update() {
  document.getElementById("count").textContent = pizzas + " Pizzas";
}

setInterval(() => {
  pizzas += oven + chef * 5 + factory * 20 + machine * 50 + robot * 100 + megaFactory * 500 + goldenEgg * 1000 + pizzaTrain * 5000 + pizzaSpaceship * 10000;
  update();
}, 1000);
