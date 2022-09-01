package model;

import java.util.*;

public class Partida {

	private ArrayList<String> resultadosDaRodada;
	private int numeroRodada;
	
	
	public Partida() {
		super();
	}
	
	
	public Partida(ArrayList<String> resultadosDaRodada, int numeroRodada) {
		super();
		this.resultadosDaRodada = resultadosDaRodada;
		this.numeroRodada = numeroRodada;
	}

	
	public ArrayList<String> getResultadosDaRodada() {
		return resultadosDaRodada;
	}

	public void setResultadosDaRodada(ArrayList<String> resultadosDaRodada) {
		this.resultadosDaRodada = resultadosDaRodada;
	}

	public int getNumeroRodada() {
		return numeroRodada;
	}

	public void setNumeroRodada(int numeroRodada) {
		this.numeroRodada = numeroRodada;
	}

	
	@Override
	public String toString() {
		return "Partida [resultadosDaRodada=" + resultadosDaRodada + ", numeroRodada=" + numeroRodada + "]";
	}
		
	
}
