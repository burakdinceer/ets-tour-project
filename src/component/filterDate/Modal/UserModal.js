import React, { useState } from "react";
import './userModal.scss'
const UserModal = () => {

    const [adult,setAdult] = useState(0)
    const [child,setChild] = useState(0)

    const handleCountChange = (type, value) => {
        if (type === "adult") {
            setAdult((prevCount) => Math.max(prevCount + value, 0));
        } else if (type === "child") {
            setChild((prevCount) => Math.max(prevCount + value, 0));
        }
    };

  return (
    <div className="userModal">
      <div>
        <span>Yetişkin Sayısı</span>
        <div className="userDecInc">
                    <button onClick={() => handleCountChange("adult", -1)}>-</button>
                    <span>{adult}</span>
                    <button onClick={() => handleCountChange("adult", 1)}>+</button>
                </div>
      </div>
      <div>
        <span>Çocuk Sayısı</span>
        <div className="userDecInc">
                    <button onClick={() => handleCountChange("child", -1)}>-</button>
                    <span>{child}</span>
                    <button onClick={() => handleCountChange("child", 1)}>+</button>
                </div>
      </div>
    </div>
  );
};

export default UserModal;
