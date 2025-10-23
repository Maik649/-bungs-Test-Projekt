const mainConten = document.getElementById("main-content");

window.addEventListener("load", () => {
  mainConten.innerHTML += render();
});

function render() {
  return template1();
}

function template1() {
  return ` <div class="eingabeForm">
                <form action="">

                    <label for="lvorname"></label>
                    <input type="text" name="lvorname" id="lvorname">

                    <label for="lnachname"></label>
                    <input type="text" name="lnachname" id="lnachname">

                    <label for="lstraße"></label>
                    <input type="text" name="lstraße" id="lstraße">

                    <label for="lort"></label>
                    <input type="text" name="lort" id="lort">

                    <label for="ltime"></label>
                    <input type="time" name="ltime" id="ltime">
                    <label for="ldate"></label>
                    <input type="text" name="ldate" id="ldate">

                </form>
            </div>`;
}
