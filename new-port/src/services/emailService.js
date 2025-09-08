// src/services/emailService.js
const API_URL = 'https://portifolio-back-mzqh.onrender.com/send';  //process.env.NEXT_PUBLIC_API_URL;

export async function sendEmail(data) {
  if (!API_URL) throw new Error("A URL da API não está definida");
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erro ao enviar email: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    throw error;
  }
}

