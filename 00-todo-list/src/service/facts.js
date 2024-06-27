const URL_RAMDON_CATS = 'https://catfact.ninja/fact'

export const getRandomFact = async () =>{
    const res = await fetch(URL_RAMDON_CATS)
    const data = await res.json()
    const { fact } = data
    return fact
}