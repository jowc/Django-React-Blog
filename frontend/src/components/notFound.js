import SearchBar from "./searchbar"

const NotFound = () => {
    return ( 
        <div className="flex flex-col justify-center m-auto mt-12">
            <div>
                <h1 className="text-4xl text-center my-6">404 Error:(</h1>
                <SearchBar />
            </div>
        </div>
     );
}
 
export default NotFound;