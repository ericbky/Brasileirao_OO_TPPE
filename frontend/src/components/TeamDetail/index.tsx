import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";

export const TeamDetail = () => {
    const { id } = useParams();

    return (
        <div className="team-detail">
            <div className="div">
                <div className="team-detail-wrapper">
                    <div className="div-wrapper">
                        <div className="text-wrapper">{id?.replace("-", " ").toUpperCase()}</div>
                    </div>
                </div>

                <div className="div-2">
                    <div className="div-3">
                        <div className="div-wrapper-2">
                            <div className="text-wrapper-2">20</div>
                        </div>

                        <div className="team-detail-wrapper-2">
                            <div className="div-wrapper-3">
                                <div className="text-wrapper-3">Membros</div>
                            </div>
                        </div>
                    </div>

                    <div className="div-3">
                        <div className="div-wrapper-2">
                            <div className="text-wrapper-2">$500K</div>
                        </div>

                        <div className="team-detail-wrapper-3">
                            <div className="div-wrapper-3">
                                <div className="text-wrapper-3">Valor Total</div>
                            </div>
                        </div>
                    </div>

                    <div className="div-3">
                        <div className="div-wrapper-2">
                            <div className="text-wrapper-2">$25K</div>
                        </div>

                        <div className="team-detail-wrapper-3">
                            <div className="div-wrapper-3">
                                <div className="text-wrapper-3">Valor Médio</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="div-wrapper-4">
                    <div className="text-wrapper-4">Técnico</div>
                </div>

                <div className="div-4">
                    <div className="div-5" />

                    <div className="div-wrapper-3">
                        <div className="text-wrapper-5">Ethan Carter</div>
                    </div>
                </div>

                <div className="div-6">
                    <div className="div-7">
                        <div className="div-8">
                            <div className="team-detail-wrapper-4">
                                <div className="div-wrapper-5">
                                    <div className="text-wrapper-3">Data de Fundação</div>
                                </div>
                            </div>

                            <div className="team-detail-wrapper-4">
                                <div className="div-wrapper-5">
                                    <div className="text-wrapper-6">2018-05-15</div>
                                </div>
                            </div>
                        </div>

                        <div className="div-9">
                            <div className="team-detail-wrapper-4">
                                <div className="div-wrapper-6">
                                    <div className="text-wrapper-3">Número de Membros</div>
                                </div>
                            </div>

                            <div className="team-detail-wrapper-4">
                                <div className="div-wrapper-6">
                                    <div className="text-wrapper-6">20</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="div-7">
                        <div className="div-10">
                            <div className="team-detail-wrapper-5">
                                <div className="div-wrapper-7">
                                    <div className="text-wrapper-3">Temporada Atual</div>
                                </div>
                            </div>

                            <div className="team-detail-wrapper-6">
                                <div className="div-wrapper-7">
                                    <p className="text-wrapper-6">
                                        Participando da temporada de 2025
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team-detail-wrapper-7">
                    <div className="team-detail-wrapper-8">
                        <div className="div-wrapper-8">
                            <div className="text-wrapper-7">
                                Visualizar o Histórico Técnico
                            </div>
                        </div>
                    </div>
                </div>

                <div className="div-wrapper-4">
                    <div className="text-wrapper-4">Jogadores</div>
                </div>

                <div className="div-11">
                    <div className="div-12" />

                    <div className="div-13">
                        <div className="div-wrapper-2">
                            <div className="text-wrapper-8">Liam Harper</div>
                        </div>

                        <div className="div-wrapper-9">
                            <div className="text-wrapper-3">Atacante</div>
                        </div>
                    </div>
                </div>

                <div className="div-11">
                    <div className="div-14" />

                    <div className="div-13">
                        <div className="div-wrapper-2">
                            <div className="text-wrapper-8">Noah Bennett</div>
                        </div>

                        <div className="div-wrapper-10">
                            <div className="text-wrapper-3">Meio-campo</div>
                        </div>
                    </div>
                </div>

                <div className="div-11">
                    <div className="div-15" />

                    <div className="div-13">
                        <div className="div-wrapper-2">
                            <div className="text-wrapper-8">Oliver Hayes</div>
                        </div>

                        <div className="div-wrapper-11">
                            <div className="text-wrapper-3">Defesa</div>
                        </div>
                    </div>
                </div>

                <div className="team-detail-wrapper-7">
                    <div className="team-detail-wrapper-8">
                        <div className="div-wrapper-8">
                            <div className="text-wrapper-9">Visualizar Jogadores</div>
                        </div>
                    </div>
                </div>

                <div className="team-detail-wrapper-9">
                    <div className="div-16">
                        <div className="team-detail-wrapper-10">
                            <div className="div-wrapper-8">
                                <div className="text-wrapper-10">Editar Time</div>
                            </div>
                        </div>

                        <div className="team-detail-wrapper-8">
                            <div className="div-wrapper-8">
                                <div className="text-wrapper-7">Deletar Time</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team-detail-wrapper-7">
                    <div className="team-detail-wrapper-8">
                        <div className="div-wrapper-8">
                            <div className="text-wrapper-9">Compartilhar Estatísticas</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};