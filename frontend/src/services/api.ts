const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

export async function getTimes() {
  const res = await fetch(`${API_URL}/times/listar_times/`);
  const data = await res.json();
  if (!Array.isArray(data)) throw new Error("Resposta inesperada");
  return data;
}