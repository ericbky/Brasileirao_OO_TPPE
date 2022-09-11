package controller;

import model.*;
import java.util.*;

/**
 * Classe responsável por tratar os dados referentes a classe TabelaDeArtilharia
 * @author Rafael Bosi
 *@version 1.0 (set 2022)
 */
public class TabelaDeArtilhariaController {
	private ArrayList<Jogador> listaJogadores = new ArrayList<Jogador>(); 
	
	/**
	 * Preenche a ArrayList listaJogadores com todos os jogadores existentes até o momento
	 * @param dados Um objeto da classe DadosController que nos possibilita operar com todos os dados presentes na aplicação
	 */
	public TabelaDeArtilhariaController(DadosController dados) {
		listaJogadores = dados.getJogadores();
	}
	
	/**
	 * Método responsável por ordenar a artilharia
	 * @return Retorna um ArrayList com os jogadores em ordem de quem marcou mais gols para quem marcou menos
	 */
	public ArrayList<Jogador> classificacaoArtilharia(){
		Collections.sort(listaJogadores, new ComparatorJogador());
		return listaJogadores;
	}

	public ArrayList<Jogador> getListaJogadores() {
		return listaJogadores;
	}

	public void setListaJogadores(ArrayList<Jogador> listaJogadores) {
		this.listaJogadores = listaJogadores;
	}
}
