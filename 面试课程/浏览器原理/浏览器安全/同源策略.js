/**
 * 
 */
fetch('http://127.0.0.1:7001/name')
  .then(res => {
    console.log(res)
  }).then(data => {
    console.log(data)
  })