package model;

import java.util.*;

public class Tecnico extends Pessoa {
	
	
	private boolean cbf;
	private ArrayList<String> opcoesTaticas;
	private String imagemInterna;
	private String imagemExterna;
	
	public Tecnico() {
		super();
	}
	
	public Tecnico(String nome, String nomeTime, String sexo, 
			int idade, boolean cbf, ArrayList<String> opcoesTaticas, 
			String imagemInterna, String imagemExterna) {
		super(nome, nomeTime, sexo, idade);
		this.cbf = cbf;
		this.opcoesTaticas = opcoesTaticas;
		this.imagemInterna = imagemInterna;
		this.imagemExterna = imagemExterna;
	}
	
	public String escolherTatica(int n) {
		String tatica = opcoesTaticas.get(n);
		return tatica;
	}
	
	
	public boolean isCbf() {
		return cbf;
	}
	public void setCbf(boolean cbf) {
		this.cbf = cbf;
	}
	public ArrayList<String> getOpcoesTaticas() {
		return opcoesTaticas;
	}
	public void setOpcoesTaticas(ArrayList<String> opcoesTaticas) {
		this.opcoesTaticas = opcoesTaticas;
	}
	public String getImagemInterna() {
		return imagemInterna;
	}
	public void setImagemInterna(String imagemInterna) {
		this.imagemInterna = imagemInterna;
	}
	public String getImagemExterna() {
		return imagemExterna;
	}
	public void setImagemExterna(String imagemExterna) {
		this.imagemExterna = imagemExterna;
	}


	@Override
	public String toString() {
		return nome + "[time = " + nomeTime + ", sexo = " + sexo + ", idade = " + idade + ", cbf = " + cbf + ", opcoesTaticas = "
				+ opcoesTaticas + ", imagemInterna = " + imagemInterna
				+ ", imagemExterna = " + imagemExterna + "]\n";
	}
	
	

}
