package model;

import java.util.*;

public class Rodada {

	private ArrayList<String> confrontosDaRodada;
	private ArrayList<String> resultadosDaRodada;
	private int numeroRodada;
	
	public Rodada() {
		super();
	}

	public Rodada(ArrayList<String> confrontosDaRodada, ArrayList<String> resultadosDaRodada, int numeroRodada) {
		super();
		this.confrontosDaRodada = confrontosDaRodada;
		this.resultadosDaRodada = resultadosDaRodada;
		this.numeroRodada = numeroRodada;
	}
	
	public ArrayList<String> getConfrontosDaRodada() {
		return confrontosDaRodada;
	}

	public void setConfrontosDaRodada(ArrayList<String> confrontosDaRodada) {
		this.confrontosDaRodada = confrontosDaRodada;
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
		return "Rodada " + numeroRodada + " [confrontosDaRodada = " + confrontosDaRodada + 
				", resultadosDaRodada = " + resultadosDaRodada + "]\n";
	}
	
	

		
}
