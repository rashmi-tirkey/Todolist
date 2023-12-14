import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer p-6 shadow-xl bg-orange-100 text-center">
            Created By
            <i className="fa fa-heart  text-l text-red-600 m-1"></i>
            <a
                href="https://www.linkedin.com/in/rashmi-tirkey"
                target="_blank"
                title="Rashmi Tirkey's Linkedin Profile" rel="noreferrer"
            >
                Rashmi Tirkey
            </a>
            <i className="fa fa-copyright text-l text-black m-1"></i>
            <span className="mr-1">{year}</span>
            <strong>
                Food<span className="text-red-600">Villa</span>
            </strong>
        </div>
    );
};

export default Footer;