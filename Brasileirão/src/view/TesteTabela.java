package view;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import controller.*;

public class TesteTabela extends JFrame{
	public TesteTabela() {
		super("Classificação Geral");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setLayout(new BorderLayout());
		setVisible(true);
		
		DadosController dados = new DadosController();
		
		
	}
}
