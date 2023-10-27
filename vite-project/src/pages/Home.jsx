import {Link, useNavigate} from 'react-router-dom'
import Header from "./Header";



function Home() {
    return (
        
        <div>
            <Header />
            <div class="banner">
                <div class="left-banner">
                    <h1><b>Art Viewing Done Right</b></h1>
                    <h3>Example text for the website</h3>
                    <p>example description of the website</p>
                    <div class="btn">
                    <button class="button main-btn">Learn More</button>
                    <button class="button secondary-btn">Sign Up</button>
                    </div>
                </div>
                <div class="left-banner">
                    <img src="./images/art2.jpg"/>
                </div>
            </div>
        </div>
    );

}export default Home;