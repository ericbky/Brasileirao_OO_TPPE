from fastapi.testclient import TestClient
import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from app.main import app

client = TestClient(app)

def test_endpoint():
    response = client.get("/criar_estadio")  # Substitua pelo seu endpoint
    print("Status code:", response.status_code)
    print("Resposta:", response.json())

if __name__ == "__main__":
    test_endpoint()