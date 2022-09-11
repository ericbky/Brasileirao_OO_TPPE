package controller;

import java.util.*;
import model.*;

/**
 *Classe responsável por controlar os dados referentes a classe Time 
 * @author Rafael Bosi
 *@version 1.0 (set 2022)
 */
public class TimeController {
	private ArrayList<Time> listaTimes = new ArrayList<Time>();
	
	/**
	 * Preenche o ArrayList listaTimes com dados de todos os times existentes
	 * @param dados Um objeto da classe DadosController que nos possibilita operar com todos os dados presentes na aplicação
	 */
	public TimeController(DadosController dados) {
		listaTimes = dados.getTimes();
	}
	
	/**
	 * Método responsável por listar o Nome, os Pontos e os gols sofridos de todos os times
	 * @return Retorna um String[] contendo o nome, os pontos e os gols sofridos de todos os times
	 */
	public String[] getNomePontos() {
		String[] lista = new String[listaTimes.size()];
		for (int n=0; n<listaTimes.size(); n++) {
			lista[n] = "Nome: " + listaTimes.get(n).getNome() + " / " +
					"Pontos: " + listaTimes.get(n).getPontos() + " / " + "Gols Sofridos: " +
					listaTimes.get(n).getGolsSofridos() + "\n";
		}
		return lista;
	}
	
	public ArrayList<Time> getListaTimes() {
		return listaTimes;
	}

	public void setListaTimes(ArrayList<Time> listaTimes) {
		this.listaTimes = listaTimes;
	}
}
