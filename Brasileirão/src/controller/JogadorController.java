package controller;

import java.util.*;
import model.*;
/**
 * Classe responsável pelo controle das informações acerca da classe Jogador
 * @author Rafael Bosi
 *@version 1.0 (set 2022)
 */
public class JogadorController {
	private ArrayList<Jogador> listaJogadores = new ArrayList<Jogador>();

	/**
	 * Preenche a ArrayList listaJogadores com todos os jogadores existentes até o momento
	 * @param dados Um objeto da classe DadosController que nos possibilita operar com todos os dados presentes na aplicação
	 */
	public JogadorController(DadosController dados) {
		listaJogadores = dados.getJogadores();
	}
	
	/**
	 *Método responsável por pegar o nome, nome do time e a id de todos os jogadores existentes até o momento 
	 * @return Retorna um String[] com as informações Nome e Id de todos os jogadores
	 */
	public String[] getJogadorNomeEId() {
		String[] lista = new String[listaJogadores.size()];
		for (int n=0; n<listaJogadores.size(); n++) {
			lista[n] = "Nome = " + listaJogadores.get(n).getNome() +
					" Time = " + listaJogadores.get(n).getNomeTime() +
					" Id = " + listaJogadores.get(n).getId() + "\n";
		}
		return lista;
	}

	public ArrayList<Jogador> getListaJogadores() {
		return listaJogadores;
	}

	public void setListaJogadores(ArrayList<Jogador> listaJogadores) {
		this.listaJogadores = listaJogadores;
	}
}