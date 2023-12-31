import React, { useState } from "react";
import { data } from "./dataGlasses";
import InfoGlasses from "./InfoGlasses";

const BaiTapState = () => {
  const [imgGlasses, setImgGlasses] = useState({});
  return (
    <div>
      <div>
        <div
          style={{
            backgroundImage: `url('./images/glasses/background.jpg')`, 
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", width: '100%', height: '100vh',
          }} >
          <div className="row">
            <div className="col-5 position-relative mt-5">
              <img className="img-fluid" src="./images/glasses/model.jpg" alt="" />
              <img className="img-fluid ridged"
                style={{ position: "absolute", position: "absolute", left: "30%", top: "26%", width: "250px", }}
                src={imgGlasses?.url} alt="" />
              <InfoGlasses imgGlasses={imgGlasses} />
            </div>

            <div className="col-7 mt-5">
              {data.map((item, index) => (
                <img key={item?.id} className="img-fluid"
                  style={{
                    width: 220, height: 100, backgroundColor: 'grey', padding: 10, marginLeft: 35,
                    marginTop: 90, border: 0.5, border: "gray solid", borderRadius: 3, }} 
                    src={item.url} alt="" onClick={() => { setImgGlasses(item); }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaiTapState;
