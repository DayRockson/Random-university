import { Link } from "react-router"
function Academics () {
    return (
        <>
            <div id="academics">
                <h1>Academics</h1>
                <img src="/images/student-and-math.jpg" alt="a female student in front of a white board filled with mathematical equations"/>
                <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
                beatae vitae dicta sunt explicabo. <br/><br />
                
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                adipisci velit, sed quia non numquam eius modi tempora incidunt ut 
                labore et dolore magnam aliquam quaerat voluptatem.
                </p>
        
                <h2>Academic Excellence</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, unde? Quaerat explicabo officia neque accusamus. Dolores odit perferendis deserunt? Aspernatur, fugit officiis. Harum atque sed laborum cumque magnam libero numquam!</p>
                <h2>Academic Calender</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem soluta minima enim fugiat harum cum ipsam laudantium voluptatibus ex possimus consequuntur corporis placeat, delectus accusamus, iure unde ab esse pariatur?</p>
                <ul>
                    <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                    <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                </ul>
                <h2>Faculties and Schools</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque beatae facere, aliquam in magnam explicabo ab quo harum reiciendis cum maiores amet repudiandae est corporis rem ratione qui pariatur sapiente?</p>
                <h2>To Graduates</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam illum iste voluptatibus officia. Similique reiciendis deserunt magni incidunt id voluptate praesentium accusamus, ducimus soluta nostrum tempore ex facilis aut veniam?</p>
                <ul>
                    <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                    <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                </ul>
        
                <div className="explore">
                  <Link to="/programs" className="program-explore">Explore our programs</Link>
                </div>
            </div>
        </>
    )
}

export default Academics