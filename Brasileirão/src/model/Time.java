package model;

import java.util.*;

/**
 * Classe responsável por criar objetos do tipo Time
 * @author Rafael Bosi
 *@version 1.0 (set 2022)
 */
public class Time {

	private String nome;
	private ArrayList<Jogador> jogadores;
	private int colocacao;
	private int pontos;
	private int numeroJogos;
	private int numeroVitorias;
	private int numeroEmpates;
	private int numeroDerrotas;
	private int golsSofridos;
	private int golsMarcados;
	private String tatica;
	
	/**
	 * Construtor da classe Time que necessita de informações para funcionar
	 * @param nome Nome do time
	 * @param jogadores ArrayList para conter os objetos de Jogador presentes no time
	 * @param colocacao Colocação do time
	 * @param pontos Número de pontos do time
	 * @param numeroJogos Número de partidas jogadas pelo time
	 * @param numeroVitorias Número de vitórias do time
	 * @param numeroEmpates Número de empates do time
	 * @param numeroDerrotas Número de derrotas do time
	 * @param golsSofridos Número de gols sofridos pelo time
	 * @param golsMarcados Número de gols marcados pelo time
	 * @param tatica Tática usada pelo time
	 */
	public Time(String nome, ArrayList<Jogador> jogadores, int colocacao, int pontos, int numeroJogos,
			int numeroVitorias, int numeroEmpates, int numeroDerrotas, int golsSofridos, int golsMarcados,
			String tatica) {
		super();
		this.nome = nome;
		this.jogadores = jogadores;
		this.colocacao = colocacao;
		this.pontos = pontos;
		this.numeroJogos = numeroJogos;
		this.numeroVitorias = numeroVitorias;
		this.numeroEmpates = numeroEmpates;
		this.numeroDerrotas = numeroDerrotas;
		this.golsSofridos = golsSofridos;
		this.golsMarcados = golsMarcados;
		this.tatica = tatica;
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public ArrayList<Jogador> getJogadores() {
		return jogadores;
	}


	public void setJogadores(ArrayList<Jogador> jogadores) {
		this.jogadores = jogadores;
	}


	public int getColocacao() {
		return colocacao;
	}


	public void setColocacao(int colocacao) {
		this.colocacao = colocacao;
	}


	public int getPontos() {
		return pontos;
	}


	public void setPontos(int pontos) {
		this.pontos = pontos;
	}


	public int getNumeroJogos() {
		return numeroJogos;
	}


	public void setNumeroJogos(int numeroJogos) {
		this.numeroJogos = numeroJogos;
	}


	public int getNumeroVitorias() {
		return numeroVitorias;
	}


	public void setNumeroVitorias(int numeroVitorias) {
		this.numeroVitorias = numeroVitorias;
	}


	public int getNumeroEmpates() {
		return numeroEmpates;
	}


	public void setNumeroEmpates(int numeroEmpates) {
		this.numeroEmpates = numeroEmpates;
	}


	public int getNumeroDerrotas() {
		return numeroDerrotas;
	}


	public void setNumeroDerrotas(int numeroDerrotas) {
		this.numeroDerrotas = numeroDerrotas;
	}


	public int getGolsSofridos() {
		return golsSofridos;
	}


	public void setGolsSofridos(int golsSofridos) {
		this.golsSofridos = golsSofridos;
	}


	public int getGolsMarcados() {
		return golsMarcados;
	}


	public void setGolsMarcados(int golsMarcados) {
		this.golsMarcados = golsMarcados;
	}


	public String getTatica() {
		return tatica;
	}


	public void setTatica(String tatica) {
		this.tatica = tatica;
	}

	/**
	 * Pega os dados relevantes e transforma em uma String
	 */
	@Override
	public String toString() {
		return "Time [nome = " + nome + ", jogadores = " + jogadores + ", colocacao = " + colocacao + ", pontos = " + pontos
				+ ", numeroJogos = " + numeroJogos + ", numeroVitorias = " + numeroVitorias + ", numeroEmpates = "
				+ numeroEmpates + ", numeroDerrotas = " + numeroDerrotas + ", golsSofridos = " + golsSofridos
				+ ", golsMarcados = " + golsMarcados + ", tatica = " + tatica + "]";
	}
	
	
	
}
