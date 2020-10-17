async function getSVG(link, insertEl, anim){
  const res = await fetch(link)
  res.text().then(res => {
    document.querySelector(insertEl).innerHTML = res
    anim()
  })
}

getSVG('', '.scene1', scene1Anim)
getSVG('', '.scene2', scene2Anim)

