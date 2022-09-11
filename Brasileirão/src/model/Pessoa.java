package model;

/**
 * Classe abstrata pai das classes Jogador e Tecnico
 * @author Rafael Bosi
 *@version 1.0 (set 2022)
 */
public abstract class Pessoa {
	protected String nome;
	protected String nomeTime;
	protected String sexo;
	protected int idade;
	
	/**
	 * Construtor sem parâmetro da classe Pessoa
	 */
	public Pessoa () {
		super();
	}

	/**
	 * Construtor da classe Pessoa que necessita de informações para funcionar
	 * @param nome Nome da pessoa
	 * @param nomeTime Nome do time da pessoa
	 * @param sexo Sexo da pessoa
	 * @param idade Idade da pessoa
	 */
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
