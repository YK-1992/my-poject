
import './honey.css'

const HoneyBlock = () => {
    return(
        <div className="honey-wrapper">
            <div className="honey-container">
           
           {/* left  */}
       <div className="img-content">
     
      <img src="./imageR.png" alt="" />

       </div>
             {/* right content */}
         
         <div className="right-block">
            <h1>Honeymoon Specials </h1>
          <h2>Our Romantic Tropical Destinations</h2>
          <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
         
         <button className='btn-tap btn-h'> View Packages</button>
         </div>
          
            </div>
</div>
        
    )
}

export default HoneyBlock;