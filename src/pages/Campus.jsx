import Slideshow from "./slideshow"

function Campus () {
    return (
        <>
        <div id="campus">
            <h1>Life at ru</h1>
            <Slideshow />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam laudantium nemo corrupti deleniti, nesciunt alias accusantium. Amet ab perferendis cumque illum culpa numquam adipisci veritatis temporibus quos, possimus maiores?</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minus placeat facilis, vero labore soluta dolorum! Corporis rem, fugit rerum autem expedita, non natus, adipisci voluptate sed quisquam laboriosam consequatur?</p>

            <div className="campus-content">
                <hr />
                <div className="campus-cell">
                <div>
                    <h3>RU Events</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ullam expedita repudiandae. Suscipit, iusto! Sunt facere laboriosam neque officia vitae, possimus voluptates ipsum odio! Alias quaerat facilis aut commodi esse.</p>
                    <a href="#" className="campus-sub">Check out what's happening!</a>
                </div>
                </div> 
                <hr /> 
                <div className="campus-cell">
                <div>
                    <h3>Clubs and Recreation</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum labore numquam alias. Velit, iusto. Non assumenda tenetur accusantium, cupiditate mollitia enim ipsum, veritatis atque vitae commodi corrupti consectetur aut labore!</p>
                    <a href="#" className="campus-sub">Choose from over 200 clubs — or start your own.</a>
                </div>
                </div>
                <hr />
                <div className="campus-cell">
                <div>
                    <h3>Student Life</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ullam expedita repudiandae. Suscipit, iusto! Sunt facere laboriosam neque officia vitae, possimus voluptates ipsum odio! Alias quaerat facilis aut commodi esse.</p>
                    <a href="#" className="campus-sub">Get insider tips from other RU students.</a>
                </div>
                </div>  
                <hr />
                <div className="campus-cell">
                <div>
                    <h3>Housing & Dining</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum labore numquam alias. Velit, iusto. Non assumenda tenetur accusantium, cupiditate mollitia enim ipsum, veritatis atque vitae commodi corrupti consectetur aut labore!</p>
                    <a href="#" className="campus-sub">Explore all options</a>
                </div>
                </div>
                <hr />
            </div>
        </div>
        </>
    )
}

export default Campus