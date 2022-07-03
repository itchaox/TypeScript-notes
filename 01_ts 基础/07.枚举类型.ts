enum D {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM
}

function changeWay(d: D) {
  switch (d) {
    case D.LEFT:
      console.log('左转');
      break
    case D.RIGHT:
      console.log('右转');
      break
    case D.TOP:
      console.log('向上');
      break
    case D.BOTTOM:
      console.log('向下');
      break
    default:
      console.log('默认值');
  }
}

changeWay(D['LEFT'])