package controller;

import model.*;
import java.util.*;

public class rodadasController {
	
	private ArrayList<String> todosConfrontos = new ArrayList<String>();
	private ArrayList<String> confrontosRodada1 = new ArrayList<String>(); 
	private ArrayList<String> confrontosRodada2 = new ArrayList<String>(); 
	private ArrayList<String> confrontosRodada3 = new ArrayList<String>(); 
	private ArrayList<String> confrontosRodada4 = new ArrayList<String>(); 
	private ArrayList<String> confrontosRodada5 = new ArrayList<String>(); 
	private ArrayList<String> confrontosRodada6 = new ArrayList<String>(); 
	private ArrayList<String> confrontosRodada7 = new ArrayList<String>(); 
	private ArrayList<String> confrontosRodada8 = new ArrayList<String>(); 
	private ArrayList<String> confrontosRodada9 = new ArrayList<String>(); 
	private ArrayList<String> confrontosRodada10 = new ArrayList<String>(); 
	Dados g = new Dados();
	
	public void definirConfrontosTemporada() {
		g.alimentarTimes();
		for(int p=0; p<20; p++) {
			for (int t=0; t<20; t++) {
				todosConfrontos.add(g.getTimes().get(p).getNome() + 
						" VS " + g.getTimes().get(t).getNome());
				}
			}
		for(int r=0; r<20; r++) {
			todosConfrontos.remove(r*20);
		}
		}
	public void definirConfrontosPorRodada() {
		for (int i=0; i<10; i++ ) {
			confrontosRodada1.add(todosConfrontos.get(i*40));
		}
		for (int i=1; i<10; i++ ) {
			confrontosRodada2.add(todosConfrontos.get(i*(40+1)));
		}
		System.out.println(confrontosRodada1);
		System.out.println(confrontosRodada2);
	}

	public ArrayList<String> getTodosConfrontos() {
		return todosConfrontos;
	}

	public void setTodosConfrontos(ArrayList<String> todosConfrontos) {
		this.todosConfrontos = todosConfrontos;
	}

	@Override
	public String toString() {
		return "Todos os confrontos da Temporada = " + todosConfrontos + "]";
	}

	

	}
	
			

