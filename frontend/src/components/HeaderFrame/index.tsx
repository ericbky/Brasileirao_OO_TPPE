import React from "react";
import logo from "./logo.png";
import "./style.css";
import notification from "./notification.png";
import { Link } from "react-router-dom";

export const HeaderFrame = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="logo-container">
                    <div className="logo-wrapper">
                        <img className="logo" alt="Logo" src={logo} />
                    </div>
                </div>

                <div className="logo-container">
                    <div className="brand-name">Brasalytics</div>
                </div>
            </div>

            <div className="navbar-right">
                <div className="nav-links">
                    <div className="logo-container">
                        <Link to="/estadios" className="nav-link-alt">Estádios</Link>
                    </div>

                    <div className="logo-container">
                        <Link to="/times" className="nav-link-alt">Times</Link>
                    </div>

                    <div className="logo-container">
                        <Link to="/jogadores" className="nav-link-alt">Jogadores</Link>
                    </div>

                    <div className="logo-container">
                        <Link to="/partidas" className="nav-link-alt">Partidas</Link>
                    </div>

                    <div className="logo-container">
                        <Link to="/rankings" className="nav-link-alt">Rankings</Link>
                    </div>
                </div>

                <div className="notification-container">
                    <div className="notification-wrapper">
                        <div className="notification-icon-wrapper">
                            <Link to="/notificacoes">
                                <img className="notification-icon" alt="Notificações" src={notification} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="avatar" />
            </div>
        </div>
    );
};