import React from "react";
import footerData from "./Footer.json";
import "./Footer.css";
import FooterItem from "./FooterItem/FooterItem";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <p className="footer-text">{footerData.text}</p>

                <div className="footer-items">
                    <div>
                        <FooterItem title="쇼핑 및 알아보기" data={footerData.data["a"]} />
                        <FooterItem title="Apple 지갑" data={footerData.data["b"]} />
                    </div>
                    <div>
                        <FooterItem title="계정" data={footerData.data["c"]} />
                        <FooterItem title="엔터테인먼트" data={footerData.data["d"]} />
                    </div>
                    <div>
                        <FooterItem
                            title="Apple Store"
                            data={footerData.data["e"]}
                        />
                    </div>
                    <div>
                        <FooterItem
                            title="비즈니스"
                            data={footerData.data["f"]} />
                        <FooterItem
                            title="교육"
                            data={footerData.data["g"]} />
                    </div>
                    <div>
                        <FooterItem title="Apple의 가치관" data={footerData.data["h"]} />
                        <FooterItem title="Apple 정보" data={footerData.data["i"]} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
