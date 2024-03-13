export default async function getAllSurah(){
    const res = await fetch("https://alquran-api-fd8aa81e43c7.herokuapp.com/surah")
    const data = await res.json()
    return data.data
}