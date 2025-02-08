import { useState, useEffect } from "react";
import ScrollToTopOnMount from "../ScrollToTopOnMount"

function Programs () {
    const [programs, setPrograms] = useState([]);
    const [visiblePrograms, setVisiblePrograms] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [searchResult, setSearchResult] = useState(null);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        fetch("/api/programs")
        .then((res) => res.json())
        .then((data) => setPrograms(data.programs));
    }, []);

    const toggleVisibility = (programId) => {
        setVisiblePrograms((prev) => ({
        ...prev,
        [programId]: !prev[programId],
        }));
    };

    const handleSearch = () => {
        setIsSearching(true);
        const term = searchTerm.toLowerCase();
        
        if (term === "") {
          setFilteredCourses([]);
          setSearchResult(null);
          setIsSearching(false);
          return;
        }
        
        const matchedCourses = programs.flatMap(program => 
          program.courses.filter(course => course.name.toLowerCase().includes(term))
        );
        
        setFilteredCourses(matchedCourses);
        setSearchResult(matchedCourses.length > 0 ? null : "Program not available");
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          handleSearch();
        }
    };

    return (
        <>
        <div id="programs">
            <ScrollToTopOnMount />
            <h1>Programs</h1>  	 
            <div className="flex gap-2 items-center justify-center w-full max-w-md">
                <input 
                type="text" 
                placeholder="Search for a course..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                onKeyDown={handleKeyDown}
                className="search-input"
                />
                <button 
                onClick={handleSearch} 
                className="search-button"
                >
                Search
                </button>
            </div>
            <div className="container">
                {isSearching ? (
                    filteredCourses.length > 0 ? (
                        <div className="border p-4 rounded-lg">
                            <h2 className="results-title">Search Results</h2>
                            {filteredCourses.map((course, index) => (
                            <p key={index} className="search-results">{course.name}</p>
                            ))}
                        </div>
                    ) : (
                        <p className="text-red-500">{searchResult}</p>
                    )
                ) : (
                    programs.map((program) => (
                    <div key={program.id} className="dropdown-container">
                        <div
                            className="dropdown-title" 
                            onClick={() => toggleVisibility(program.id)}
                        >
                            <p>{program.name}</p>
                            <p>({program.num_courses})</p>
                        </div>
                        
                        {visiblePrograms[program.id] ? (
                            <div className="program-list">
                            {program.courses.map((course, index) => (
                                <p key={index} className="course-list">{course.name}</p>
                            ))}
                            </div>
                        ) : null}
                    </div>
                    ))
                )}
            </div>
        </div>
      </>
    )
}

export default Programs