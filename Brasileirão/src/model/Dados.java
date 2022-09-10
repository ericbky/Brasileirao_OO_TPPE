package model;

import java.util.*;
import controller.*;

public class Dados {
	
	private ArrayList<Jogador> jogadores = new ArrayList<Jogador>();
	private ArrayList<Tecnico> tecnicos = new ArrayList<Tecnico>();
	private ArrayList<String> taticas = new ArrayList<String>();
	private ArrayList<Time> times = new ArrayList<Time>();
	private ArrayList<Jogador> jogadoresBayern = new ArrayList<Jogador>();
	private ArrayList<Jogador> jogadoresRealMadrid = new ArrayList<Jogador>();
	private ArrayList<Jogador> jogadoresBarcelona = new ArrayList<Jogador>();
	private ArrayList<Jogador> jogadoresBorussia = new ArrayList<Jogador>();
	private ArrayList<Jogador> jogadoresManchesterUnited = new ArrayList<Jogador>();
	private ArrayList<Jogador> jogadoresPorto = new ArrayList<Jogador>();
	private ArrayList<Jogador> jogadoresJuventus = new ArrayList<Jogador>();
	private ArrayList<Jogador> jogadoresPSG = new ArrayList<Jogador>();
	private ArrayList<Jogador> jogadoresChealsea = new ArrayList<Jogador>();
	private ArrayList<Jogador> jogadoresArsenal = new ArrayList<Jogador>();
	private ArrayList<Jogador> jogadoresMilan = new ArrayList<Jogador>();
	private ArrayList<Jogador> jogadoresManchesterCity = new ArrayList<Jogador>();
	private ArrayList<Jogador> jogadoresBenfica = new ArrayList<Jogador>();
	private ArrayList<Jogador> jogadoresShakhtar = new ArrayList<Jogador>();
	private ArrayList<Jogador> jogadoresTottenham = new ArrayList<Jogador>();
	private ArrayList<Jogador> jogadoresBayernLeverkusen = new ArrayList<Jogador>();
	private ArrayList<Jogador> jogadoresAjax = new ArrayList<Jogador>();
	private ArrayList<Jogador> jogadoresAtleticoMadrid = new ArrayList<Jogador>();
	private ArrayList<Jogador> jogadoresNapoli = new ArrayList<Jogador>();
	private ArrayList<Jogador> jogadoresLiverpool  = new ArrayList<Jogador>();
	
	public Dados() {
		super();
	}
	
	int random1;
	public int randomNumber1(int min, int max) {
	    Random r = new Random();
	    random1 = r.nextInt((max - min) - 1) + min;
	    return random1;
	}
	int random2;
	public int randomNumber2(int min, int max) {
	    Random p = new Random();
	    random2 = p.nextInt((max - min) + 1) + min;
	    return random2;
	}
	
	public void createPlayers() {
		for(int i=1; i<221; i++) {
			randomNumber1(18, 30);
			if (i%11 == 0) {
				jogadores.add(new Jogador("jogador "+ i, "", 
						"Masculino", random1, 0, "Goleiro", 0, i, i));
			}
			else if (i%2 == 0) {
				jogadores.add(new Jogador("jogador "+ i, "", 
						"Masculino", random1, 0, "Defesa", 0, i, i));
			}
			else {
				jogadores.add(new Jogador("jogador "+ i, "", 
						"Masculino", random1, 0, "Ataque", 0, i, i));
			}
		}
		int q;
		for (q=0; q<11; q++) {
			jogadoresBayern.add(jogadores.get(q));
			jogadores.get(q).setNomeTime("Bayern Muchen");
		}
		for (q=11; q<22; q++) {
			jogadoresRealMadrid.add(jogadores.get(q));
			jogadores.get(q).setNomeTime("Real Madrid");
		}
		for (q=22; q<33; q++) {
			jogadoresBarcelona.add(jogadores.get(q));
			jogadores.get(q).setNomeTime("Barcelona");
		}
		for (q=33; q<44; q++) {
			jogadoresBorussia.add(jogadores.get(q));
			jogadores.get(q).setNomeTime("Borussia Dortmund");
		}
		for (q=44; q<55; q++) {
			jogadoresManchesterUnited.add(jogadores.get(q));
			jogadores.get(q).setNomeTime("Manchester United");
		}
		for (q=55; q<66; q++) {
			jogadoresPorto.add(jogadores.get(q));
			jogadores.get(q).setNomeTime("Porto");
		}
		for (q=66; q<77; q++) {
			jogadoresJuventus.add(jogadores.get(q));
			jogadores.get(q).setNomeTime("Juventus");
		}
		for (q=77; q<88; q++) {
			jogadoresPSG.add(jogadores.get(q));
			jogadores.get(q).setNomeTime("Paris Saint Germain");
		}
		for (q=88; q<99; q++) {
			jogadoresChealsea.add(jogadores.get(q));
			jogadores.get(q).setNomeTime("Chealsea");
		}
		for (q=99; q<110; q++) {
			jogadoresArsenal.add(jogadores.get(q));
			jogadores.get(q).setNomeTime("Arsenal");
		}
		for (q=110; q<121; q++) {
			jogadoresMilan.add(jogadores.get(q));
			jogadores.get(q).setNomeTime("Milan");
		}
		for (q=121; q<132; q++) {
			jogadoresManchesterCity.add(jogadores.get(q));
			jogadores.get(q).setNomeTime("Manchester City");
		}
		for (q=132; q<143; q++) {
			jogadoresBenfica.add(jogadores.get(q));
			jogadores.get(q).setNomeTime("Benfica");
		}
		for (q=143; q<154; q++) {
			jogadoresShakhtar.add(jogadores.get(q));
			jogadores.get(q).setNomeTime("Shakhtar Donetsk");
		}
		for (q=154; q<165; q++) {
			jogadoresTottenham.add(jogadores.get(q));
			jogadores.get(q).setNomeTime("Tottenham Hotspur");
		}
		for (q=165; q<176; q++) {
			jogadoresBayernLeverkusen.add(jogadores.get(q));
			jogadores.get(q).setNomeTime("Bayern Leverkusen");
		}
		for (q=176; q<187; q++) {
			jogadoresAjax.add(jogadores.get(q));
			jogadores.get(q).setNomeTime("Ajax");
		}
		for (q=187; q<198; q++) {
			jogadoresAtleticoMadrid.add(jogadores.get(q));
			jogadores.get(q).setNomeTime("Atletico Madrid");
		}
		for (q=198; q<209; q++) {
			jogadoresNapoli.add(jogadores.get(q));
			jogadores.get(q).setNomeTime("Napoli");
		}
		for (q=209; q<220; q++) {
			jogadoresLiverpool.add(jogadores.get(q));
			jogadores.get(q).setNomeTime("Liverpool");
		}
	}
	
	public void createCoachs() {
		taticas.add("4-3-3");
		taticas.add("4-4-2");
		taticas.add("4-1-3-2");
		taticas.add("3-5-2");
		taticas.add("3-4-3");
		taticas.add("4-2-3-1");
		taticas.add("4-5-1");
		taticas.add("5-3-2");
		taticas.add("4-1-4-1");
		taticas.add("3-6-1");
		taticas.add("4-1-2-1-2");
		taticas.add("5-2-1-2");
		taticas.add("4-2-2-2");
		taticas.add("5-2-3");
		taticas.add("3-1-4-2");
		for (int e=0; e<20; e++) {
			randomNumber1(50, 70);
			tecnicos.add(new Tecnico("Tecnico " + (e+1), "", 
					"Masculino", random1, true, taticas, "Boa", "Boa"));
		}
	}
	
	public void atribuirTecnicos() {
		for (int e=0; e<20; e++) {
			tecnicos.get(e).setNomeTime(times.get(e).getNome());
		}
	} 
	
	Time atleticoMadrid = new Time("Atletico Madrid", jogadoresAtleticoMadrid, 			
			1, 0, 0, 0, 0, 0, 0, 0, "");
	Time ajax = new Time("Ajax", jogadoresAjax, 2, 
			0, 0, 0, 0, 0, 0, 0, "");
	Time arsenal = new Time("Arsenal", jogadoresArsenal, 3, 
			0, 0, 0, 0, 0, 0, 0, "");
	Time barcelona = new Time("Barcelona", jogadoresBarcelona, 4, 
			0, 0, 0, 0, 0, 0, 0, "");
	Time bayernLeverkusen = new Time("Bayern Leverkusen", jogadoresBayernLeverkusen, 5, 
			0, 0, 0, 0, 0, 0, 0, "");
	Time bayernMunchen = new Time("Bayern Munchen", jogadoresBayern, 6, 
			0, 0, 0, 0, 0, 0, 0, "");
	Time benfica = new Time("Benfica", jogadoresBenfica, 7, 
			0, 0, 0, 0, 0, 0, 0, "");
	Time borussia = new Time("Borussia Dortmund", jogadoresBorussia, 8, 
			0, 0, 0, 0, 0, 0, 0, "");
	Time chealsea = new Time("Chealsea", jogadoresChealsea, 9, 
			0, 0, 0, 0, 0, 0, 0, "");
	Time juventus = new Time("Juventus", jogadoresJuventus, 10, 
			0, 0, 0, 0, 0, 0, 0, "");
	Time liverpool = new Time("Liverpool", jogadoresLiverpool, 11, 
			0, 0, 0, 0, 0, 0, 0, "");
	Time manchesterCity = new Time("Manchester City", jogadoresManchesterCity, 12, 
			0, 0, 0, 0, 0, 0, 0, "");
	Time manchesterUnited = new Time("Manchester United", jogadoresManchesterUnited, 13, 
			0, 0, 0, 0, 0, 0, 0, "");
	Time milan = new Time("Milan", jogadoresMilan, 14, 
			0, 0, 0, 0, 0, 0, 0, "");
	Time napoli = new Time("Napoli", jogadoresNapoli, 15, 
			0, 0, 0, 0, 0, 0, 0, "");
	Time psg = new Time("Paris Saint Germain", jogadoresPSG, 16, 
			0, 0, 0, 0, 0, 0, 0, "");
	Time porto = new Time("Porto", jogadoresPorto, 17, 
			0, 0, 0, 0, 0, 0, 0, "");
	Time realMadrid = new Time("Real Madrid", jogadoresRealMadrid, 18, 
			0, 0, 0, 0, 0, 0, 0, "");
	Time shakhtar = new Time("Shakhtar Donetsk", jogadoresShakhtar, 19, 
			0, 0, 0, 0, 0, 0, 0, "");
	Time tottenham = new Time("Tottenham Hotspur", jogadoresTottenham, 20, 
			0, 0, 0, 0, 0, 0, 0, "");
	
	public void alimentarTimes() {
		times.add(atleticoMadrid);
		times.add(ajax);		
		times.add(arsenal);
		times.add(barcelona);
		times.add(bayernLeverkusen);
		times.add(bayernMunchen);
		times.add(benfica);
		times.add(borussia);
		times.add(chealsea);
		times.add(juventus);
		times.add(liverpool);
		times.add(manchesterCity);
		times.add(manchesterUnited);
		times.add(milan);
		times.add(napoli);
		times.add(psg);
		times.add(porto);
		times.add(realMadrid);
		times.add(shakhtar);
		times.add(tottenham);
	}
	
	public void escolherOpcaoTatica() {
		for(int e=0; e<20; e++) {
			int random = randomNumber1(0,15);
			times.get(e).setTatica(taticas.get(random));
		}
	}
	
	public ArrayList<Jogador> getJogadores() {
		return jogadores;
	}
	public void setA(ArrayList<Jogador> jogadores) {
		this.jogadores = jogadores;
	}

	public ArrayList<Tecnico> getTecnicos() {
		return tecnicos;
	}

	public void setTecnicos(ArrayList<Tecnico> tecnicos) {
		this.tecnicos = tecnicos;
	}

	public ArrayList<String> getTaticas() {
		return taticas;
	}

	public void setTaticas(ArrayList<String> taticas) {
		this.taticas = taticas;
	}

	public ArrayList<Time> getTimes() {
		return times;
	}

	public void setTimes(ArrayList<Time> times) {
		this.times = times;
	}

	public ArrayList<Jogador> getJogadoresBayern() {
		return jogadoresBayern;
	}

	public void setJogadoresBayern(ArrayList<Jogador> jogadoresBayern) {
		this.jogadoresBayern = jogadoresBayern;
	}

	public ArrayList<Jogador> getJogadoresRealMadrid() {
		return jogadoresRealMadrid;
	}

	public void setJogadoresRealMadrid(ArrayList<Jogador> jogadoresRealMadrid) {
		this.jogadoresRealMadrid = jogadoresRealMadrid;
	}

	public ArrayList<Jogador> getJogadoresBarcelona() {
		return jogadoresBarcelona;
	}

	public void setJogadoresBarcelona(ArrayList<Jogador> jogadoresBarcelona) {
		this.jogadoresBarcelona = jogadoresBarcelona;
	}

	public ArrayList<Jogador> getJogadoresBorussia() {
		return jogadoresBorussia;
	}

	public void setJogadoresBorussia(ArrayList<Jogador> jogadoresBorussia) {
		this.jogadoresBorussia = jogadoresBorussia;
	}

	public ArrayList<Jogador> getJogadoresManchesterUnited() {
		return jogadoresManchesterUnited;
	}

	public void setJogadoresManchesterUnited(ArrayList<Jogador> jogadoresManchesterUnited) {
		this.jogadoresManchesterUnited = jogadoresManchesterUnited;
	}

	public ArrayList<Jogador> getJogadoresPorto() {
		return jogadoresPorto;
	}

	public void setJogadoresPorto(ArrayList<Jogador> jogadoresPorto) {
		this.jogadoresPorto = jogadoresPorto;
	}

	public ArrayList<Jogador> getJogadoresJuventus() {
		return jogadoresJuventus;
	}

	public void setJogadoresJuventus(ArrayList<Jogador> jogadoresJuventus) {
		this.jogadoresJuventus = jogadoresJuventus;
	}

	public ArrayList<Jogador> getJogadoresPSG() {
		return jogadoresPSG;
	}

	public void setJogadoresPSG(ArrayList<Jogador> jogadoresPSG) {
		this.jogadoresPSG = jogadoresPSG;
	}

	public ArrayList<Jogador> getJogadoresChealsea() {
		return jogadoresChealsea;
	}

	public void setJogadoresChealsea(ArrayList<Jogador> jogadoresChealsea) {
		this.jogadoresChealsea = jogadoresChealsea;
	}

	public ArrayList<Jogador> getJogadoresArsenal() {
		return jogadoresArsenal;
	}

	public void setJogadoresArsenal(ArrayList<Jogador> jogadoresArsenal) {
		this.jogadoresArsenal = jogadoresArsenal;
	}

	public ArrayList<Jogador> getJogadoresMilan() {
		return jogadoresMilan;
	}

	public void setJogadoresMilan(ArrayList<Jogador> jogadoresMilan) {
		this.jogadoresMilan = jogadoresMilan;
	}

	public ArrayList<Jogador> getJogadoresManchesterCity() {
		return jogadoresManchesterCity;
	}

	public void setJogadoresManchesterCity(ArrayList<Jogador> jogadoresManchesterCity) {
		this.jogadoresManchesterCity = jogadoresManchesterCity;
	}

	public ArrayList<Jogador> getJogadoresBenfica() {
		return jogadoresBenfica;
	}

	public void setJogadoresBenfica(ArrayList<Jogador> jogadoresBenfica) {
		this.jogadoresBenfica = jogadoresBenfica;
	}

	public ArrayList<Jogador> getJogadoresShakhtar() {
		return jogadoresShakhtar;
	}

	public void setJogadoresShakhtar(ArrayList<Jogador> jogadoresShakhtar) {
		this.jogadoresShakhtar = jogadoresShakhtar;
	}

	public ArrayList<Jogador> getJogadoresTottenham() {
		return jogadoresTottenham;
	}

	public void setJogadoresTottenham(ArrayList<Jogador> jogadoresTottenham) {
		this.jogadoresTottenham = jogadoresTottenham;
	}

	public ArrayList<Jogador> getJogadoresBayernLeverkusen() {
		return jogadoresBayernLeverkusen;
	}

	public void setJogadoresBayernLeverkusen(ArrayList<Jogador> jogadoresBayernLeverkusen) {
		this.jogadoresBayernLeverkusen = jogadoresBayernLeverkusen;
	}

	public ArrayList<Jogador> getJogadoresAjax() {
		return jogadoresAjax;
	}

	public void setJogadoresAjax(ArrayList<Jogador> jogadoresAjax) {
		this.jogadoresAjax = jogadoresAjax;
	}

	public ArrayList<Jogador> getJogadoresAtleticoMadrid() {
		return jogadoresAtleticoMadrid;
	}

	public void setJogadoresAtleticoMadrid(ArrayList<Jogador> jogadoresAtleticoMadrid) {
		this.jogadoresAtleticoMadrid = jogadoresAtleticoMadrid;
	}

	public ArrayList<Jogador> getJogadoresNapoli() {
		return jogadoresNapoli;
	}

	public void setJogadoresNapoli(ArrayList<Jogador> jogadoresNapoli) {
		this.jogadoresNapoli = jogadoresNapoli;
	}

	public ArrayList<Jogador> getJogadoresLiverpool() {
		return jogadoresLiverpool;
	}

	public void setJogadoresLiverpool(ArrayList<Jogador> jogadoresLiverpool) {
		this.jogadoresLiverpool = jogadoresLiverpool;
	}

	public Time getAtleticoMadrid() {
		return atleticoMadrid;
	}

	public void setAtleticoMadrid(Time atleticoMadrid) {
		this.atleticoMadrid = atleticoMadrid;
	}

	public Time getAjax() {
		return ajax;
	}

	public void setAjax(Time ajax) {
		this.ajax = ajax;
	}

	public Time getArsenal() {
		return arsenal;
	}

	public void setArsenal(Time arsenal) {
		this.arsenal = arsenal;
	}

	public Time getBarcelona() {
		return barcelona;
	}

	public void setBarcelona(Time barcelona) {
		this.barcelona = barcelona;
	}

	public Time getBayernLeverkusen() {
		return bayernLeverkusen;
	}

	public void setBayernLeverkusen(Time bayernLeverkusen) {
		this.bayernLeverkusen = bayernLeverkusen;
	}

	public Time getBayernMunchen() {
		return bayernMunchen;
	}

	public void setBayernMunchen(Time bayernMunchen) {
		this.bayernMunchen = bayernMunchen;
	}

	public Time getBenfica() {
		return benfica;
	}

	public void setBenfica(Time benfica) {
		this.benfica = benfica;
	}

	public Time getBorussia() {
		return borussia;
	}

	public void setBorussia(Time borussia) {
		this.borussia = borussia;
	}

	public Time getChealsea() {
		return chealsea;
	}

	public void setChealsea(Time chealsea) {
		this.chealsea = chealsea;
	}

	public Time getJuventus() {
		return juventus;
	}

	public void setJuventus(Time juventus) {
		this.juventus = juventus;
	}

	public Time getLiverpool() {
		return liverpool;
	}

	public void setLiverpool(Time liverpool) {
		this.liverpool = liverpool;
	}

	public Time getManchesterCity() {
		return manchesterCity;
	}

	public void setManchesterCity(Time manchesterCity) {
		this.manchesterCity = manchesterCity;
	}

	public Time getManchesterUnited() {
		return manchesterUnited;
	}

	public void setManchesterUnited(Time manchesterUnited) {
		this.manchesterUnited = manchesterUnited;
	}

	public Time getMilan() {
		return milan;
	}

	public void setMilan(Time milan) {
		this.milan = milan;
	}

	public Time getNapoli() {
		return napoli;
	}

	public void setNapoli(Time napoli) {
		this.napoli = napoli;
	}

	public Time getPsg() {
		return psg;
	}

	public void setPsg(Time psg) {
		this.psg = psg;
	}

	public Time getPorto() {
		return porto;
	}

	public void setPorto(Time porto) {
		this.porto = porto;
	}

	public Time getRealMadrid() {
		return realMadrid;
	}

	public void setRealMadrid(Time realMadrid) {
		this.realMadrid = realMadrid;
	}

	public Time getShakhtar() {
		return shakhtar;
	}

	public void setShakhtar(Time shakhtar) {
		this.shakhtar = shakhtar;
	}

	public Time getTottenham() {
		return tottenham;
	}

	public void setTottenham(Time tottenham) {
		this.tottenham = tottenham;
	}

	public int getRandom1() {
		return random1;
	}

	public int getRandom2() {
		return random2;
	}
}
