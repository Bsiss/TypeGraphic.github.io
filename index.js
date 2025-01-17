 document.addEventListener("mousemove", function (event) {
     const x = event.pageX
     const y = event.pageY

     document.querySelectorAll("div").forEach(div => {
         const dx = div.offsetLeft + 50 - x
         const dy = div.offsetTop + - y
         const dist = Math.sqrt(dx * dx + dy * dy)
         const score = Math.exp(dist * -0.003)

         //div.innerHTML = Math.round(dist)
         div.style.transform = "scale(" + score + ")"
         div.style.fontWeight = 100 + (100 * Math.round(8 * score))
     })
 })

