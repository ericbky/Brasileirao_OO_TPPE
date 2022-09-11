package controller;

import model.*;
import java.util.*;

/**
 * Classe responsável por controlar os dados referentes a classe Temporada
 * @author Rafael Bosi
 *@version 1.0 (set 2022)
 */
public class TemporadaController {
	
	private ArrayList<String> todosConfrontos = new ArrayList<String>();
	private ArrayList<Integer> resultadosRodadas = new ArrayList<Integer>();
	private Dados dados = new Dados();

	/**
	 * Método responsável por simular todos os confrontos e resultados de uma temporada
	 * @param d Um objeto da classe DadosController que nos possibilita operar com todos os dados presentes na aplicação
	 */
	public ArrayList<Integer> simularTemporada(DadosController d) {
		String[] m = new String[380];
			for(int p=0; p<20; p++) {
				for (int t=0; t<20; t++) {
					todosConfrontos.add(d.getTimes().get(p).getNome() + 
							"-" + d.getTimes().get(t).getNome());
					}
				}
			for(int r=0; r<20; r++) {
				todosConfrontos.remove(r*20);
			}
		
		for (int k=1; k<21; k++) {
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
									resultadosRodadas.add(random1);
									resultadosRodadas.add(random2);
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
									resultadosRodadas.add(random1);
									resultadosRodadas.add(random2);
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
									resultadosRodadas.add(random1);
									resultadosRodadas.add(random2);
									for (int e=0; e<11; e++) {
										d.getTimes().get(j).getJogadores().get(e).setPartidas(
												(d.getTimes().get(j).getJogadores().get(e).getPartidas())+1);
										d.getTimes().get(p).getJogadores().get(e).setPartidas(
												(d.getTimes().get(p).getJogadores().get(e).getPartidas())+1);
									}									}
						}
					}
				}
			}
		}
		return resultadosRodadas;
	}
	
	/**
	 * Método responsável por listar todos os confrontos e resultados por rodada 
	 * @param ArrayList<Integer> Array contendo os resultados das partidas das rodadas 
	 * @param numRodada Número da rodada a ter os confrontos e resultados listados
	 * @return String[] com os confrontos e resultados de determinada rodada
	 */
	public String[] listarJogosDaRodada(ArrayList<Integer> lista, int numRodada){
		String[] resultadosEConfrontos = new String[380];
		String[] confrontos = new  String[380];
		String[] resultados = new String[380];
		String[] resultadosPorRodada = new String[19];
		for(int i=0; i<380; i++ ) {
			resultados[i] = Integer.toString(lista.get(i))+ " X "
					+ Integer.toString(lista.get(i+1));
		}
		for(int e=0; e<380; e++) {
			confrontos = getTodosConfrontos().get(e).split("-");
			resultadosEConfrontos[e] = confrontos[0] + " " + resultados[e] + " " + confrontos[1];
		}
		if (numRodada == 1) {
			for(int j=0; j<19; j++) {
				resultadosPorRodada[j] = resultadosEConfrontos[j];
			}
		}
		else if (numRodada == 2) {
			for(int j=0; j<19; j++) {
				resultadosPorRodada[j] = resultadosEConfrontos[j+19];
			}
		}
		else if (numRodada == 3) {
			for(int j=0; j<19; j++) {
				resultadosPorRodada[j] = resultadosEConfrontos[j+38];
			}
		}
		else if (numRodada == 4) {
			for(int j=0; j<19; j++) {
				resultadosPorRodada[j] = resultadosEConfrontos[j+57];
			}
		}
		else if (numRodada == 5) {
			for(int j=0; j<19; j++) {
				resultadosPorRodada[j] = resultadosEConfrontos[j+76];
			}
		}
		else if (numRodada == 6) {
			for(int j=0; j<19; j++) {
				resultadosPorRodada[j] = resultadosEConfrontos[j+95];
			}
		}
		else if (numRodada == 7) {
			for(int j=0; j<19; j++) {
				resultadosPorRodada[j] = resultadosEConfrontos[j+114];
			}
		}
		else if (numRodada == 8) {
			for(int j=0; j<19; j++) {
				resultadosPorRodada[j] = resultadosEConfrontos[j+133];
			}
		}
		else if (numRodada == 9) {
			for(int j=0; j<19; j++) {
				resultadosPorRodada[j] = resultadosEConfrontos[j+152];
			}
		}
		else if (numRodada == 10) {
			for(int j=0; j<19; j++) {
				resultadosPorRodada[j] = resultadosEConfrontos[j+171];
			}
		}
		else if (numRodada == 11) {
			for(int j=0; j<19; j++) {
				resultadosPorRodada[j] = resultadosEConfrontos[j+190];
			}
		}
		else if (numRodada == 12) {
			for(int j=0; j<19; j++) {
				resultadosPorRodada[j] = resultadosEConfrontos[j+209];
			}
		}
		else if (numRodada == 13) {
			for(int j=0; j<19; j++) {
				resultadosPorRodada[j] = resultadosEConfrontos[j+228];
			}
		}
		else if (numRodada == 14) {
			for(int j=0; j<19; j++) {
				resultadosPorRodada[j] = resultadosEConfrontos[j+247];
			}
		}
		else if (numRodada == 15) {
			for(int j=0; j<19; j++) {
				resultadosPorRodada[j] = resultadosEConfrontos[j+266];
			}
		}
		else if (numRodada == 16) {
			for(int j=0; j<19; j++) {
				resultadosPorRodada[j] = resultadosEConfrontos[j+285];
			}
		}
		else if (numRodada == 17) {
			for(int j=0; j<19; j++) {
				resultadosPorRodada[j] = resultadosEConfrontos[j+304];
			}
		}
		else if (numRodada == 18) {
			for(int j=0; j<19; j++) {
				resultadosPorRodada[j] = resultadosEConfrontos[j+323];
			}
		}
		else if (numRodada == 19) {
			for(int j=0; j<19; j++) {
				resultadosPorRodada[j] = resultadosEConfrontos[j+342];
			}
		}
		else if (numRodada == 20) {
			for(int j=0; j<19; j++) {
				resultadosPorRodada[j] = resultadosEConfrontos[j+361];
			}
		}
		return resultadosPorRodada;
	}
	
	public ArrayList<String> getTodosConfrontos() {
		return todosConfrontos;
	}

	public void setTodosConfrontos(ArrayList<String> todosConfrontos) {
		this.todosConfrontos = todosConfrontos;
	}

	public ArrayList<Integer> getResultadosRodadas() {
		return resultadosRodadas;
	}

	public void setResultadosRodadas(ArrayList<Integer> resultadosRodadas) {
		this.resultadosRodadas = resultadosRodadas;
	}
	
	/**
	 * Pega todos os dados relevantes de um objeto e transforma em String
	 */
	@Override
	public String toString() {
		return "Todos os confrontos da Temporada = " + todosConfrontos + "]";
	}
	}
	
			

