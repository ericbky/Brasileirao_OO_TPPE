package teste;

import static org.junit.jupiter.api.Assertions.*;

import controller.DadosController;

import org.junit.jupiter.api.Test;
/**
 * Classe responsável por testar o método criarTecnico() da classe DadosController 
 * @author Rafael Bosi
 *@version 1.0 (set 2022)
 */
class CriarTecnicoTeste {
	DadosController dados = new DadosController();

	/**
	 * Testa o funcionamento do método criarTecnico()
	 */
	@Test
	public void testarCriartecnico() {
		String nomeTime = "Tottenham Hotspur"; 
		String[] dadosTecnico = new String[4];
		dadosTecnico[0] = "Rafael";
		dadosTecnico[1] = "60";
		dadosTecnico[2] = "Boa";
		dadosTecnico[3] = "Ruim";
		/**
		 * É esperado erro pois já existem 20 técnicos
		 */
		assertFalse(dados.criarTecnico(nomeTime, dadosTecnico));
		/**
		 * Mesmo após deletar um técnico é esperado erro pois o time escolhido já possui técnico
		 */
		dados.deletarTecnico(5);
		assertFalse(dados.criarTecnico(nomeTime, dadosTecnico));
		/**
		 * Então quando é escolhido um time que não possui técnico é esperado true
		 */
		nomeTime = "Bayern Munchen";
		assertTrue(dados.criarTecnico(nomeTime, dadosTecnico));
	}
}
