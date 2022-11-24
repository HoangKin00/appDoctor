const URL = 'src/apis/information.json'

export const getInfoBySerrvice = async ({service}) => {
    try {
        const res = await fetch(URL)
        const  data = await res.json()
        const newData = data.filter( item => {
            return item.service === service
        })
        return newData[0]
    } catch (error) {
        console.log(error);
    }
}