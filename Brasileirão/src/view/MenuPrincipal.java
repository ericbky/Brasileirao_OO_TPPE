package view;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import controller.*;

public class MenuPrincipal implements ActionListener{
	
	private static JFrame janela = new JFrame("Champions League");
	private static JLabel titulo = new JLabel("Bem-Vindo a Champions League");
	private static JButton tabelaTimes = new JButton("Tabela da Liga");
	private static JButton tabelaArtilharia = new JButton("Tabela da Artilharia");
	private static JButton simularRodada = new JButton("Simular a Rodada"); 
	public static DadosController dados = new DadosController();

	
	public MenuPrincipal() {
		titulo.setFont(new Font("Arial", Font.BOLD, 20));
		titulo.setBounds(150, 10, 400, 30);
		tabelaTimes.setBounds(200, 100, 200, 30);
		tabelaArtilharia.setBounds(200, 150, 200, 30);
		simularRodada.setBounds(200, 200, 200, 30);
		
		janela.setLayout(null);
		
		janela.add(titulo);
		janela.add(tabelaTimes);
		janela.add(tabelaArtilharia);
		janela.add(simularRodada);
		
		janela.setSize(600, 400);
		janela.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		janela.setVisible(true);
	}
	
	public static void main(String[] args) {
		MenuPrincipal menu = new MenuPrincipal();
		
		tabelaTimes.addActionListener(menu);
		tabelaArtilharia.addActionListener(menu);
		simularRodada.addActionListener(menu);
	}
	
	public void actionPerformed(ActionEvent e) {
		
	}
}
