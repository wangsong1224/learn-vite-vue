function interview1(count) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (Math.random() < 0.8) {
        resolve('success')
      } else {
        var error = new Error('fail')
        error.count = count
        reject(error)
      }
    }, 500)
  })
}

var inter = async function () {
  try {
    await interview1(1)
    await interview1(2)
    await interview1(3)
  } catch (e) {
    console.log('cry at ' + e.count + ' round')
  }
  console.log('smile')
}
  // inter()

  (async function () {
    try {
      await interview1(1)
      await interview1(2)
      await interview1(3)
    } catch (e) {
      console.log('cry at ' + e.count + ' round')
    }
    console.log('smile')
  })()
