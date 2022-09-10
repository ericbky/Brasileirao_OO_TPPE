package controller;

import model.*;
import java.util.*;

public class RodadasController {
	
	private ArrayList<String> todosConfrontos = new ArrayList<String>();
	private ArrayList<Rodada> resultadosRodadas = new ArrayList<Rodada>();
	private ArrayList<String> confrontosRodada1 = new ArrayList<String>(); 
	private ArrayList<String> confrontosRodada2 = new ArrayList<String>(); 
	private ArrayList<String> confrontosRodada3 = new ArrayList<String>(); 
	private ArrayList<String> confrontosRodada4 = new ArrayList<String>(); 
	private ArrayList<String> confrontosRodada5 = new ArrayList<String>(); 
	private ArrayList<String> confrontosRodada6 = new ArrayList<String>(); 
	private ArrayList<String> confrontosRodada7 = new ArrayList<String>(); 
	private ArrayList<String> confrontosRodada8 = new ArrayList<String>(); 
	private ArrayList<String> confrontosRodada9 = new ArrayList<String>(); 
	private ArrayList<String> confrontosRodada10 = new ArrayList<String>(); 
	private ArrayList<String> confrontosRodada11 = new ArrayList<String>();
	private ArrayList<String> confrontosRodada12 = new ArrayList<String>();
	private ArrayList<String> confrontosRodada13 = new ArrayList<String>();
	private ArrayList<String> confrontosRodada14 = new ArrayList<String>();
	private ArrayList<String> confrontosRodada15 = new ArrayList<String>();
	private ArrayList<String> confrontosRodada16 = new ArrayList<String>();
	private ArrayList<String> confrontosRodada17 = new ArrayList<String>();
	private ArrayList<String> confrontosRodada18 = new ArrayList<String>();
	private ArrayList<String> confrontosRodada19 = new ArrayList<String>();
	private ArrayList<String> confrontosRodada20 = new ArrayList<String>();
	Dados dados = new Dados();
	
	public void definirConfrontosTemporada() {
		DadosController d = new DadosController();
		d.createAllData();
		for(int p=0; p<20; p++) {
			for (int t=0; t<20; t++) {
				todosConfrontos.add(d.getTimes().get(p).getNome() + 
						"-" + d.getTimes().get(t).getNome());
				}
			}
		for(int r=0; r<20; r++) {
			todosConfrontos.remove(r*20);
		}
	}
	
	public void definirJogosPorRodada() {
		for(int i=0; i<19; i++) {
			confrontosRodada1.add(todosConfrontos.get(i));
			confrontosRodada2.add(todosConfrontos.get(i+19));
			confrontosRodada3.add(todosConfrontos.get(i+38));
			confrontosRodada4.add(todosConfrontos.get(i+57));
			confrontosRodada5.add(todosConfrontos.get(i+76));
			confrontosRodada6.add(todosConfrontos.get(i+95));
			confrontosRodada7.add(todosConfrontos.get(i+114));
			confrontosRodada8.add(todosConfrontos.get(i+133));
			confrontosRodada9.add(todosConfrontos.get(i+152));
			confrontosRodada10.add(todosConfrontos.get(i+171));
			confrontosRodada11.add(todosConfrontos.get(i+190));
			confrontosRodada12.add(todosConfrontos.get(i+209));
			confrontosRodada13.add(todosConfrontos.get(i+228));
			confrontosRodada14.add(todosConfrontos.get(i+247));
			confrontosRodada15.add(todosConfrontos.get(i+266));
			confrontosRodada16.add(todosConfrontos.get(i+285));
			confrontosRodada17.add(todosConfrontos.get(i+304));
			confrontosRodada18.add(todosConfrontos.get(i+323));
			confrontosRodada19.add(todosConfrontos.get(i+342));
			confrontosRodada20.add(todosConfrontos.get(i+361));
		}
	}
	
	public void simularRodada(int numRodada) {
		DadosController d = new DadosController();
		String[] m = new String[380];
		d.createAllData();
		System.out.println(todosConfrontos);
		for (int k=1; k<21; k++) {
			if(k == numRodada) {
				for(int i=((k*19)-19); i<(k*19); i++) {
					m = getTodosConfrontos().get(i).split("-");
					for(int j=0; j<20; j++) {
						for(int p=0; p<20; p++) {
							if (m[0].equals(d.getTimes().get(j).getNome()) && 
								m[1].equals(d.getTimes().get(p).getNome())) {
									int random1 = dados.randomNumber1(0, 5);
									int random2 = dados.randomNumber2(0, 3);
									int random3 = dados.randomNumber1(0, 11);
									int random4 = dados.randomNumber2(0, 10);
									
									if (random1>random2) {
										d.getTimes().get(j).setPontos(
												(d.getTimes().get(j).getPontos())+3);
										d.getTimes().get(j).setNumeroJogos(
												(d.getTimes().get(j).getNumeroJogos())+1);
										d.getTimes().get(p).setNumeroJogos(
												(d.getTimes().get(p).getNumeroJogos())+1);
										d.getTimes().get(j).setNumeroVitorias(
												(d.getTimes().get(j).getNumeroVitorias())+1);
										d.getTimes().get(p).setNumeroDerrotas(
												(d.getTimes().get(p).getNumeroDerrotas())+1);
										d.getTimes().get(j).setGolsMarcados(
												(d.getTimes().get(j).getGolsMarcados())+random1);
										d.getTimes().get(j).setGolsSofridos(
												(d.getTimes().get(j).getGolsSofridos())+random2);
										d.getTimes().get(p).setGolsMarcados(
												(d.getTimes().get(p).getGolsMarcados())+random2);
										d.getTimes().get(p).setGolsSofridos(
												(d.getTimes().get(p).getGolsSofridos())+random1);
										d.getTimes().get(j).getJogadores().get(random3).setGols(
												(d.getTimes().get(j).getJogadores().get(random3).getGols())+random1);
										d.getTimes().get(p).getJogadores().get(random4).setGols(
												(d.getTimes().get(p).getJogadores().get(random4).getGols())+random2);
										for (int e=0; e<11; e++) {
											d.getTimes().get(j).getJogadores().get(e).setPartidas(
													(d.getTimes().get(j).getJogadores().get(e).getPartidas())+1);
											d.getTimes().get(p).getJogadores().get(e).setPartidas(
													(d.getTimes().get(p).getJogadores().get(e).getPartidas())+1);
										}
									}
									else if (random1==random2) {
										d.getTimes().get(j).setPontos(
												(d.getTimes().get(j).getPontos())+1);
										d.getTimes().get(p).setPontos(
												(d.getTimes().get(p).getPontos())+1);
										d.getTimes().get(j).setNumeroJogos(
												(d.getTimes().get(j).getNumeroJogos())+1);
										d.getTimes().get(p).setNumeroJogos(
												(d.getTimes().get(p).getNumeroJogos())+1);
										d.getTimes().get(j).setNumeroEmpates(
												(d.getTimes().get(j).getNumeroEmpates())+1);
										d.getTimes().get(p).setNumeroEmpates(
												(d.getTimes().get(p).getNumeroEmpates())+1);
										d.getTimes().get(j).setGolsMarcados(
												(d.getTimes().get(j).getGolsMarcados())+random1);
										d.getTimes().get(j).setGolsSofridos(
												(d.getTimes().get(j).getGolsSofridos())+random2);
										d.getTimes().get(p).setGolsMarcados(
												(d.getTimes().get(p).getGolsMarcados())+random2);
										d.getTimes().get(p).setGolsSofridos(
												(d.getTimes().get(p).getGolsSofridos())+random1);
										d.getTimes().get(j).getJogadores().get(random3).setGols(
												(d.getTimes().get(j).getJogadores().get(random3).getGols())+random1);
										d.getTimes().get(p).getJogadores().get(random4).setGols(
												(d.getTimes().get(p).getJogadores().get(random4).getGols())+random2);
										for (int e=0; e<11; e++) {
											d.getTimes().get(j).getJogadores().get(e).setPartidas(
													(d.getTimes().get(j).getJogadores().get(e).getPartidas())+1);
											d.getTimes().get(p).getJogadores().get(e).setPartidas(
													(d.getTimes().get(p).getJogadores().get(e).getPartidas())+1);
										}
										
									}
									else {
										d.getTimes().get(p).setPontos(
												(d.getTimes().get(p).getPontos())+3);
										d.getTimes().get(j).setNumeroJogos(
												(d.getTimes().get(j).getNumeroJogos())+1);
										d.getTimes().get(p).setNumeroJogos(
												(d.getTimes().get(p).getNumeroJogos())+1);
										d.getTimes().get(j).setNumeroDerrotas(
												(d.getTimes().get(j).getNumeroDerrotas())+1);
										d.getTimes().get(p).setNumeroVitorias(
												(d.getTimes().get(p).getNumeroVitorias())+1);
										d.getTimes().get(j).setGolsMarcados(
												(d.getTimes().get(j).getGolsMarcados())+random1);
										d.getTimes().get(j).setGolsSofridos(
												(d.getTimes().get(j).getGolsSofridos())+random2);
										d.getTimes().get(p).setGolsMarcados(
												(d.getTimes().get(p).getGolsMarcados())+random2);
										d.getTimes().get(p).setGolsSofridos(
												(d.getTimes().get(p).getGolsSofridos())+random1);
										d.getTimes().get(j).getJogadores().get(random3).setGols(
												(d.getTimes().get(j).getJogadores().get(random3).getGols())+random1);
										d.getTimes().get(p).getJogadores().get(random4).setGols(
												(d.getTimes().get(p).getJogadores().get(random4).getGols())+random2);
										for (int e=0; e<11; e++) {
											d.getTimes().get(j).getJogadores().get(e).setPartidas(
													(d.getTimes().get(j).getJogadores().get(e).getPartidas())+1);
											d.getTimes().get(p).getJogadores().get(e).setPartidas(
													(d.getTimes().get(p).getJogadores().get(e).getPartidas())+1);
										}
									}
							}
						}
					}
				}
			}
		}
	}
	
	
	public ArrayList<String> getTodosConfrontos() {
		return todosConfrontos;
	}

	public void setTodosConfrontos(ArrayList<String> todosConfrontos) {
		this.todosConfrontos = todosConfrontos;
	}

	public ArrayList<Rodada> getResultadosRodadas() {
		return resultadosRodadas;
	}

	public void setResultadosRodadas(ArrayList<Rodada> resultadosRodadas) {
		this.resultadosRodadas = resultadosRodadas;
	}

	public ArrayList<String> getConfrontosRodada1() {
		return confrontosRodada1;
	}

	public ArrayList<String> getConfrontosRodada2() {
		return confrontosRodada2;
	}

	public ArrayList<String> getConfrontosRodada3() {
		return confrontosRodada3;
	}

	public ArrayList<String> getConfrontosRodada4() {
		return confrontosRodada4;
	}

	public ArrayList<String> getConfrontosRodada5() {
		return confrontosRodada5;
	}

	public ArrayList<String> getConfrontosRodada6() {
		return confrontosRodada6;
	}

	public ArrayList<String> getConfrontosRodada7() {
		return confrontosRodada7;
	}

	public ArrayList<String> getConfrontosRodada8() {
		return confrontosRodada8;
	}

	public ArrayList<String> getConfrontosRodada9() {
		return confrontosRodada9;
	}

	public ArrayList<String> getConfrontosRodada10() {
		return confrontosRodada10;
	}

	public ArrayList<String> getConfrontosRodada11() {
		return confrontosRodada11;
	}

	public ArrayList<String> getConfrontosRodada12() {
		return confrontosRodada12;
	}

	public ArrayList<String> getConfrontosRodada13() {
		return confrontosRodada13;
	}

	public ArrayList<String> getConfrontosRodada14() {
		return confrontosRodada14;
	}

	public ArrayList<String> getConfrontosRodada15() {
		return confrontosRodada15;
	}

	public ArrayList<String> getConfrontosRodada16() {
		return confrontosRodada16;
	}

	public ArrayList<String> getConfrontosRodada17() {
		return confrontosRodada17;
	}

	public ArrayList<String> getConfrontosRodada18() {
		return confrontosRodada18;
	}

	public ArrayList<String> getConfrontosRodada19() {
		return confrontosRodada19;
	}

	public ArrayList<String> getConfrontosRodada20() {
		return confrontosRodada20;
	}
	
	
	
	@Override
	public String toString() {
		return "Todos os confrontos da Temporada = " + todosConfrontos + "]";
	}
	}
	
			

