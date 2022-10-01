import React from 'react'
import Base from '../components/Base'
import CardForHome from '../components/CardForHome'
import "./Home.css"
function Home() {
  return (
    <>
      <Base></Base>
      
      <div className='heading' align="center" >
        <h1 >
          SCRAP TO US <br />
          FOR GOOD VALUE
        </h1>
        <span>Sell your scrap and help contibute to circular economy</span>
      </div>

      <div className='services ' >
        {/* <CardGroup> */}
        <div className='individuals' style={{ marginLeft: '35px', padding: '20px' }} >
          <CardForHome />
        </div>
      </div>
      <div className="popular-wthree" id="about" style={{ textAlign: 'center' }} >
        <div className="container">
          <h3 className="tittle-w3l">Scrap Yard Going To Be India's Leading Scrap Management Company

          </h3>
          <div className="row">
            <p className="abt-sec">We cherish what we have and hold on to it even
              if we are not using it.  It is equally important to understand what and how
              to yield more from your old items.Now, <strong>REUSE</strong>—is easier
              because Team <strong>Scrap Yard India</strong> is proud to announce a change
              which can bring more transparency and options for the users. Our constant
              focus is on reduce, reuse and recycle and motivate to find the way of
              discovering, selling pre-loved items online.
              <br /> We facilitate the process by  providing transportation facility.
              we pay for your effort and you will get payment at the time of collection.<br />
              <strong>Scrap Yard India</strong> inspires and rewards smarter, everyday
              choices for a more sustainable future.We know that it takes a group effort
              to make a positive impact, which is why we bring together communities,
              businesses and people like you.<br />Now, users will have more power
              and we also wish to make it a one stop shop for trading scrap items.
              As we learn to let go, we create space for more or make more.<br />
            </p>
            <p className="abt-sec">The much needed innovative and advanced systems for
              rapidly growing Indian cities to have BEST out of SCRAP. India has a
              population of 1.38 billion right now and is expected to have 1.6 billion
              by 2050.Obviously, there is going to be a lot of scrap. But,
              we have already figured out a way to handle it with 3E's- Effectively,
              Efficiently and Economically<br />
              "WE OWN A TECHNOLOGY ENABLED SMART APPLICATION FACILITY WHICH
              CUSTOMER CAN USE AND SELL THEIR SCRAP IN EASIEST WAY AND CONTRIBUTE TO
              THE CIRCULAR ECONOMY AND SECURE SUSTAINABLE FUTURE"<br />
              We are one step ahead to collect and separate the scrap for recycling Company.
            </p>
            <p className="abt-sec">The smart city drive is rapidly changing the way urban areas
              are growing in India. With increase in scrap generation, its environmental
              impact and the operational cost of managing it. Smart scrap management solutions
              is of utmost importance. Municipal bodies, industries, hospitals and other
              important stakeholders are expected to move beyond traditional scrap
              management systems and adopt innovative technologies which result
              in more integrated solutions.</p>
          </div>
        </div>
      </div>

      <div id='main-div'>
        <div className='imgsDiv'>
          <div id="img-div" className="col-xs-3 popular-wthree-grid">
            <div className="ab-area">
              <img src="https://www.scrapcareindia.com/images/a1.png" alt="Electronics" />
              <div id='img-text' className="popular-wthree-text">
                <h5>Electronics</h5>
              </div>
            </div>
          </div>
          <div id="img-div" className="col-xs-3 popular-wthree-grid">
            <div className="ab-area">
              <img src="https://www.scrapcareindia.com/images/a2.png" alt="Appliances" />
              <div id='img-text' className="popular-wthree-text">
                <h5>Appliances</h5>
              </div>
            </div>
          </div>
          <div id="img-div" className="col-xs-3 popular-wthree-grid">
            <div id='' className="ab-area">
              <img src="https://www.scrapcareindia.com/images/a3.png" alt="Furniture" />
              <div id='img-text' className="popular-wthree-text">
                <h5>Furniture</h5>
              </div>
            </div>
          </div>
          <div id="img-div" className="col-xs-3 popular-wthree-grid">
            <div className="ab-area">
              <img src="https://www.scrapcareindia.com/images/a4.png" alt="Paper" />

              <div id='img-text' className="popular-wthree-text">
                <h5>Paper</h5>
              </div>
            </div>
          </div>
        </div>


        <div className='imgsDiv'>
          <div id="img-div" className="col-xs-3 popular-wthree-grid">
            <div className="ab-area">
              <img src="https://www.scrapcareindia.com/images/a5.png" alt="Plastics" />
              <div id='img-text' className="popular-wthree-text">
                <h5>Plastics</h5>
              </div>
            </div>
          </div>
          <div id="img-div" className="col-xs-3 popular-wthree-grid">
            <div className="ab-area">
              <img src="https://www.scrapcareindia.com/images/a7.png" alt="Steel Scrap" />
              <div id='img-text' className="popular-wthree-text">
                <h5>Metal Scrap</h5>
              </div>
            </div>
          </div>
          <div id="img-div" className="col-xs-3 popular-wthree-grid">
            <div className="ab-area" style={{ size: "15px" }} >
              <img src="https://tradeit.guru/wp-content/uploads/2017/11/ewasteR.png" alt="E-Scrap" style={{ width: "128px", height: '128px' }} />
              <div id='img-text' className="popular-wthree-text">
                <h5>E-Scrap</h5>
              </div>
            </div>
          </div>
          <div id="img-div" className="col-xs-3 popular-wthree-grid">
            <div className="ab-area">
              <img src="https://www.scrapcareindia.com/images/a6.png" alt="Others" />
              <div id='img-text' className="popular-wthree-text">
                <h5>Others</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home