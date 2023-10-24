import {Link, useNavigate} from 'react-router-dom'


function Home() {
    return (
        <form>
        
        <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
        Sign up
         </Link>

         </form>
    );
}
export default Home;