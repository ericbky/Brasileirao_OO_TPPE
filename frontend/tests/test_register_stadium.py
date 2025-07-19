import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time


class TestRegisterStadium(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:3000/registrar-estadio")

    def test_registro_estadio(self):
        driver = self.driver

        # Preenche campos do formulário
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.NAME, "nome"))
        ).send_keys("Estádio Teste")
        driver.find_element(By.NAME, "capacidade").send_keys("50000")
        driver.find_element(By.NAME, "cidade").send_keys("Brasília")
        driver.find_element(By.NAME, "estado").send_keys("DF")
        driver.find_element(By.NAME, "pais").send_keys("Brasil")

        # Clica no botão de salvar
        driver.find_element(By.XPATH, "//button[contains(text(),'Salvar')]").click()
        time.sleep(2)  # Simula tempo de carregamento

        # Verifica mensagem de sucesso
        success_msg = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located(
                (By.XPATH, "//*[contains(text(),'Estádio registrado com sucesso')]")
            )
        )
        self.assertIsNotNone(success_msg)

    def tearDown(self):
        self.driver.quit()


if __name__ == "__main__":
    unittest.main()
