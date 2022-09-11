package model;

/**
 * Classe responsável por criar objetos do tipo TabelaDeArtilharia
 * @author Rafael Bosi
 *@version 1.0 (set 2022)
 */
public class TabelaDeArtilharia {

	private int golsJogador;
	private int partidasJogador;
	private String nomeJogador;
	private String timeJogador;
	
	/**
	 * Construtor sem parâmetro da classe TabelaDeArtilharia
	 */
	public TabelaDeArtilharia() {
		super();
	}

	/**
	 * Construtor da classe TabelaDeArtilharia que necessita de informações para funcionar
	 * @param golsJogadores Número de gols marcados pelo jogadore presente na tabela
	 * @param partidasJogador Número de partidas jogadas pelo jogadore presente na tabela
	 * @param nomeJogador Nome do jogadore presente na tabela
	 * @param timeJogador Nome do time do jogador presente na tabela
	 */
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

	/**
	 * Pega todas os dados relevantes do objeto e transforma em uma String
	 */
	@Override
	public String toString() {
		return "TabelaDeArtilharia [golsJogadores=" + golsJogador + ", partidasJogador=" + partidasJogador
				+ ", nomeJogador=" + nomeJogador + ", timeJogador=" + timeJogador + "]";
	}
	
}
