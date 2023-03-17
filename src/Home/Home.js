import React from "react";
import Box from "../Components/Box/Box";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Nav/Nav";
import NavMobile from "../Components/Nav/NavMobile/NavMobile";
import "./Home.css";
import HomeData from "./Home.json";
import { useMediaQuery } from "react-responsive";


const Home = () => {
    const mobile = useMediaQuery({query: "(max-width: 780px)"});

    return (
        <>
            {mobile ? <NavMobile /> : <Nav />}
            <div className="home">
                {HomeData.full.map((data, idx) => (
                    <Box data={data} key={`home-box-full-${idx}`} />
                ))}
                <div className="home-items">
                    {HomeData.half.map((data, idx) => (
                        <div key={`home-box-half-${idx}`}>
                            <Box data={data} half />
                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
