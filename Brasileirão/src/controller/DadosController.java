package controller;

import model.*;
import java.util.*;

public class DadosController {

	Dados d = new Dados();
	RodadasController g = new RodadasController();
	
	public void createAllData() {
		d.createCoachs();
		d.createPlayers();
		d.alimentarTimes();
		d.atribuirTecnicos();
		d.escolherOpcaoTatica();
	}
	
	public boolean deletarJogador(String nomeTime, int index) {
		if (index >= 220) {
			return false;
		}
		else {
			for (int j=0; j<20; j++) {
				if (d.getTimes().get(j).getNome() == nomeTime) {
					d.getTimes().get(j).getJogadores().remove(index);
				}
			}
			return true;
		}
	}
	
	public boolean deletarTecnico(int index) {
		if (index >= 20) {
			return false;
		}
		else {
			d.getTecnicos().remove(index);
			return true;
		}
	}
	
	public boolean criarTecnico(String nomeTime,String[] dadosTecnico) {
		if (d.getTecnicos().size()>20) {
			return false;
		}
		else {
			int p = d.getTecnicos().size();
			for(int j=0; j<p; j++) {
				if (d.getTecnicos().get(j).getNomeTime() == nomeTime) {
					return false;
				}
			}
		}
		d.getTecnicos().add(new Tecnico(dadosTecnico[0], nomeTime, 
				"Masculino", Integer.parseInt(dadosTecnico[1]), 
				true, d.getTaticas(), dadosTecnico[2], dadosTecnico[3]));
		return true;
	}
	
	//Teste pode ser implementado
	public boolean criarJogador(String nomeTime, String[] dadosJogador) {
		for (int j=0; j<20; j++) {
			if (d.getTimes().get(j).getNome() == nomeTime) {
				if (d.getTimes().get(j).getJogadores().size()>10) {
					return false;
				}
				else {
					d.getTimes().get(j).getJogadores().add(
					new Jogador(dadosJogador[0], nomeTime, "Masculino", 
							Integer.parseInt(dadosJogador[1]),
							0, dadosJogador[2], 0, Integer.parseInt(dadosJogador[3]), 
							Integer.parseInt(dadosJogador[4]) + 220));
				}
			}
		}
		return true;
	}
	
	public boolean atualizarJogador(int index, String[] update) {
		for(int j=0; j<5; j++){
			if (update[j]==null || update[j]=="") {
				return false;
			}
		}
		d.getJogadores().get(index).setNome(update[0]);
		d.getJogadores().get(index).setIdade(Integer.parseInt(update[1]));
		d.getJogadores().get(index).setPosicao(update[2]);
		d.getJogadores().get(index).setNumCamisa(Integer.parseInt(update[3]));
		d.getJogadores().get(index).setId(Integer.parseInt(update[4]));
		return true;
	}
	
	public boolean atualizarTecnico(int index, String[] update) {
		for(int j=0; j<4; j++){
			if (update[j]==null || update[j]=="") {
				return false;
			}
		}
		d.getTecnicos().get(index).setNome(update[0]);
		d.getTecnicos().get(index).setIdade(Integer.parseInt(update[1]));
		d.getTecnicos().get(index).setImagemInterna(update[2]);
		d.getTecnicos().get(index).setImagemExterna(update[3]);
		return true;
	}
	
	public String[] buscarJogador(int id){
		String[] jogador = new String[9];
		for (int j=0; j<20; j++) {
			for (int i=0; i<11; i++) {
				if (d.getTimes().get(j).getJogadores().get(i).getId() == id) {
					jogador[0] = "Nome = " + d.getTimes().get(j).getJogadores().get(i).getNome();
					jogador[1] = "Time = " + d.getTimes().get(j).getJogadores().get(i).getNomeTime();
					jogador[2] = "Sexo = " + d.getTimes().get(j).getJogadores().get(i).getSexo();
					jogador[3] = "Idade = " + String.valueOf(d.getTimes().get(j).getJogadores().get(i).getIdade());
					jogador[4] = "Posicao = " + d.getTimes().get(j).getJogadores().get(i).getPosicao();
					jogador[5] = "Partidas = " + String.valueOf(d.getTimes().get(j).getJogadores().get(i).getPartidas());
					jogador[6] = "Gols = " + String.valueOf(d.getTimes().get(j).getJogadores().get(i).getPartidas());
					jogador[7] = "Numero da Camisa = " + String.valueOf(d.getTimes().get(j).getJogadores().get(i).getNumCamisa());
					jogador[8] = "Id = " + String.valueOf(d.getTimes().get(j).getJogadores().get(i).getId());
				}
			}
		}
		return jogador;
	}
	
	public String[] buscarTecnico(String nomeTime) {
		String[] tecnico = new String[8];
		for (int j=0; j<20; j++) {
			if (d.getTecnicos().get(j).getNomeTime() == nomeTime) {
				tecnico[0] = "Nome = " + d.getTecnicos().get(j).getNome();
				tecnico[1] = "Time = " + d.getTecnicos().get(j).getNomeTime();
				tecnico[2] = "Sexo = " + d.getTecnicos().get(j).getSexo();
				tecnico[3] = "Idade = " + String.valueOf(d.getTecnicos().get(j).getIdade());
				tecnico[4] = "CBF = " + String.valueOf(d.getTecnicos().get(j).isCbf());
				tecnico[5] = " Taticas = " + String.valueOf(d.getTaticas());
				tecnico[6] = "Imagem Interna = " + d.getTecnicos().get(j).getImagemInterna();
				tecnico[7] = "Imagem Externa = " + d.getTecnicos().get(j).getImagemExterna();
				return tecnico;
			}
		}
		return tecnico;
	}
	
	public ArrayList<Jogador> getJogadoresAtleticoMadrid(){
		return this.d.getJogadoresAtleticoMadrid();
	}
	public ArrayList<Jogador> getJogadoresAjax(){
		return this.d.getJogadoresAjax();
	}
	public ArrayList<Jogador> getJogadoresArsenal(){
		return this.d.getJogadoresArsenal();
	}
	public ArrayList<Jogador> getJogadoresBarcelona(){
		return this.d.getJogadoresBarcelona();
	}
	public ArrayList<Jogador> getJogadoresBayernLeverkusen(){
		return this.d.getJogadoresBayernLeverkusen();
	}
	public ArrayList<Jogador> getJogadoresBayern(){
		return this.d.getJogadoresBayern();
	}
	public ArrayList<Jogador> getJogadoresBenfica(){
		return this.d.getJogadoresBenfica();
	}
	public ArrayList<Jogador> getJogadoresBorussia(){
		return this.d.getJogadoresBorussia();
	}
	public ArrayList<Jogador> getJogadoresChealsea(){
		return this.d.getJogadoresChealsea();
	}
	public ArrayList<Jogador> getJogadoresJuventus(){
		return this.d.getJogadoresJuventus();
	}
	public ArrayList<Jogador> getJogadoresLiverpool(){
		return this.d.getJogadoresLiverpool();
	}
	public ArrayList<Jogador> getJogadoresManchesterCity(){
		return this.d.getJogadoresManchesterCity();
	}
	public ArrayList<Jogador> getJogadoresManchesterUnited(){
		return this.d.getJogadoresManchesterUnited();
	}
	public ArrayList<Jogador> getJogadoresMilan(){
		return this.d.getJogadoresMilan();
	}
	public ArrayList<Jogador> getJogadoresNapoli(){
		return this.d.getJogadoresNapoli();
	}
	public ArrayList<Jogador> getJogadoresParis(){
		return this.d.getJogadoresPSG();
	}
	public ArrayList<Jogador> getJogadoresPorto(){
		return this.d.getJogadoresPorto();
	}
	public ArrayList<Jogador> getJogadoresRealMadrid(){
		return this.d.getJogadoresRealMadrid();
	}
	public ArrayList<Jogador> getJogadoresShakhtar(){
		return this.d.getJogadoresShakhtar();
	}
	public ArrayList<Jogador> getJogadoresTottenham(){
		return this.d.getJogadoresTottenham();
	}
	public ArrayList<Tecnico> getTecnicos(){
		return this.d.getTecnicos();
	}
	public ArrayList<Time> getTimes(){
		return this.d.getTimes();
	}
	public ArrayList<Jogador> getJogadores(){
		return this.d.getJogadores();
	}
	
}
