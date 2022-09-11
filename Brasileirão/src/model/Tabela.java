package model;

/**
 * Classe responsável pela criação de objetos tipo Tabela
 * @author Rafael Bosi
 *@version 1.0 (set 2022)
 */
public class Tabela {

	private String nomeTime;
	private int pontosTime;
	private int partidasTime;
	private int vitoriasTime;
	private int empatesTime;
	private int derrotasTime;
	private int golsSofridos;
	private int golsMarcados;
	
	/**
	 * Construtor sem parâmetro da classe Tabela
	 */
	public Tabela() {
		super();
	}
	
	/**
	 * Construtor da classe Tabela que necessita de informações para funcionar
	 * @param nomeTime Nome do time presente na tabela
	 * @param pontosTime Pontos do time presente na tabela
	 * @param partidasTime Partidas jogadas pelo time presente na tabela
	 * @param vitoriasTime Número de vitórias do time presente na tabela
	 * @param empatesTime Número de empates do time presente na tabela
	 * @param derrotasTime Número de derrotas do time presente na tabela
	 * @param golsSofridos Número de gols sofridos pelo time presente na tabela
	 * @param golsMarcados Número de gols marcados pelo time presente na tabela 
	 */
	public Tabela(String nomeTime, int pontosTime, int partidasTime, int vitoriasTime, int empatesTime,
			int derrotasTime, int golsSofridos, int golsMarcados) {
		super();
		this.nomeTime = nomeTime;
		this.pontosTime = pontosTime;
		this.partidasTime = partidasTime;
		this.vitoriasTime = vitoriasTime;
		this.empatesTime = empatesTime;
		this.derrotasTime = derrotasTime;
		this.golsSofridos = golsSofridos;
		this.golsMarcados = golsMarcados;
	}


	public String getNomeTime() {
		return nomeTime;
	}


	public void setNomeTime(String nomeTime) {
		this.nomeTime = nomeTime;
	}


	public int getPontosTime() {
		return pontosTime;
	}


	public void setPontosTime(int pontosTime) {
		this.pontosTime = pontosTime;
	}


	public int getPartidasTime() {
		return partidasTime;
	}


	public void setPartidasTime(int partidasTime) {
		this.partidasTime = partidasTime;
	}


	public int getVitoriasTime() {
		return vitoriasTime;
	}


	public void setVitoriasTime(int vitoriasTime) {
		this.vitoriasTime = vitoriasTime;
	}


	public int getEmpatesTime() {
		return empatesTime;
	}


	public void setEmpatesTime(int empatesTime) {
		this.empatesTime = empatesTime;
	}


	public int getDerrotasTime() {
		return derrotasTime;
	}


	public void setDerrotasTime(int derrotasTime) {
		this.derrotasTime = derrotasTime;
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

	/**
	 * Pega todos os dados relevantes do objeto e transforma em uma String
	 */
	@Override
	public String toString() {
		return "Tabela [nomeTime=" + nomeTime + ", pontosTime=" + pontosTime + ", partidasTime=" + partidasTime
				+ ", vitoriasTime=" + vitoriasTime + ", empatesTime=" + empatesTime + ", derrotasTime=" + derrotasTime
				+ ", golsSofridos=" + golsSofridos + ", golsMarcados=" + golsMarcados + "]";
	}
	
}
	