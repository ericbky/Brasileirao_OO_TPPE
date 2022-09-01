package model;

//import java.util.*;

public class Jogador extends Pessoa {
	
	private int gols;
	private String posicao;
	private int partidas;
	private int numCamisa;
	private int id;
	
	public Jogador(String nome, String nomeTime, String sexo, int idade, int gols, 
			String posicao, int partidas, int numCamisa, int id) {
		super(nome, nomeTime, sexo, idade);
		this.gols = gols;
		this.posicao = posicao;
		this.partidas = partidas;
		this.numCamisa = numCamisa;
		this.id = id;
	}
	

	public int getGols() {
		return gols;
	}

	public void setGols(int gols) {
		this.gols = gols;
	}

	public String getPosicao() {
		return posicao;
	}

	public void setPosicao(String posicao) {
		this.posicao = posicao;
	}

	public int getPartidas() {
		return partidas;
	}

	public void setPartidas(int partidas) {
		this.partidas = partidas;
	}
	

	public int getNumCamisa() {
		return numCamisa;
	}

	public void setNumCamisa(int numCamisa) {
		this.numCamisa = numCamisa;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}


	@Override
	public String toString() {
		return  nome +"[time = " + nomeTime + ", sexo = " + sexo + ", idade = " + 
				idade + ", gols = " + gols + ", posicao = " + posicao + ", partidas = " + 
				partidas + ", numCamisa = " + numCamisa + ", id = " + id + "]";
	}
	
	
}
