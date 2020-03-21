function getRandomInt(max:number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export const HelloYou = async () => {

  let a = getRandomInt(50);
  let b = getRandomInt(50);
  let result = a + b;
  //console.log(a, b, result);
  //console.log('Hello you! I am lambda! Returning sum of two random numbers. :D ');
  return result;
}