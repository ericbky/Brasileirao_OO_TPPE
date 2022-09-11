package controller;

import model.*;
import java.util.*;

/**
 * Classe responsável por controlar os dados referentes a classe Tabela
 * @author Rafael Bosi
 *@version 1.0 (set 2022)
 */
public class TabelaController {
	private ArrayList<Time> listaTimes = new ArrayList<Time>();
	
	/**
	 * Preenche o ArrayList listaTimes com dados de todos os times existentes
	 * @param dados Um objeto da classe DadosController que nos possibilita operar com todos os dados presentes na aplicação
	 */
	public TabelaController(DadosController dados) {
		listaTimes = dados.getTimes();
	}
	
	/**
	 * Método responsável por classificar os times
	 * @return Retorna um ArrayList com os times em ordem decrescente de pontos obtidos
	 */
	public ArrayList<Time> montarClassificao() {
		Collections.sort(listaTimes, new ComparatorTime());
		return listaTimes;
	}

	public ArrayList<Time> getListaTimes() {
		return listaTimes;
	}

	public void setListaTimes(ArrayList<Time> listaTimes) {
		this.listaTimes = listaTimes;
	}
}
