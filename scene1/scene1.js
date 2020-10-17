const scene1Anim = () => {
  TweenMax.set('#IsoSVG', {opacity:1})
  //------------------computer Worker-------------------------//
  new TimelineMax()
  .from('#moveGroupCompWrk >*:nth-child(1)', 0.3, {opacity:0}, 'compWrkAppears')
  .from('#moveGroupCompWrk >*:nth-child(2)', 0.4, {y:-20, opacity:0}, 'compWrkAppears+=0.3')
  .from('#moveGroupCompWrk >*:nth-child(4)', 0.4, {y:-15, opacity:0}, 'compWrkAppears+=0.6')
  .from('#moveGroupCompWrk >*:nth-child(5)', 0.4, {y:-15, opacity:0}, 'compWrkAppears+=0.9')
  .from('#moveGroupCompWrk >*:nth-child(6)', 0.4, {y:-15, opacity:0}, 'compWrkAppears+=1.2')
  .from('#moveGroupCompWrk >*:nth-child(7)', 0.4, {y:-15, opacity:0, 
  onComplete: () => { manWalkFrom.paused(false) }}, 'compWrkAppears+=1.5')
  .from('#moveGroupCompWrk >*:nth-child(3)', 0.3, {opacity:0, 
  onComplete: () => { titleTxt.paused(false); expertTxt.paused(false); }}, 'compWrkAppears+=1.8')

  const expertTxt = new TimelineMax({paused: true})
  let exprtDel = 0
  for (let i = 1; i < 20; i++) {
    expertTxt.from(`#textBlock >*:nth-child(3) >*:nth-child(${i})`, 0.2, 
    {transformOrigin: '50% 50%', opacity:0, scale:1.4}, `expertTxt+=${exprtDel}`)
    exprtDel+=0.1
  }

  const titleTxt = new TimelineMax({paused: true})
  let titleTxtDel = 0
  for (let i = 1; i < 28; i++) {
    titleTxt.from(`#textBlock >*:nth-child(4) >*:nth-child(${i})`, 0.13, 
    {transformOrigin: '50% 50%', opacity:0, scale:1.5}, `titleTxt+=${titleTxtDel}`)
    if(i < 24) titleTxtDel+=0.05
  }
  for (let i = 1; i < 24; i++) {
    titleTxt.from(`#textBlock >*:nth-child(5) >*:nth-child(${i})`, 0.13, 
    {transformOrigin: '50% 50%', opacity:0, scale:1.5}, `titleTxt+=${titleTxtDel}`)
    titleTxtDel+=0.05
  }

  TweenMax.from('#plantCompWrk>*:nth-child(4)', 3, {transformOrigin: '50% 100%', scale:0.7, repeat:-1, yoyo:true, ease: Power0.easeNone})
  TweenMax.set('#manWlkTo', {opacity:0})
  TweenMax.to('#moveGroupCompWrk', 1, {y:-2, repeat:-1 ,yoyo:true, ease: Power0.easeNone})

  const manWalkFrom = new TimelineMax({repeat:-1, paused: true})
  .to('#manWlkFrom', 4.8, {x:-82, y:60, ease: Power0.easeNone}, 'stepsFrom')

  .fromTo('#legsCompWrk2 >*:nth-child(1)', 1.2, {rotation:0}, 
  {transformOrigin: '60% 0%', rotation:-10.5, yoyo:true, repeat:3, ease: Power0.easeNone}, 'stepsFrom')
  .fromTo('#legsCompWrk2 >*:nth-child(2)', 1.2, {rotation:0}, 
  {transformOrigin: '60% 0%', rotation:10.5, yoyo:true, repeat:3, ease: Power0.easeNone}, 'stepsFrom')
  .to('#handCompWrk2', 1.2, {transformOrigin: '80% 0%', rotation:6,yoyo:true, repeat:3, ease: Power0.easeNone}, 'stepsFrom')
  .fromTo('#headCompWrk2', 1.2, {rotation:-2}, 
  {transformOrigin: '50% 100%', rotation:3, yoyo:true, repeat:3, ease: Power0.easeNone}, 'stepsFrom')

  .set('#manWlkFrom', {opacity:0})
  .set('#manWlkTo', {opacity:1})

  .fromTo('#legsManWlkTo >*:nth-child(1)', 1.2, {rotation:1}, 
  {transformOrigin: '60% 0%', x:3, rotation:-8, yoyo:true, repeat:3, ease: Power0.easeNone}, 'stepsTo')
  .fromTo('#legsManWlkTo >*:nth-child(2)', 1.2, {rotation:-1}, 
  {transformOrigin: '60% 0%', x:-2, rotation:8, yoyo:true, repeat:3, ease: Power0.easeNone}, 'stepsTo')
  .to('#handWrkCmp2', 1.2, {transformOrigin: '5% 0%', rotation:4, yoyo:true, repeat:3, ease: Power0.easeNone}, 'stepsTo')
  .fromTo('#headWrkCmp2', 1.2, {rotation:-2}, {transformOrigin: '50% 100%', rotation:3, yoyo:true, repeat:3, ease: Power0.easeNone}, 'stepsTo')
  .to('#manWlkTo', 4.8, {x:82, y:-60, ease: Power0.easeNone}, 'stepsTo')

  //------------------car Worker-------------------------//
  const appearsElCarWrk = new TimelineMax()
  .from('#moveGroupCarWrk >*:nth-child(1)', 0.3, {opacity:0}, 'carWrkAppears')
  .from('#moveGroupCarWrk >*:nth-child(8)', 0.4, {y:-20, opacity:0}, 'carWrkAppears+=0.3')
  .from('#moveGroupCarWrk >*:nth-child(9)', 0.4, {y:-20, opacity:0}, 'carWrkAppears+=0.6')
  .from('#moveGroupCarWrk >*:nth-child(3)', 0.2, {y:-10, opacity:0}, 'carWrkAppears+=0.9')
  .from('#moveGroupCarWrk >*:nth-child(4)', 0.2, {y:-10, opacity:0}, 'carWrkAppears+=1')
  .from('#moveGroupCarWrk >*:nth-child(5)', 0.2, {y:-10, opacity:0}, 'carWrkAppears+=1.1')
  .from('#moveGroupCarWrk >*:nth-child(10)', 0.4, {y:-20, opacity:0}, 'carWrkAppears+=1.2')
  .from('#moveGroupCarWrk >*:nth-child(2)', 0.4, {y:-15, opacity:0}, 'carWrkAppears+=1.5')
  .from('#moveGroupCarWrk >*:nth-child(6)', 0.4, {y:-15, opacity:0, onComplete: () => {carWrk.paused(false)}}, 'carWrkAppears+=1.8')
  .from('#moveGroupCarWrk >*:nth-child(7)', 0.4, {y:-15, opacity:0}, 'carWrkAppears+=2.1')

  TweenMax.to('#moveGroupCarWrk', 1, {y:-2, repeat:-1 ,yoyo:true, ease: Power0.easeNone})
  TweenMax.set('#sparks > *', {opacity:0, x:5})
  let delSparl = 0
  const carWrk = new TimelineMax({paused: true})
  .to('#bodyCarWrk', 1, {transformOrigin: '80% 90%', rotation:-7, ease: Power0.easeNone}, 'mecahnis')
  .to('#handLeftCarWrk', 1, {transformOrigin: '100% 0%', rotation:-7, y:1, ease: Power0.easeNone}, 'mecahnis')
  .to('#mechanism', 1, {transformOrigin: '100% 90%', rotation:-6, ease: Power0.easeNone}, 'mecahnis')
  .to('#headCarWrk', 1, {transformOrigin: '50% 100%', rotation:-10, ease: Power0.easeNone}, `mecahnis`)

  for (let i = 1; i < 17; i++) {
    carWrk.to(`#sparks >*:nth-child(${i})`, 0.15, {opacity:1, x:0, repeat:30}, `spark+=${delSparl}`)
    delSparl+=0.1
    if(i == 12) delSparl = 0
  }
  carWrk
  .to('#sparks', 0.2, {opacity:0},`spark+=4.2`)

  .to('#bodyCarWrk', 1, {rotation:0, ease: Power0.easeNone},`spark+=4.4`)
  .to('#handLeftCarWrk', 1, {rotation:0, y:0, ease: Power0.easeNone},`spark+=4.4`)
  .to('#mechanism', 1, { rotation:0, ease: Power0.easeNone},`spark+=4.4`)
  .to('#headCarWrk', 1, { rotation:0, ease: Power0.easeNone, onComplete: () => {
    setTimeout(() => {
      carWrk.progress(0).restart()
    }, 300);
  }},`spark+=4.4`)
  carWrk.timeScale(1.2)

  const shelves = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:1})
  .to('#shelvesOne', 2, {x:8, y:-4}, 'shelvesOne')
  .to('#allShelvesOne >*:nth-child(2)', 1.4, {x:5.5, y:-2}, 'shelvesOne')

  .to('#shelvesTwo', 2, {x:13, y:-8}, 'shelvesOne+=0.4')
  .to('#allShelvesTwo >*:nth-child(2)', 1.4, {x:11.5, y:-6}, 'shelvesOne+=0.4')
  shelves.timeScale(1.5)
}