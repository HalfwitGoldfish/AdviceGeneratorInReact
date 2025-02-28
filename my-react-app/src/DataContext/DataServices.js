export const getAdvice = async () =>
{
    let rng = Math.floor( (Math.random() * 223) + 1 );
    const response = await fetch(`https://api.adviceslip.com/advice/${rng}`);
    const data = await response.json();
    return data;
}