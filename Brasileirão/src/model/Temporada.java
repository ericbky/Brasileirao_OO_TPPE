package model;

import java.util.*;

/**
 * Classe responsável por criar objetos do tipo Temporada
 * @author Rafael Bosi
 *@version 1.0 (set 2022)
 */
public class Temporada {

	private ArrayList<String> confrontosDaTemporada;
	private ArrayList<String> resultadosDaTemporada;
	private int numeroRodada;
	
	/**
	 * Construtor sem parâmetro da classe Temporada
	 */
	public Temporada() {
		super();
	}

	/**
	 * Construtor da classe Temporada que necessita de informações para funcionar
	 * @param confrontosDaRodada ArrayList para conter todos os confrontos da temporada
	 * @param resultadosDaRodada ArrayList para conter todos os resultados da temporada
	 */
	public Temporada(ArrayList<String> confrontosDaTemporada, ArrayList<String> resultadosDaTemporada) {
		super();
		this.confrontosDaTemporada = confrontosDaTemporada;
		this.resultadosDaTemporada = resultadosDaTemporada;
	}
	
	public ArrayList<String> getConfrontosDaTemporada() {
		return confrontosDaTemporada;
	}

	public void setConfrontosDaTemporada(ArrayList<String> confrontosDaTemporada) {
		this.confrontosDaTemporada = confrontosDaTemporada;
	}

	public ArrayList<String> getResultadosDaTemporada() {
		return resultadosDaTemporada;
	}

	public void setResultadosDaRodada(ArrayList<String> resultadosDaTemporada) {
		this.resultadosDaTemporada = resultadosDaTemporada;
	}
	
	

		
}
