let i = 0;
const style = `
  /*画一个太极图
  *先画一个⚪
  */
  #taiji {
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,1);
  border: none;
  background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/*再画出阴阳鱼☯
*/
#taiji::before {
  background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
  transform: translateX(50%);
}
#taiji::after {
  background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
  transform: translateX(50%);
}`
const html = document.querySelector("#html");
const styleElement = document.querySelector("#style")
let h = setInterval(() => {
  let s = style[i];
  styleElement.innerHTML += s;
  if (s === "\n") {
    s = "<br>"
  } else if (s === " ") {
    s = "&nbsp;"
  }
  html.innerHTML += s;
  i++;
  window.scrollTo(0, 99999);
  html.scrollTo(0, 99999);
  if (i >= style.length) {
    clearInterval(h);
  }
}, 50);