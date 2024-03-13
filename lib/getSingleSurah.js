export default async function getSingleSurah(id){
    const res = await fetch(`https://alquran-api-fd8aa81e43c7.herokuapp.com/surah/${id}`)
    const data = await res.json()
    return data.data
}