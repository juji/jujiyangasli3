
function easeOutElastic(x) {
    const c4 = (2 * Math.PI) / 3;
    
    return x === 0
      ? 0
      : x === 1
      ? 1
      : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
}


const increment = 0.001

let str = '@keyframes easeOutElastic {'
for(let i=0; i<=1;i+=increment){
  str += `
  ${ Math.round( i*10000 ) / 100 }% {
    transform: scale3d(1,${easeOutElastic(i)},1);
  }
`

}

str += `
  100% {
    transform: scale3d(1,1,1);
  }
}
`

console.log(str)