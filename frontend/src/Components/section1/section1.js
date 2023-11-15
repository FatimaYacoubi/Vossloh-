import "./section1.css"
import bg from "./olive.png"

function Section1(){
    return(
       <div>
        <div className="bodyparralax">
<section className="parallax-container parallax-container2">
 <div className="cardfilieresbox-parralax">
 <div className="Aboutus">

 <img src={bg} alt="" /> 
  <div className="Aboutus-box">
     <div className="Aboutus-title">
    WHAT WE DO EXACTLY
    </div>
    <div className="Aboutus-p">
    Vossloh Schwabe est une entreprise allemande qui fait partie du groupe Vossloh, spécialisée dans la fabrication de composants d'éclairage et de systèmes de contrôle pour l'éclairage. Vossloh Schwabe produit des ballasts, des lampes LED, des systèmes de gestion de l'éclairage, des régulateurs, et d'autres produits liés à l'éclairage.

    

    </div>

    <div className="Aboutus-p2">
    We are a team of ingineering students who want to propose a solution for a real problem within our community 
    
    
    

    </div>
    <div className="Aboutus-signature">
Contactez Nous    
    

    </div>
  </div>
 </div>
 </div>
</section>


        </div>
</div>
    )
}
export default Section1;