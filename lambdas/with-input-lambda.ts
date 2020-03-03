export const HelloYou = (event: any) => {
  const result = event.a + event.b;
  console.log(event.a, event.b, result);
  console.log('Hello you! I am lambda! Returning aum of two provided numbers. :D ');

  return result;
}