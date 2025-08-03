// import  SearchBar from "./SearchBar.jsx";
import { SearchBar } from "./SearchBar.jsx";
export function AppBar(){
    return(
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div>
              youtube 
            </div>


            <div>
               <SearchBar />
            </div>

            <div>
                sign in
            </div>
        </div>
    )
 }