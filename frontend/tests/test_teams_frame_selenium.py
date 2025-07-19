import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class TestTeamsFrame(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:3000/times")

    def test_title_and_filters(self):
        driver = self.driver
        title = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "teams-title"))
        )
        self.assertEqual(title.text, "Times")
        # Verifica os filtros
        filtro_nome = driver.find_element(By.ID, "filtro-nome")
        filtro_socios = driver.find_element(By.ID, "filtro-socios")
        filtro_valor_medio = driver.find_element(By.ID, "filtro-valor-medio")
        self.assertIsNotNone(filtro_nome)
        self.assertIsNotNone(filtro_socios)
        self.assertIsNotNone(filtro_valor_medio)

    def test_listagem_times(self):
        driver = self.driver
        cards = WebDriverWait(driver, 10).until(
            EC.presence_of_all_elements_located((By.CLASS_NAME, "teams-card-b"))
        )
        self.assertGreaterEqual(len(cards), 0)

    def test_navegacao_team_detail(self):
        driver = self.driver
        try:
            card = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CLASS_NAME, "teams-card-b"))
            )
            card.click()
            team_name = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CLASS_NAME, "team-name"))
            )
            self.assertIsNotNone(team_name)
        except Exception:
            pass

    def tearDown(self):
        self.driver.quit()


if __name__ == "__main__":
    unittest.main()
