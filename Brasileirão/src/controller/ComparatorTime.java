package controller;

import model.*;
import java.util.*;

/**
 * Classe que implementa Comparator<> e é responsável pela ordenação dos times
 * @author Rafael Bosi
 *@version 1.0 (set 2022)
 */
public class ComparatorTime implements Comparator<Time> {

	/**
	 * Método responsável por ser um modelo de como classificar os times de acordo com o número de pontos
	 * @param time1 Time a ser comparado
	 * @param time2 Time a ser comparado
	 * @return Retorna 1 ou -1 de acordo com o cumprimento ou não da condição
	 */
	@Override
	public int compare(Time time1, Time time2) {
		if(time1.getPontos()>time2.getPontos()) {
			return -1;
		}
		return 1;
	}
	
}
