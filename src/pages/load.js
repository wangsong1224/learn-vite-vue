export function load(src) {
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src
  // debugger
  document.body.appendChild(script);
}