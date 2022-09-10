//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
package controller;

//import java.util.*;
import model.*;

public class JogadorController {
	public static void main (String[] args) {
		DadosController d = new DadosController();
		RodadasController g = new RodadasController();
		Dados dados = new Dados();
		d.createAllData();
		g.definirConfrontosTemporada();
		g.simularRodada(11);
		System.out.println(g.getTodosConfrontos());
		//System.out.println();
	}
}