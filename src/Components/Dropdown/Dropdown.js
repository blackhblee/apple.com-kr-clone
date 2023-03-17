import React from "react";
import DropdownData from "./Dropdown.json";
import "./Dropdown.css";

const Dropdown = React.forwardRef(({ style }, ref) => (
    <div className="dropdown" style={style} ref={ref}>
        <p className="dropdown-msg">장바구니가 비어 있습니다.</p>
        <div className="dropdown-items">
            {DropdownData.map((item, idx) => (
                <a href={item.link} key={`dropdown-items-item-${item.name}-${idx}`}>
                    <div className="dropdown-items-item">
                        <img
                            className="dropdown-items-item-icon"
                            src={item.icon}
                            alt=""
                        />
                        <div className="dropdown-items-item-label">{item.name}</div>
                    </div>
                </a>
            ))}
        </div>
    </div>
));

export default Dropdown;
