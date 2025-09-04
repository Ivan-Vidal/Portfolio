// src/services/emailService.js
export async function sendEmail(data) {
  try {
    const response = await fetch("https://portifolio-back-mzqh.onrender.com/send-email", {
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

