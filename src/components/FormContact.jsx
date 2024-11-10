"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";


export default function FormContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message || !subject) {
      setErr("Veuillez remplir tous les champs");
      return;
    }
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });

    if (response.ok) {
      setSuccess("Message envoyé avec succès");
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
      setErr("");
      router.push("/message-envoye");
    } else {
      setErr("Erreur lors de l'envoi du message");
    }

    console.log(await response.json());
  };
  return (
    <form onSubmit={handleSubmit}>
      {success ? (
        <div className="text-green-500">{success}</div>
      ) : (
        <div>
          <div className="flex gap-4 max-[425px]:flex-col">
            <div className="w-full pb-4">
              <label htmlFor="">
                Nom <span className="text-red-500 ">*</span>
              </label>
              <input
                type="text"
                value={name}
                placeholder="Prénom et Nom"
                onChange={(e) => setName(e.target.value)}
                className={`w-full rounded-md border border-[#7c8587] p-3 bg-[#0d1520] placeholder:italic placeholder:text-sm placeholder:text-[#7c8587] ${
                  err
                    ? "border-red-500 focus:outline-red"
                    : "border-[#7c8587] focus:outline-blue"
                }`}
              />
              {err && <div className="text-red-500">{err}</div>}
            </div>
            <div className="w-full">
              <label htmlFor="">
                Email <span className="text-red-500 ">*</span>{" "}
              </label>
              <input
                type="email"
                value={email}
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full rounded-md border border-[#7c8587] p-3 bg-[#0d1520] placeholder:italic placeholder:text-sm placeholder:text-[#7c8587] ${
                  err
                    ? "border-red-500 focus:outline-red"
                    : "border-[#7c8587] focus:outline-blue"
                }`}
              />
              {err && <div className="text-red-500">{err}</div>}
            </div>
          </div>
          <div className="pb-4">
            <label htmlFor="">
              Objet <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={subject}
              placeholder="Objet"
              onChange={(e) => setSubject(e.target.value)}
              className={`w-full rounded-md border border-[#7c8587] p-3 bg-[#0d1520] placeholder:italic placeholder:text-sm placeholder:text-[#7c8587] ${
                err
                  ? "border-red-500 focus:outline-red"
                  : "border-[#7c8587] focus:outline-blue"
              }`}
            />
            {err && <div className="text-red-500">{err}</div>}
          </div>
          <label htmlFor="">
            Message <span className="text-red-500 ">*</span>
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message ..."
            className={`rounded-md border border-[#7c8587] p-3 bg-[#0d1520] placeholder:italic placeholder:text-sm placeholder:text-[#7c8587] w-full h-40 ${
              err
                ? "border-red-500 focus:outline-red"
                : "border-[#7c8587] focus:outline-blue"
            }`}
          />
          {err && <div className="text-red-500">{err}</div>}
          <button
            type="submit"
            className="cursor-pointer border border-[#7c8587] hover:border-2 transition-all duration-300 ease-in-out mt-3 text-white p-4 w-1/2 max-[1024px]:w-full "
          >
            Envoyer
          </button>
        </div>
      )}
    </form>
  );
}
