 const fetcher = async (endpoint: string) => {

    try {

        const request = await fetch(endpoint);
        const json = await request.json();
        console.log(request);
        return json;

    } catch (err) {
        if (err) console.log(err);
    }
 }

 export default fetcher