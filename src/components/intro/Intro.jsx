import "./intro.scss";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';



const Intro = () => {

  // const textRef = useRef();

  // useEffect(() => { 
  //   init(textRef.current, { 
  //     showCursor: true, 
  //     backDelay:  1500,
  //     backSpeed: 60,
  //     strings: [
  //         "Software Engineer", "Frontend Engineer", "Software Tester"
  //       ] 
  //     }
  //   )
  // }, []);
  return (
      <div className='intro' id="intro">
        <div className="top-mart">
          <h1>Market Place</h1>
        </div>
        <div className="sides">
          <div className="left">
            <div className="selections">
              <div className="search">
                <SearchOutlinedIcon className="icon"/>
                <input type="text" className="input" placeholder="Search..." />
              </div>
              <select name="Price:" id="price">
                <option value="volvo">Price: Low to High       </option>
                
              </select>
              <select name="Price:" id="price">
                <option value="volvo">Price: Low to High       </option>
                
              </select>
              <select name="Price:" id="price">
                <option value="volvo">Price: Low to High       </option>
               
              </select>
            </div>
          </div>
            <div className="right">
              <div className="wrapper">
                <GridViewRoundedIcon className="left-icon" />
              </div>
              <div className="wrapper">
                <GridViewRoundedIcon className="right-icon" />
              </div>
            </div>
        </div>
        

            <div className="container">
                
                <div className="card featured">
                  <div className="top">
                    <MonetizationOnOutlinedIcon className="dolla"/>
                      <img src="assets/house1.png" 
                      className="user" 
                      alt="" />
                  </div>
                  <div className="center">
                    <small className="smallest">Abuja | Multifamily .</small> 
                    <br />
                    <h6>Lambo Homes</h6>
                    <div className="pear">
                      <small className="smallest">Token Value</small>
                      <span>NGN1,000,000</span>
                    </div>
                    <hr />
                    <div className="pear">
                      <small className="smallest">Property Owners</small>
                      <span>10</span>
                    </div>
                    <hr />
                    <div className="pear">
                      <small className="smallest">Minimum Investment</small>
                      <span>1</span>
                    </div>
                    <hr />
                    <div className="pear">
                      <small className="smallest">Token Traded</small>
                      <span>50</span>
                    </div>
                    <hr />
                  </div>
              </div>


              <div className="card featured">
                  <div className="top">
                  <MonetizationOnOutlinedIcon className="dolla"/>
                  <img src="assets/house2.png" 
                      className="user" 
                      alt="" />
                  </div>
                  <div className="center">
                    <small className="smallest">Abuja | Multifamily .</small> 
                    <br />
                    <h6>Efab Estate Properties</h6>
                    <div className="pear">
                      <small className="smallest">Investment Type</small>
                      <span>NGN1,000,000</span>
                    </div>
                    <hr />
                    <div className="pear">
                      <small className="smallest">Property Value</small>
                      <span>NGN25,000,000</span>
                    </div>
                    <hr />
                    <div className="pear">
                      <small className="smallest">Investor</small>
                      <span>78</span>
                    </div>
                    <hr />
                    <div className="pear">
                      <small className="smallest">Total Raised</small>
                      <span>NGN10,000,000</span>
                    </div>
                    <hr />
                  </div>
              </div>

                <div className="card featured">
                  <div className="top">
                    <MonetizationOnOutlinedIcon className="dolla"/>
                      <img src="assets/house3.png" 
                      className="user" 
                      alt="" />
                  </div>
                  <div className="center">
                    <h6>Lambo Homes</h6>
                    <small className="smallest">12,000ˀ.</small> 
                    <div className="pear">
                      <small className="smallest">Token Value</small>
                      <span>NGN1,000,000</span>
                    </div>
                    <hr />
                    <div className="pear">
                      <small className="smallest">Investment Type</small>
                      <span>Sales</span>
                    </div>
                    <hr />
                    <div className="pear">
                      <small className="smallest">Location</small>
                      <span>Abuja</span>
                    </div>
                    <hr />
                    <div className="pear">
                      <small className="smallest">Property Type</small>
                      <span>Duplex</span>
                    </div>
                    <hr />
                  </div>
                </div>


          
          
                
                <div className="card featured">
                  <div className="top">
                    <MonetizationOnOutlinedIcon className="dolla"/>
                      <img src="assets/house1.png" 
                      className="user" 
                      alt="" />
                  </div>
                  <div className="center">
                    <small className="smallest">Abuja | Multifamily .</small> 
                    <br />
                    <h6>Lambo Homes</h6>
                    <div className="pear">
                      <small className="smallest">Token Value</small>
                      <span>NGN1,000,000</span>
                    </div>
                    <hr />
                    <div className="pear">
                      <small className="smallest">Property Owners</small>
                      <span>10</span>
                    </div>
                    <hr />
                    <div className="pear">
                      <small className="smallest">Minimum Investment</small>
                      <span>1</span>
                    </div>
                    <hr />
                    <div className="pear">
                      <small className="smallest">Token Traded</small>
                      <span>50</span>
                    </div>
                    <hr />
                  </div>
                </div>


              <div className="card featured">
                  <div className="top">
                  <MonetizationOnOutlinedIcon className="dolla"/>
                  <img src="assets/house2.png" 
                      className="user" 
                      alt="" />
                  </div>
                  <div className="center">
                    <small className="smallest">Abuja | Multifamily .</small> 
                    <br />
                    <h6>Lambo Homes</h6>
                    <div className="pear">
                      <small className="smallest">Token Value</small>
                      <span>NGN1,000,000</span>
                    </div>
                    <hr />
                    <div className="pear">
                      <small className="smallest">Property Owners</small>
                      <span>10</span>
                    </div>
                    <hr />
                    <div className="pear">
                      <small className="smallest">Minimum Investment</small>
                      <span>1</span>
                    </div>
                    <hr />
                    <div className="pear">
                      <small className="smallest">Token Traded</small>
                      <span>50</span>
                    </div>
                    <hr />
                  </div>
              </div>

              <div className="card featured">
                  <div className="top">
                    <MonetizationOnOutlinedIcon className="dolla"/>
                      <img src="assets/house3.png" 
                      className="user" 
                      alt="" />
                  </div>
                  <div className="center">
                    <small className="smallest">Abuja | Multifamily .</small> 
                    <br />
                    <h6>Lambo Homes</h6>
                    <div className="pear">
                      <small className="smallest">Token Value</small>
                      <span>NGN1,000,000</span>
                    </div>
                    <hr />
                    <div className="pear">
                      <small className="smallest">Property Owners</small>
                      <span>10</span>
                    </div>
                    <hr />
                    <div className="pear">
                      <small className="smallest">Minimum Investment</small>
                      <span>1</span>
                    </div>
                    <hr />
                    <div className="pear">
                      <small className="smallest">Token Traded</small>
                      <span>50</span>
                    </div>
                    <hr />
                  </div>
                  
              </div>

              


          </div>

          {/* Footer */}
          

      </div>
  );
}

export default Intro;
