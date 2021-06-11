


export const getApiResource = async (url) => {
    try {
        const res = await fetch(url)

        if (!res.ok) {
            console.error('Could not fetch', res.status)
            return false
        }

        return await res.json()

    } catch (e) {
        console.log(e.message)
        return false
    }


}

    //
    // (async ()=> {
    //     const data = await getApiResource(`${SWAPI_ROOT}${SWAPI_PEOPLE}`)
    //     console.log(data)
    // })()

