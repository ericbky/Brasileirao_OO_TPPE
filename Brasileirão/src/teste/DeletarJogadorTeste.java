package teste;

import static org.junit.jupiter.api.Assertions.*;

import controller.DadosController;

import org.junit.jupiter.api.Test;

class DeletarJogadorTeste {
	DadosController dados = new DadosController();
	
	@Test
	public void testarDeletarJogador() {
		String nomeTime = "Tottenham Hotspur";
		int index = 0;
		
		assertTrue(dados.deletarJogador(nomeTime, index));
		
		index = 12;
		assertFalse(dados.deletarJogador(nomeTime, index));
		
		index = -1;
		assertFalse(dados.deletarJogador(nomeTime, index));
	}

}
