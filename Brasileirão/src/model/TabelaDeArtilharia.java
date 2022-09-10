package model;

//import java.util.*

public class TabelaDeArtilharia {

	private int golsJogador;
	private int partidasJogador;
	private String nomeJogador;
	private String timeJogador;
	
	public TabelaDeArtilharia() {
		super();
	}

	public TabelaDeArtilharia(int golsJogadores, int partidasJogador, String nomeJogador, String timeJogador) {
		super();
		this.golsJogador = golsJogadores;
		this.partidasJogador = partidasJogador;
		this.nomeJogador = nomeJogador;
		this.timeJogador = timeJogador;
	}

	
	public int getGolsJogadores() {
		return golsJogador;
	}

	public void setGolsJogadores(int golsJogadores) {
		this.golsJogador = golsJogadores;
	}

	public int getPartidasJogador() {
		return partidasJogador;
	}

	public void setPartidasJogador(int partidasJogador) {
		this.partidasJogador = partidasJogador;
	}

	public String getNomeJogador() {
		return nomeJogador;
	}

	public void setNomeJogador(String nomeJogador) {
		this.nomeJogador = nomeJogador;
	}

	public String getTimeJogador() {
		return timeJogador;
	}

	public void setTimeJogador(String timeJogador) {
		this.timeJogador = timeJogador;
	}

	@Override
	public String toString() {
		return "TabelaDeArtilharia [golsJogadores=" + golsJogador + ", partidasJogador=" + partidasJogador
				+ ", nomeJogador=" + nomeJogador + ", timeJogador=" + timeJogador + "]";
	}
	
}
