import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search({ setSearchTerm }) {
    return (
     <div className="mb-6 flex items-center gap-2 border border-gray-200 w-fit px-3 py-3 rounded-md  ">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input 
              type="text"
              placeholder="Search tasks" 
              className="text-xs outline-none w-48"
              onChange={(e) => setSearchTerm(e.tasks.id)}
            />
     </div>
    )
}
export default Search;