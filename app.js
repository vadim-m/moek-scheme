const scheme = document.getElementById("scheme");
const saveBtn = document.getElementById("save-btn");

// html2canvas => any div as image file
function doCapture() {
  html2canvas(document.getElementById("scheme")).then(function (canvas) {
    console.log(canvas.toDataURL("image/jpeg"), 1);
    canvasdata = canvas.toDataURL("image/jpeg", 1);
    let a = document.createElement("a");
    a.textContent = "Cохранить схему";
    a.download = "export_" + Date.now() + ".jpeg";
    a.href = canvasdata;

    // Делаем кнопку сохранить активной и добавляем в нее ссылку
    saveBtn.disabled = false;
    saveBtn.textContent = "";
    saveBtn.appendChild(a);
  });
}

// reset btn
const deleteSchemes = () => {
  scheme.innerHTML = "";
  saveBtn.disabled = true;
  saveBtn.innerHTML = "";
  saveBtn.innerText = "Cохранить";
};

// buttons onclick function
const add = (sym) => {
  console.log(sym);
  switch (sym) {
    case "ot":
      scheme.innerHTML = scheme.innerHTML + '<img src="./pics/ot.svg">';
      break;
    case "ot-tupik":
      scheme.innerHTML = scheme.innerHTML + '<img src="./pics/ot-tupik.svg">';
      break;
    case "gvs":
      scheme.innerHTML = scheme.innerHTML + '<img src="./pics/gvs.svg">';
      break;
    case "gvs-tupik":
      scheme.innerHTML = scheme.innerHTML + '<img src="./pics/gvs-tupik.svg">';
      break;
    case "ts":
      scheme.innerHTML =
        scheme.innerHTML +
        '<img style="width:394px; height:264px" src="./pics/ts.svg">';
      break;
    case "ts-pod":
      scheme.innerHTML =
        scheme.innerHTML +
        '<img style="width:394px; height:264px" src="./pics/ts-pod.svg">';
      break;
    case "ov":
      scheme.innerHTML = scheme.innerHTML + '<img src="./pics/ov.svg">';
      break;
    case "ov-tupik":
      scheme.innerHTML = scheme.innerHTML + '<img src="./pics/ov-tupik.svg">';
      break;
    case "up":
      scheme.innerHTML = scheme.innerHTML + '<img src="./pics/up.svg">';
      break;
    case "down":
      scheme.innerHTML = scheme.innerHTML + '<img src="./pics/down.svg">';
      break;
  }
};
