package controller;

import java.util.*;
import model.*;

/**
 * Classe responsável por controlar os dados referentes a classe Tecnico
 * @author Rafael Bosi 
 *@version 1.0 (set 2022)
 */
public class TecnicoController {
	private ArrayList<Tecnico> listaTecnicos = new ArrayList<Tecnico>();
	
	/**
	 * Preenche o ArrayList listaTecnicos com dados de todos os técnicos existentes até o momento
	 * @param dados Um objeto da classe DadosController que nos possibilita operar com todos os dados presentes na aplicação
	 */
	public TecnicoController(DadosController dados) {
		listaTecnicos = dados.getTecnicos();
	}

	/**
	 * Método responsável por listar as opções táticas dos técnicos
	 * @param index Posição do técnico a ter as opções táticas listadas
	 * @return Retorna um ArrayList com todas as táticas disponíveis
	 */
	public String[] getOpcoesTaticas(int index) {
		if (index<0 || index>19) {
			return null;
		}
		else{
			String[] listaTaticas = new String[15];
			for(int n=0; n<15; n++) {
				listaTaticas[n] = listaTecnicos.get(index).getOpcoesTaticas().get(n);
			}
			return listaTaticas;
		}	
	}
	
	/**
	 * Método responsável por pegar o nome do técnico de acordo com o index dele
	 * @param index Posição do técnico 
	 * @return Retorna uma String que com nome do técnico
	 */
	public String getNomeTecnico(int index) {
		if (index<0 || index>19) {
			return null;		}
		else{
			String nome;
			nome = listaTecnicos.get(index).getNome();
			return nome;
		}
	}

	public ArrayList<Tecnico> getListaTecnicos() {
		return listaTecnicos;
	}

	public void setListaTecnicos(ArrayList<Tecnico> listaTecnicos) {
		this.listaTecnicos = listaTecnicos;
	}
	
}
