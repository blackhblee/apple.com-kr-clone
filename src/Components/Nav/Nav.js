import React, { useRef, useState } from "react";
import navData from "./Nav.json";
import "./Nav.css";
import { ReactComponent as AppleLogo } from "../../assets/apple-icon.svg";
import { ReactComponent as BagIcon } from "../../assets/bag-icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import Dropdown from "../Dropdown/Dropdown";
import { useOnClickOutside } from "../../Hooks";

const Nav = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const searchRef = useRef();
    const dropDownRef = useRef();

    useOnClickOutside(searchRef, () => {
        setOpenSearch(false);
    });
    useOnClickOutside(dropDownRef, () => {
        setShowDropdown(false);
    });

    const openSearchHandler = (action) => {
        if (action && action.toLocaleLowerCase() === "open") {
            setOpenSearch(true);
        } else {
            setOpenSearch(false);
        }
    };

    const dropdownHandler = () => {
        setShowDropdown((val) => !val);
    };

    return (
        <div className="nav">
            {openSearch ? (
                <div className="nav-search-root">
                    <div className="nav-search" ref={searchRef}>
                        <SearchIcon className="nav-icon nav-search-icon" height={14} />
                        <input
                            placeholder="apple.com 검색하기"
                            type="text"
                            className="input-search"
                        />
                        <CloseIcon
                            className="nav-icon close-icon"
                            height={14}
                            onClick={() => openSearchHandler()}
                        />
                    </div>
                </div>
            ) : (
                <div className="nav-items">
                    <div className="nav-items-item">
                        <AppleLogo className="nav-icon nav-logo" height={16} width={16} />
                    </div>
                    {navData.map((item, idx) => (
                        <div className="nav-items-item" key={`nav-items-item-${idx}`}>
                            {item.name}
                        </div>
                    ))}
                    <div className="nav-items-item">
                        <SearchIcon
                            className="nav-icon"
                            height={13}
                            onClick={() => openSearchHandler("open")}
                        />
                    </div>
                    <div className="nav-items-item">
                        <div className="nav-items-item-dropdown" ref={dropDownRef}>
                            {showDropdown ? (
                                <Dropdown
                                    style={{
                                        position: "absolute",
                                        top: "36px",
                                        right: "-16px",
                                        width: "286px",
                                    }}
                                />
                            ) : null}
                            <BagIcon
                                className="nav-icon"
                                height={13}
                                onClick={dropdownHandler}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Nav;
