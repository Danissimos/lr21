function s1(){
    let newWindow = window.open("");
    newWindow.document.write("<div id='example'>Страница, которая есть, но ее нет...</div>");
    let example = newWindow.document.querySelector("#example")
    example.style.cssText = `color: red;
                       background-color: yellow;
                       font-style: italic;
                       font-size: 25px;
                       text-align: center;`
    setTimeout(() => newWindow.close(), 2000);
}
function s2(){
    alert("Предупреждение, не нажимать на ссылку")
}
function s3(){  
    let elements = document.querySelectorAll(".conc");
    let result = "";
    for (let item of elements) {
        result += item.innerText + " ";
    }
    placeString(result)
}
function placeString(string) {
    let target = document.querySelector(".div2")
    target.innerHTML = `<div>${string}</div>`
}

function runClock() {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    let time = h + ":" + m + ":" + s;

    let clockObj = document.querySelector("#clock")
    clockObj.innerText = time;

    setTimeout(runClock, 1000)

}

runClock()
