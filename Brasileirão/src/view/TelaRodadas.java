package view;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import controller.*;

public class TelaRodadas implements ActionListener {
	private JFrame rodada;
	private JLabel titulo; 
	private JTextField numRodada;
	private String[] listaResultados;
	private JList<String> resultados;
	private JButton mostrar;
	DadosController dados = new DadosController();
	TemporadaController temporada = new TemporadaController();
	int n;
	
	public void showRodadas(DadosController d) {
		dados = d;
		
		rodada = new JFrame("Resultado das Rodada");
		titulo = new JLabel("Digite o número da Rodada\n" +
		"para obter os confrontos ocorridos");
		numRodada = new JTextField("Insira o número da rodada");
		listaResultados = temporada.listarJogosDaRodada(temporada.simularTemporada(dados), n);
		resultados = new JList<String>(listaResultados);
		mostrar = new JButton("Mostrar Confrontos da Rodada");
		
		resultados.setLayoutOrientation(JList.VERTICAL);
		
		titulo.setFont(new Font("Arial", Font.BOLD, 20));
		titulo.setBounds(50, 10, 500, 30);
		numRodada.setBounds(180, 100, 200, 30);
		resultados.setBounds(175, 140, 200, 100);
		mostrar.setBounds(175, 300, 300, 30);
		
		rodada.setLayout(null);
		
		rodada.add(titulo);
		rodada.add(numRodada);
		rodada.add(resultados);
		rodada.add(mostrar);
		
		rodada.setSize(600, 400);
		rodada.setLocationRelativeTo(null);
		rodada.setVisible(true);
		
		numRodada.addActionListener(this);
		mostrar.addActionListener(this);
	}
	
	public void actionPerformed(ActionEvent e) {
		Object src = e.getSource();
		if(src == mostrar) {
			if (Integer.parseInt(numRodada.getText()) > 0 && Integer.parseInt(numRodada.getText()) < 20) {
				n = Integer.parseInt(numRodada.getText());
			}
			else {
				mensagemErro();
			}
		}	
	}
	
	public void mensagemErro() {
		JOptionPane.showMessageDialog(null, "Por favor digite um número entre 1 e 20",
				null, JOptionPane.INFORMATION_MESSAGE);
		rodada.dispose();
	}
}
