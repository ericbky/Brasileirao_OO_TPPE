package model;

//import java.util.*;

public abstract class Pessoa {
	protected String nome;
	protected String nomeTime;
	protected String sexo;
	protected int idade;
	
	public Pessoa () {
		super();
	}

	public Pessoa(String nome, String nomeTime, String sexo, int idade) {
		super();
		this.nome = nome;
		this.nomeTime = nomeTime;
		this.sexo = sexo;
		this.idade = idade;
	}
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getNomeTime() {
		return nomeTime;
	}

	public void setNomeTime(String nomeTime) {
		this.nomeTime = nomeTime;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public int getIdade() {
		return idade;
	}

	public void setIdade(int idade) {
		this.idade = idade;
	}
	
	
}
