import {useState, useEffect} from 'react'

const useApi = (url) => { 
        let abortCont = new AbortController()

        let [data, editData]= useState( null )
        let [apiStatus, setStatus] = useState(true)
        let [apiError, setApiError] = useState(null)

        useEffect(()=> {
            fetch(url, {signal: abortCont.signal})
                    .then(res=> {
                    // console.log(res.json())
                    return res.json()

                })
                .then(res=>{
                    editData(res)
                    setStatus(false)
                    setApiError(false)
                })
                .catch( err => {
                    // console.log(e.message);
                    if(err.name === 'AbortError'){
                        console.log('fetch cleaned')
                    }else{
                        setStatus(false)
                        setApiError(err.message)
                        // throw "Server error"
                    }
                })
                .then( ()=> {
                    // always executed
                });
                return () => abortCont.abort()
        }, [url])

        return {data, apiStatus, apiError}
}
 
export default useApi;