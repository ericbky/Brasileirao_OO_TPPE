package teste;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import controller.DadosController;
/**
 * Classe responsável por testar o método atualizarJogador() da classe DadosController
 * @author Rafael Bosi
 *@version 1.0 (set 2022)
 */
class AtualizarJogadorTeste {
	DadosController dados = new DadosController();

	/**
	 * Testa o método atualizarJogador()
	 */
	@Test
	public void testarAtualizarJogador() {
		String[] dadosJogador = new String[5];
		dadosJogador[0] = "Rafael";
		dadosJogador[1] = "19";
		dadosJogador[2] = "Ataque";
		dadosJogador[3] = "10";
		dadosJogador[4] = "1";
		
		assertTrue(dados.atualizarJogador(1, dadosJogador));
		
		dadosJogador[1] = null;
		assertFalse(dados.atualizarJogador(1, dadosJogador));
		
		dadosJogador[3] = "a";
		assertFalse(dados.atualizarJogador(1, dadosJogador));
		
		dadosJogador[1] = "";
		assertFalse(dados.atualizarJogador(1, dadosJogador));
		
		dadosJogador[1] = " ";
		assertFalse(dados.atualizarJogador(1, dadosJogador));
	}
}
