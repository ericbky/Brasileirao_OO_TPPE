package model;

/**
 * Classe responsável pela criação de objetos do tipo Jogador e classe filha da classe Pessoa
 * @author Rafael Bosi
 *@version 1.0 (set 2022)
 */
public class Jogador extends Pessoa {
	
	private int gols;
	private String posicao;
	private int partidas;
	private int numCamisa;
	private int id;
	
	/**
	 * Construtor sem parâmetros da classe Jogador
	 */
	public Jogador() {
		super();
	}
	
	/**
	 * Construtor da classe Jogador que necessita de inforções para funcionar
	 * @param nome Nome do jogador
	 * @param nomeTime Nome do time do jogador
	 * @param sexo Sexo do jogador
	 * @param idade Idade do jogador
	 * @param gols Número de gols feiitos pelo jogador
	 * @param posicao Posição do jogador ("Ataque", "Defesa", "Goleiro")
	 * @param partidas Número de partidas jogadas pelo jogador
	 * @param numCamisa Número da camisa do jogador
	 * @param id Id do jogador (Para entender melhor a necessidade olhe DadosController)
	 */
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

	/**
	 * Pega todos os dados relevantes do objeto e transforma em uma String
	 */
	@Override
	public String toString() {
		return  nome +"[time = " + nomeTime + ", sexo = " + sexo + ", idade = " + 
				idade + ", gols = " + gols + ", posicao = " + posicao + ", partidas = " + 
				partidas + ", numCamisa = " + numCamisa + ", id = " + id + "]\n";
	}
}
