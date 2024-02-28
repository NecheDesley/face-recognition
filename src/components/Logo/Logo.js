import { Tilt } from "react-tilt";
import "./Logo.css";
import Brain from "./Brain.png.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" style={{ height: 150, width: 150 }}>
        <div className="Tilt-inner">
          <img alt="logo" style={{paddingTop: ''}} src={Brain} />
        </div>
    
      </Tilt>
    </div>
  );
};

export default Logo;
