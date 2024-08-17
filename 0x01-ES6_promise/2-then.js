export default function handleResponseFromAPI(promise) {
    return promise
        .then(() => {
            console.log("Got a repsonse from API");
            return {
                status: 200,
                body: 'Success'
            };
        })
        .catch(() => {
            console.log('Got a response from API');
            return Error();
        })
}
