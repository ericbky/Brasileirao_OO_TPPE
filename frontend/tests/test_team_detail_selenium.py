import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class TestTeamDetail(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:3000/times/botafogo")

    def test_team_name_displayed(self):
        driver = self.driver
        team_name = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "team-name"))
        )
        self.assertIsNotNone(team_name)
        self.assertTrue(len(team_name.text) > 0)

    def test_tecnico_displayed(self):
        driver = self.driver
        tecnico = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "text-wrapper-5"))
        )
        self.assertIsNotNone(tecnico)
        self.assertTrue(len(tecnico.text) > 0 or tecnico.text == "-")

    def test_jogadores_listed(self):
        driver = self.driver
        jogadores = WebDriverWait(driver, 10).until(
            EC.presence_of_all_elements_located((By.CLASS_NAME, "text-wrapper-8"))
        )
        self.assertIsNotNone(jogadores)

    def test_delete_button_functionality(self):
        driver = self.driver
        delete_button = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "text-wrapper-7"))
        )
        self.assertIsNotNone(delete_button)

    def tearDown(self):
        self.driver.quit()


if __name__ == "__main__":
    unittest.main()
