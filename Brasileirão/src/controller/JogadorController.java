package controller;

import java.util.ArrayList;

import model.*;

public class JogadorController {
	
	public static void main(String[] args) {
		Jogador j1 = new Jogador("Rafael", "Cruzeiro", "Masculino", 19, 4, "Ataque", 6, 
				27, 1 );
		Jogador j2 = new Jogador("Francisco", "Cruzeiro", "Masculino", 24, -1, "Viado", 6, 
				30, 2);
		
		
		ArrayList<Jogador> jogadoresCruzeiro = new ArrayList<Jogador>();
		jogadoresCruzeiro.add(j1);
		jogadoresCruzeiro.add(j2);
		j1.setPartidas(0);
		Time cruzeiro = new Time("Cruzeiro", jogadoresCruzeiro, 1, 12, 4, 4, 0, 0, 2, 15, "4-3-3");
		System.out.println(cruzeiro);
		
	}

}
