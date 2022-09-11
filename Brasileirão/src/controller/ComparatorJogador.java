package controller;

import model.*;
import java.util.*;
/**
 * Classe que implementa Comparator e é responsável pela ordenação dos jogadores
 * @author Rafael Bosi
 *@version 1.0 (set 2022)
 */
public class ComparatorJogador implements Comparator<Jogador> {
	
	/**
	 * Método responsável por ser um modelo de como classificar os jogadores de acordo com o número de gols feitos e sobrescrita do método padrão da classe Comparator<>
	 * @param jogador1 jogador a ser comparado
	 * @param jogador2 jogador a ser comparado
	 * @return Retorna 1 ou -1 de acordo com o cumprimento ou não da condição
	 */
	@Override
	public int compare(Jogador jogador1, Jogador jogador2) {
		int gol1 = jogador1.getGols();
		int gol2 = jogador2.getGols();
		if( gol1 > gol2) {
			return -1;
		}
		else if (gol1 == gol2) {
			return 0;
		}
		else{
			return 1;
		}
	}
}
