import React from "react";
import "./Box.css";
import { ReactComponent as ArrowRight } from "../../assets/angle-right-icon.svg";
import { useMediaQuery } from "react-responsive";

const Box = ({ data, half }) => {
    const small = useMediaQuery({ query: "(max-width: 680px)"});
    const medium = useMediaQuery({ query: "(max-width: 1080px)"});

    const boxStyle = () => ({
        backgroundImage:
            small && data?.backgroundImgSmall
                ? `url(${data.backgroundImgSmall})`
                : medium && data?.backgroundImgMedium
                    ? `url(${data.backgroundImgMedium})`
                    : `url(${data.backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: `${data?.color ?? "inherit"}`,
        marginTop: half ? "0.6rem" : "init",
        marginBottom: "0.6rem",
        marginLeft: half ? "0.6rem" : "init",
        marginRight: half ? "0.6rem" : "init",
    });

    const addHalfToClass = (name) => {
        return `${name}${half ? "-half" : ""}`;
    };

    const contentPosition = () =>
        small && data?.contentPosSmall
            ? data.contentPosSmall
            : data?.contentPos ?? "top";

    return (
        <div className={addHalfToClass("box")} style={boxStyle()}>
            <div className={`box-content box-${contentPosition()}`}>
                {data?.heading ? (
                    <div className={addHalfToClass("box-content-heading")}>
                        {data.heading}
                    </div>
                ) : data?.logo ? (
                    <div>
                        <img
                            className={addHalfToClass("box-content-logo")}
                            alt=""
                            src={data.logo}
                        />
                    </div>
                ) : null}
                {data?.subHeading && (
                    <div className={addHalfToClass("box-content-subHeading")}>
                        {data.subHeading}
                        {data?.subHeadingImg ? (
                            <img
                                className={addHalfToClass("box-content-subHeading-img")}
                                alt=""
                                src={data.subHeadingImg}
                            />
                        ) : null}
                    </div>
                )}
                <div className={addHalfToClass("box-content-info")}>{data?.info}</div>
                {data?.links && data.links?.length > 0 && (
                    <div className={`box-content-links${half ? " links-half" : ""}`}>
                        {data.links.map((link, idx) => (
                            <a
                                key={`box-link-${idx}`}
                                style={
                                    data?.color === "white"
                                        ? { color: "#4791FD" }
                                        : { color: "#2D60CA" }
                                }
                                href={link?.href}
                            >
                                <span>{link?.name}</span>
                                <ArrowRight
                                    className="box-content-links-arrowRight"
                                    height={14}
                                    fill={`${data?.color === "white" ? "#4791FD" : "#2D60CA"}`}
                                />
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Box;
