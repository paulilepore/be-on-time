const updateTime = () => {
  const times = document.querySelectorAll(".bus-arrival")
  if (times.length > 0) {
    times.forEach((time) => {
      setInterval(async () => {
        if (time.innerrHTML > 0) time.innerHTML -= 1
      }, 6000)
    })
  }
}


export { updateTime }