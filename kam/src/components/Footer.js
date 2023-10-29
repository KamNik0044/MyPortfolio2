import "./FooterStyles.css";
import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa";
const email = "kamnikeng@gmail.com";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Stockport, Manchester</p>
                        </div>
                    </div>
                    <div className="Phone">
                        <h4>
                            <FaPhone
                                size={20}
                                style={{ color: "#fff", marginRight: "2rem" }}
                            />
                            07877763235
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk
                                size={20}
                                style={{ color: "#fff", marginRight: "2rem" }}
                            />
                            <a href={`mailto:${email}`}>{email}</a>
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About me </h4>
                    <p>
                        With over a decade of experience in the advertising inflatable industry, I pursued a full-stack development course at CYF with the goal of establishing a successful career in the technology sector. </p>
                    <div className="social">
                        {/* <FaCodewars size={20} style={{
                          color:
                              "#fff", marginRight: "1rem"
                      }} /> */}
                        <br></br>
                        <FaGithub
                            size={20}
                            style={{
                                color: "#fff",
                                marginRight: "1rem",
                            }}
                        />
                        <FaLinkedin
                            size={20}
                            style={{
                                color: "#fff",
                                marginRight: "1rem",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer