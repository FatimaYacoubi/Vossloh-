
import HeroSection from "../../Components/HeroSection/HeroSection"
import Section1 from '../../Components/section1/section1';
import Partenairec from '../../Components/partenairescarousel/partenairec';
import Products from '../../Components/Products/products';
import Crowdfunding from "../../Components/crowdfunding/crowdfunding";

import Popchat from '../ChatPop/Popchat.js'
import Navbarr from "../../Components/Navbar/navbar";
import Shepherd from 'shepherd.js';
import Footer from "../../Components/Footer/footer";

function Home(){



return(

<>
<Navbarr />
<HeroSection />
{/* <div align="center" className="eventbackground">
<Events/> </div> */}

<Products/>

     <Section1 />
     <div>
</div>
    {/* <Crowdfunding /> */}
<br />

     <Partenairec />
     <Footer />
     <br />
     </>);
}
export default Home