import "./topbar.scss";
// import { Person, Mail } from "@material-ui/icons"; 

const Topbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"topbar " + (menuOpen && "active")} id="topbar" >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">FaiDa.</a>
                </div>

                <div className="center">
                    <div className="itemContainer">
                        <a href="#">Features</a>
                    </div>
                    <div className="itemContainer">
                        <a href="#">Investment</a>
                    </div>
                    <div className="itemContainer">
                        <a href="#">How It Works</a>
                    </div>
                    <div className="itemContainer">
                        <a href="#">About</a>
                    </div>
                </div>
                
                <div className="right">
                    <div className="itemContainer">
                        <a href="#">Login</a>
                    </div>
                    <div className="itemContainer">
                        <a href="#" id="signUp">Sign Up</a>
                    </div>
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
