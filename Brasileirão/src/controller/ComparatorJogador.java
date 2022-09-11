package controller;

import model.*;
import java.util.*;
/**
 * Classe que implementa Comparator<> e é responsável pela ordenação dos jogadores
 * @author Rafael Bosi
 *@version 1.0 (set 2022)
 */
public class ComparatorJogador implements Comparator<Jogador> {
	
	/**
	 * Método responsável por ser um modelo de como classificar os jogadores de acordo com o número de gols feitos  
	 * @param jogador1 jogador a ser comparado
	 * @param jogador2 jogador a ser comparado
	 * @return Retorna 1 ou -1 de acordo com o cumprimento ou não da condição
	 */
	@Override
	public int compare(Jogador jogador1, Jogador jogador2) {
		if(jogador1.getGols() > jogador2.getGols()) {
			return -1;
		}
		return 1;
	}
}
