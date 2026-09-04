"use client";
import { useState } from "react";

const ContactMePage = () => {
  const [status, setStatus] = useState<
    "IDLE" | "PENDING" | "SUCCESS" | "ERROR"
  >("IDLE");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("PENDING");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY;

    try {
      const response = await fetch(`https://formspree.io/${formKey}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <div className="w-full mx-w-6xl mx-auto px-4 py-24 min-h-screen flex flex-col justify-center items-center">
      {/* cabecera */}
      <div className="text-center md:text-left mb-12 space-y-2">
        <h1 className="text-xl text-gray-400 font-semibold">
          Ponte en Contacto
        </h1>
        <p className="text-3xl md:text-4xl font-bold text-white">
          Hablemos de tu{" "}
          <span className="text-(--bg-secondary)">próximo proyecto</span>
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="p-8 bg-zinc-900/30 border border-zinc-800/80 rounded-2xl backdrop-blur-sm space-y-5 w-full max-w-xl shadow-2xl"
      >
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">
            Nombre Completo
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Ingresa tu nombre"
            className="w-full px-4 py-3 bg-zinc-950/60 border border-zinc-800 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-(--bg-secondary) transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">
            Correo electronico
          </label>
          <input
            type="email"
            name="email"
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Por favor, introduce una direccion de correo valida"
            placeholder="Ingresa tu correo"
            className="w-full px-4 py-3 bg-zinc-950/60 border border-zinc-800 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-(--bg-secondary) transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">
            Mensaje
          </label>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Cuéntame sobre tu idea o propuesta laboral..."
            className="w-full px-4 py-3 bg-zinc-950/60 border border-zinc-800 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-(--bg-secondary) transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "PENDING"}
          className="w-full py-3 bg-(--bg-secondary) hover:bg-(--bg-secondary)/80 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform active:scale-[0.98] disabled:opacity-50 cursor-pointer"
        >
          {status === "PENDING" ? "Enviando..." : "Enviar Mensaje"}
        </button>

        {status === "SUCCESS" && (
          <p className="text-sm text-green-400 font-medium text-center animate-fade-in">
            ¡Mensaje enviado con éxito! Te respondere lo antes posible.
          </p>
        )}

        {status === "ERROR" && (
          <p className="text-sm text-red-400 font-medium text-center">
            Hubo un problema al enviar el mensaje. Por favor, reintentalo.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactMePage;
