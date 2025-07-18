import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const TeamsFrame = () => {
    const navigate = useNavigate();

    return (
        <div className="teams-frame">
            <div className="teams-main">
                <div className="teams-header">
                    <div className="teams-title-wrapper">
                        <div className="teams-title">Times</div>
                    </div>

                    <div className="teams-create-wrapper">
                        <div className="teams-create-button">
                            <div className="teams-create-text">Criar Time</div>
                        </div>
                    </div>
                </div>

                <div className="teams-filters">
                    <div className="teams-filter">
                        <div className="teams-filter-label-wrapper">
                            <div className="teams-filter-label">Nome do Time</div>
                        </div>
                        <div className="teams-filter-input-wrapper">
                            <div className="teams-filter-input">Enter&nbsp;&nbsp;Nome do Time</div>
                        </div>
                    </div>

                    <div className="teams-filter">
                        <div className="teams-filter-label-wrapper">
                            <div className="teams-filter-label">Número Mínimo de Membros</div>
                        </div>
                        <div className="teams-filter-input-wrapper">
                            <div className="teams-filter-select">Select&nbsp;&nbsp;Número Mínimo de Membros</div>
                        </div>
                    </div>
                </div>

                <div className="teams-filters">
                    <div className="teams-filter">
                        <div className="teams-filter-label-wrapper">
                            <p className="teams-filter-label">Escalação inicial mínima do Médio Valor</p>
                        </div>
                        <div className="teams-filter-input-wrapper">
                            <p className="teams-filter-input">Enter&nbsp;&nbsp;Escalação inicial mínima do Médio Valor</p>
                        </div>
                    </div>
                </div>

                <div className="teams-filter-action-wrapper">
                    <div className="teams-filter-action-inner">
                        <div className="teams-create-button">
                            <div className="teams-filter-action-text">Filtrar</div>
                        </div>
                    </div>
                </div>

                <div className="teams-section-title-wrapper">
                    <div className="teams-section-title">Times Registrados</div>
                </div>

                <div className="teams-list-wrapper">
                    <div className="teams-list">
                        <div className="teams-card" onClick={() => navigate("/times/time-a")} style={{ cursor: "pointer" }}>
                            <div className="teams-card-image" />
                            <div className="teams-card-info">
                                <div className="teams-card-info">
                                    <div className="teams-filter-label">Time A</div>
                                </div>
                                <div className="teams-card-info">
                                    <div className="teams-card-subinfo">15 Membros</div>
                                </div>
                                <div className="teams-card-info">
                                    <p className="teams-card-subinfo">Valor total do Time: $150K · Médio. Valor do Jogador: $10K</p>
                                </div>
                            </div>
                        </div>

                        <div className="teams-card" onClick={() => navigate("/times/time-b")} style={{ cursor: "pointer" }}>
                            <div className="teams-card-image-b" />
                            <div className="teams-card-info">
                                <div className="teams-card-info">
                                    <div className="teams-filter-label">Time B</div>
                                </div>
                                <div className="teams-card-info">
                                    <div className="teams-card-subinfo">12 Membros</div>
                                </div>
                                <div className="teams-card-info">
                                    <p className="teams-card-subinfo">Valor total do Time: $120K · Médio. Valor do Jogador: $10K</p>
                                </div>
                            </div>
                        </div>

                        <div className="teams-card" onClick={() => navigate("/times/time-c")} style={{ cursor: "pointer" }}>
                            <div className="teams-card-image-c" />
                            <div className="teams-card-info">
                                <div className="teams-card-info">
                                    <div className="teams-filter-label">Time C</div>
                                </div>
                                <div className="teams-card-info">
                                    <div className="teams-card-subinfo">18 Membros</div>
                                </div>
                                <div className="teams-card-info">
                                    <p className="teams-card-subinfo">Valor total do Time: $180K · Médio. Valor do Jogador: $10K</p>
                                </div>
                            </div>
                        </div>

                        <div className="teams-card" onClick={() => navigate("/times/time-d")} style={{ cursor: "pointer" }}>
                            <div className="teams-card-image-d" />
                            <div className="teams-card-info">
                                <div className="teams-card-info">
                                    <div className="teams-filter-label">Time D</div>
                                </div>
                                <div className="teams-card-info">
                                    <div className="teams-card-subinfo">10 Membros</div>
                                </div>
                                <div className="teams-card-info">
                                    <p className="teams-card-subinfo">Valor total do Time: $100K · Médio. Valor do Jogador: $10K</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};