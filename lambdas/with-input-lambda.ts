export const HelloYou = async (event: any) => {
  console.log(event.a);
  console.log(typeof event.a)
 
  console.log(event.b);
  console.log(typeof event.b)

  let result = event.a + event.b
  return result;
}