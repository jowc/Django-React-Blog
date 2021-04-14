import {useState, useEffect} from 'react'

const useApi = (url) => { 

        let [data, editData]= useState( null )
        let [apiStatus, setStatus] = useState(true)
        let [apiError, setApiError] = useState(null)

        useEffect(()=> {
            fetch(url)
                    .then(res=> {
                    // console.log(res.json())
                    return res.json()

                })
                .then(res=>{
                    editData(res)
                    setStatus(false)
                    setApiError(false)
                })
                .catch( e => {
                    // console.log(e.message);
                    setStatus(false)
                    // throw "Server error"
                    setApiError(e.message)
                })
                .then( ()=> {
                    // always executed
                });
                // Post request code here
                /*
                axios.post('/user', {
                    firstName: 'Fred',
                    lastName: 'Flintstone'
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
                */
        }, [url])

        return {data, apiStatus, apiError}
}
 
export default useApi;