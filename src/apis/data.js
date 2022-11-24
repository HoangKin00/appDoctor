const URL = 'src/apis/data.json';
export const filterData = async ({ service, address }) => {
    try {
        const serviceData = []
        const addressdata = []

        const ress = await fetch(URL)
        const dt = await ress.json()
        for (let item of dt) {
            if (item.adress === address) addressdata.push(item)
            item.service.forEach(e => {
                if (e === service) {
                    serviceData.push(item)
                }
            })
        }
        const serviceFilter = service === '' ? dt : serviceData
        const addressFilter = address === 'Tất cả' ? dt : addressdata
        const renderData = serviceFilter.filter((item) => {
            return addressFilter.indexOf(item) !== -1
        })
        return renderData
    } catch (error) {
        console.log(error);
    }
}
