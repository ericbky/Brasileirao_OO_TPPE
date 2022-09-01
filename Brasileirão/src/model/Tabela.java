package model;

//import java.util.*

public class Tabela {

	private String nomeTime;
	private int pontosTime;
	private int partidasTime;
	private int vitoriasTime;
	private int empatesTime;
	private int derrotasTime;
	private int golsSofridos;
	private int golsMarcados;
	private int saldoGolsTime;
	
	public Tabela() {
		super();
	}
	
	
	public Tabela(String nomeTime, int pontosTime, int partidasTime, int vitoriasTime, int empatesTime,
			int derrotasTime, int golsSofridos, int golsMarcados, int saldoGolsTime) {
		super();
		this.nomeTime = nomeTime;
		this.pontosTime = pontosTime;
		this.partidasTime = partidasTime;
		this.vitoriasTime = vitoriasTime;
		this.empatesTime = empatesTime;
		this.derrotasTime = derrotasTime;
		this.golsSofridos = golsSofridos;
		this.golsMarcados = golsMarcados;
		this.saldoGolsTime = saldoGolsTime;
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


	public int getSaldoGolsTime() {
		return saldoGolsTime;
	}


	public void setSaldoGolsTime(int saldoGolsTime) {
		this.saldoGolsTime = saldoGolsTime;
	}


	@Override
	public String toString() {
		return "Tabela [nomeTime=" + nomeTime + ", pontosTime=" + pontosTime + ", partidasTime=" + partidasTime
				+ ", vitoriasTime=" + vitoriasTime + ", empatesTime=" + empatesTime + ", derrotasTime=" + derrotasTime
				+ ", golsSofridos=" + golsSofridos + ", golsMarcados=" + golsMarcados + ", saldoGolsTime="
				+ saldoGolsTime + "]";
	}
	
}
	