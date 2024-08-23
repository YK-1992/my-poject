import "./bookings.css";

const Bookings = () => {
  return (
    <div className="b-wrapper">
      <div className="b-container">
        {/* left block */}
        <section className="left-section">
          <div className="b-textTitle">
            <h3>Fast & Easy</h3>
            <h1>Get Your Favourite Resort Bookings</h1>
</div>
            <div className="block-info">

            <div className="book-info">
              <img src="./Group 7.png" alt="" />

              <div className="b-text">
                <h4>Choose Destination</h4>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </span>
              </div>
            </div>
            <div className="book-info">
              <img src="./Group 11.png" alt="" />

              <div className="b-text">
                <h4>Check Availability</h4>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </span>
              </div>
            </div>
            <div className="book-info">
              <img src="./Group 12.png" alt="" />

              <div className="b-text">
                <h4>Let’s Go</h4>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </span>
              </div>
            </div>

            </div>
                     
        </section>

        {/* right block */}

        <div className="right-container">
           <div className="right-selection">

          <img className="img-block" src="./Rectangle 17.png" alt="" />
         <div className="dataTime-block">
            <span>14-29 June</span>
            <span>by JR Martin</span>
            <div className="iconBlock">
                <img  src="./Group.png" alt="" />
                <img src="./leaf 1.png" alt="" />
                <img src="./telegram.png" alt="" />
            </div>
            <div className="peopleBlock">
                <img src="./bild.png" alt="" />
                <span>60 people are interested</span>
                <img className="herdsImg" src="./heart (6) 1.png" alt="" />
            </div>
         </div>
 </div>
      
 <div className="planer-block">
    <img src="./airplan.png" width={230} alt="" />
 </div>
 <div className="star-element">
  <img className="img-element" src="./Element.png" alt="" />
 </div>
        </div>
      
      </div>
    </div>
  );
};

export default Bookings;
