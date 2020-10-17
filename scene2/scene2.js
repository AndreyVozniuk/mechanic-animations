const scene2 = () => {
  TweenMax.set('#IsoSVG', {opacity:1})
  //------------------computer Worker-------------------------//

  new TimelineMax()
  .from('#moveGroupCompWrk >*:nth-child(1)', 0.3, {opacity:0}, 'compWrkAppears')
  .from('#moveGroupCompWrk >*:nth-child(2)', 0.4, {y:-20, opacity:0}, 'compWrkAppears+=0.3')
  .from('#moveGroupCompWrk >*:nth-child(4)', 0.4, {y:-15, opacity:0}, 'compWrkAppears+=0.6')
  .from('#moveGroupCompWrk >*:nth-child(5)', 0.4, {y:-15, opacity:0}, 'compWrkAppears+=0.9')
  .from('#moveGroupCompWrk >*:nth-child(6)', 0.4, {y:-15, opacity:0}, 'compWrkAppears+=1.2')
  .from('#moveGroupCompWrk >*:nth-child(3)', 0.3, {opacity:0, onComplete: () => { titleTxt.paused(false); expertTxt.paused(false) }}, 'compWrkAppears+=1.3')

  const expertTxt = new TimelineMax({paused: true})
  let exprtDel = 0
  for (let i = 1; i < 20; i++) {
  expertTxt.from(`#textBlock >*:nth-child(3) >*:nth-child(${i})`, 0.2, {transformOrigin: '50% 50%', opacity:0, scale:1.4}, `expertTxt+=${exprtDel}`)
  exprtDel+=0.1
  }

  const titleTxt = new TimelineMax({paused: true})
  let titleTxtDel = 0
  for (let i = 1; i < 28; i++) {
  titleTxt.from(`#textBlock >*:nth-child(4) >*:nth-child(${i})`, 0.13, {transformOrigin: '50% 50%', opacity:0, scale:1.5}, `titleTxt+=${titleTxtDel}`)
  if(i < 24) titleTxtDel+=0.05
  }
  for (let i = 1; i < 24; i++) {
  titleTxt.from(`#textBlock >*:nth-child(5) >*:nth-child(${i})`, 0.13, {transformOrigin: '50% 50%', opacity:0, scale:1.5}, `titleTxt+=${titleTxtDel}`)
  titleTxtDel+=0.05
  }

  TweenMax.to('#headCompWrk', 1, {transformOrigin: '50% 100%', rotation:7, repeat:-1, ease: Power0.easeNone, repeatDelay:0.3, yoyo:true})
  TweenMax.to('#leftMittCompWrk, #rightMittCompWrk', 0.7, {x:1, y:1, repeat:-1, yoyo:true, ease: Power0.easeNone})
  TweenMax.from('#pictureOnMonitor >*:nth-child(2)', 1.3, {opacity:0, repeat:-1, yoyo:true, repeatDelay:0.2})
  TweenMax.from('#pictureOnMonitor >*:nth-child(1)', 1.3, {opacity:0, delay:0.6, repeat:-1, yoyo:true, repeatDelay:0.2})
  TweenMax.from('#plantCompWrk>*:nth-child(4)', 3, {transformOrigin: '50% 100%', scale:0.7, repeat:-1, yoyo:true, ease: Power0.easeNone})
  TweenMax.to('#moveGroupCompWrk', 1, {y:-2, repeat:-1 ,yoyo:true, ease: Power0.easeNone})

  let delLeftFingers = 0
  const fingersLeftHand = new TimelineMax()
  for (let i = 0; i < 7; i++) {
  if(i != 4){
    fingersLeftHand.to(`#leftMittCompWrk >*:nth-child(${i})`, 0.5, {transformOrigin: '0% 100%', rotation:-6, repeat:-1, ease: Power0.easeNone, yoyo:true}, `fingersLeft+=${delLeftFingers}`)

    delLeftFingers+=0.4
  }
  }

  let delRightFingers = 0								
  const fingersRightHand = new TimelineMax()
  for (let i = 0; i < 6; i++) {
  if(i != 5){
    fingersRightHand.to(`#rightMittCompWrk >*:nth-child(${i})`, 0.5, {transformOrigin: '0% 100%', rotation:-6, repeat:-1, ease: Power0.easeNone, yoyo:true}, `fingersLeft+=${delRightFingers}`)

    delRightFingers+=0.4
  }
  }
  //------------------car Worker-------------------------//

  new TimelineMax()
  .from('#moveGroupCarWrk >*:nth-child(1)', 0.3, {opacity:0}, 'carWrkAppears')
  .from('#moveGroupCarWrk >*:nth-child(8)', 0.4, {y:-20, opacity:0}, 'carWrkAppears+=0.3')
  .from('#moveGroupCarWrk >*:nth-child(9)', 0.4, {y:-20, opacity:0}, 'carWrkAppears+=0.6')
  .from('#moveGroupCarWrk >*:nth-child(3)', 0.2, {y:-10, opacity:0}, 'carWrkAppears+=0.9')
  .from('#moveGroupCarWrk >*:nth-child(4)', 0.2, {y:-10, opacity:0}, 'carWrkAppears+=1')
  .from('#moveGroupCarWrk >*:nth-child(5)', 0.2, {y:-10, opacity:0}, 'carWrkAppears+=1.1')
  .from('#moveGroupCarWrk >*:nth-child(2)', 0.4, {y:-15, opacity:0}, 'carWrkAppears+=1.2')
  .from('#moveGroupCarWrk >*:nth-child(6)', 0.4, {y:-15, opacity:0}, 'carWrkAppears+=1.5')
  .from('#moveGroupCarWrk >*:nth-child(7)', 0.4, {y:-15, opacity:0}, 'carWrkAppears+=1.8')

  TweenMax.to('#lightsYellowLeft, #lightsYellowRight', 0.6, {opacity:0, repeat:-1,yoyo:true})
  TweenMax.to('#moveGroupCarWrk', 1, {y:-2, repeat:-1 ,yoyo:true, ease: Power0.easeNone})

  new TimelineMax({repeat:-1})
  .set('#lightTablet', {opacity: 0})
  .to('#leftHandCarWrk', 1, {transformOrigin: '100% 100%', rotation:7}, 'moveUp')
  .to('#rightHandCarWrk', 1, {transformOrigin: '100% 100%', rotation:4}, 'moveUp')
  .to('#tablet', 1, {y:-5, x:3}, 'moveUp')
  .to('#bodyCarWrk', 1, {transformOrigin: '85% 100%', rotation:7}, 'moveUp')
  .to('#headCarWrk', 1, {transformOrigin: '50% 100%', rotation:4}, 'moveUp')
  .to('#movePicTbl', 1, {y:-3}, 'moveUp')

  .to('#lightTablet', 0.3, {opacity:0.4, repeat:1, yoyo:true}, 'lightFirstTime')
  .to('#movePicTbl', 0.1, {opacity:0, repeat:1, yoyo:true}, 'lightFirstTime+=0.1')

  .to('#leftHandCarWrk', 1, {rotation:-7}, 'moveDown')
  .to('#rightHandCarWrk', 1, {rotation:-9}, 'moveDown')
  .to('#tablet', 1, {y:5, x:-3}, 'moveDown')
  .to('#headCarWrk', 1, {rotation:-9}, 'moveDown')
  .to('#bodyCarWrk', 1.4, {transformOrigin: '85% 100%', rotation:-5}, 'moveDown')
  .to('#movePicTbl', 1.4, {y:1}, 'moveDown')

  .to('#lightTablet', 0.3, {opacity:0.4, repeat:1, yoyo:true}, 'lightSecondTime')
  .to('#movePicTbl', 0.1, {opacity:0, repeat:1, yoyo:true}, 'lightSecondTime+=0.1')


  .to('#leftHandCarWrk', 1, {rotation:0}, 'moveDefault')
  .to('#rightHandCarWrk', 1, {rotation:0}, 'moveDefault')
  .to('#tablet', 1, {y:0, x:0}, 'moveDefault')
  .to('#headCarWrk', 1, {rotation:0}, 'moveDefault')
  .to('#bodyCarWrk', 1.4, {transformOrigin: '85% 100%', rotation:0}, 'moveDefault')
  .to('#movePicTbl', 1, {y:0}, 'moveDefault')

  .to('#lightTablet', 0.3, {opacity:0.4, repeat:1, yoyo:true}, 'lightThirdTime')
  .to('#movePicTbl', 0.1, {opacity:0, repeat:1, yoyo:true}, 'lightThirdTime+=0.1')

  const shelves = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:1})
  .to('#shelvesOne', 2, {x:8, y:-4}, 'shelvesOne')
  .to('#allShelvesOne >*:nth-child(2)', 1.4, {x:5.5, y:-2}, 'shelvesOne')

  .to('#shelvesTwo', 2, {x:13, y:-8}, 'shelvesOne+=0.4')
  .to('#allShelvesTwo >*:nth-child(2)', 1.4, {x:11.5, y:-6}, 'shelvesOne+=0.4')
  shelves.timeScale(1.5)
}