import React, { useEffect, useRef, useState } from "react";
import "./NavMobile.css";
import navData from "../Nav.json";
import { ReactComponent as AppleLogo } from "../../../assets/apple-icon.svg";
import { ReactComponent as BagIcon } from "../../../assets/bag-icon.svg";
import { ReactComponent as SearchIcon } from "../../../assets/search-icon.svg";
import Dropdown from "../../Dropdown/Dropdown";
import { useOnClickOutside } from "../../../Hooks";

const NavMobile = () => {
    const [show, setShow] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const ref = useRef();

    useOnClickOutside(ref, () => {
        setShowDropdown(false);
    });

    const handleClick = () => {
        setShow((val) => !val);
    };
    const dropdownHandler = () => {
        setShowDropdown((val) => !val);
    };

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [show]);

    return (
        <div className={`nav-mobile ${show ? "nav-open" : ""}`}>
            <div className="nav-mobile-icons">
                <div className="nav-mobile-icon" onClick={handleClick}>
                    <div className="nav-mobile-icon-line1"></div>
                    <div className="invis"></div>
                    <div className="nav-mobile-icon-line2"></div>
                </div>
                <div>
                    <AppleLogo className="nav-icon" height={16} width={16} />
                </div>
                <div style={show ? { visibility: "hidden" } : {}}>
                    <div className="nav-mobile-dropdown" ref={ref}>
                        <BagIcon
                            className="nav-icon"
                            height={16}
                            onClick={dropdownHandler}
                        />
                        {showDropdown && !show ? (
                            <Dropdown
                                style={{
                                    position: "absolute",
                                    top: "48px",
                                    left: "0",
                                    right: "0",
                                    width: "100%",
                                }}
                            />
                        ) : null}
                    </div>
                </div>
            </div>

            <div className="nav-mobile-items">
                <div className="nav-mobile-items-item-search">
                    <SearchIcon
                        className="nav-icon nav-mobile-search-icon"
                        height={14}
                    />
                    <input
                        placeholder="apple.com 검색하기"
                        type="text"
                        className="input-search"
                    />
                </div>
                <div className="nav-mobile-line"></div>
                <div className="nav-mobile-items-container">
                    {navData.map((item, idx) => (
                        <div
                            className="nav-mobile-items-container-item"
                            key={`nav-mobile-items-item-${idx}`}
                        >
                            <a href="/">{item.name}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NavMobile;
