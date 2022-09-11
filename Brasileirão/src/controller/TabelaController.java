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
	public String[] montarClassificacao() {
		String[] lista = new String[20];
		Collections.sort(listaTimes, new ComparatorTime());
		for (int i=0; i<20; i++) {
			listaTimes.get(i).setColocacao(i+1);
		}
		for(int n=0; n<20; n++) {
			lista[n] = (n+1) + "  " + listaTimes.get(n).getNome() + "  " + 
					listaTimes.get(n).getPontos() + "  " +
					listaTimes.get(n).getNumeroJogos() + "  " +
					listaTimes.get(n).getNumeroVitorias() + "  " +
					listaTimes.get(n).getNumeroEmpates() + "  " +
					listaTimes.get(n).getNumeroDerrotas() + "  " +
					listaTimes.get(n).getGolsMarcados() + "  " +
					listaTimes.get(n).getGolsSofridos();
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
