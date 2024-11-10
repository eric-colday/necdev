import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

const Confidentialite = () => {
  return (
    <div className="pt-28 px-20 max-[768px]:px-10 max-[425px]:px-5">
      <h1 className="text-3xl font-bold mb-5 ">
        Politique de Confidentialité pour NecApp
      </h1>
      <p className="mb-5">
        Bienvenue sur NecApp. Cette politique de confidentialité explique
        comment NecApp collecte, utilise, divulgue et protège les informations
        personnelles que vous fournissez lors de l'utilisation de notre
        application mobile.
      </p>
      <h2 className="text-2xl font-semibold mb-5">
        1. Informations que nous collectons :
      </h2>
      <p>
        Nous pouvons collecter les types d'informations suivants lorsque vous
        utilisez NecApp :
      </p>
      <ul className="list-disc list-inside mb-5">
        <li>
          Informations d'identification personnelles (nom, adresse e-mail,
          etc.).
        </li>
        <li>
          Informations de connexion (adresse IP, données du navigateur, etc.).
        </li>
        <li>Données de localisation si vous activez cette fonctionnalité.</li>
        <li>
          Informations sur l'appareil (type d'appareil, système d'exploitation,
          etc.).
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-5">
        2. Comment nous utilisons vos informations :
      </h2>
      <p>
        Nous utilisons les informations collectées pour les finalités suivantes:
      </p>
      <ul className="list-disc list-inside mb-5">
        <li>Fournir et améliorer nos services.</li>
        <li>Personnaliser votre expérience utilisateur.</li>
        <li>Gérer votre compte et répondre à vos demandes.</li>
        <li>
          Analyser l'utilisation de l'application pour améliorer nos
          fonctionnalités.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold my-5">
        3.Partage d'informations :
      </h2>
      <p>
        Nous ne partagerons pas vos informations personnelles avec des tiers
        sauf dans les cas suivants :
      </p>
      Avec votre consentement. Pour satisfaire à une obligation légale. Pour
      protéger nos droits, votre sécurité ou celle d'autrui.
      <h2 className="text-2xl font-semibold my-5">4. Sécurité :</h2>
      <p>
        Nous mettons en place des mesures de sécurité pour protéger vos
        informations personnelles contre tout accès non autorisé ou toute
        modification, divulgation ou destruction non autorisée.
      </p>
      <h2 className="text-2xl font-semibold my-5">
        5. Cookies et technologies similaires :
      </h2>
      <p>
        Nous utilisons des cookies et des technologies similaires pour améliorer
        votre expérience d'utilisation de NecApp. Vous pouvez configurer votre
        navigateur pour refuser tous les cookies ou être informé lorsqu'un
        cookie est envoyé.
      </p>
      <h2 className="text-2xl font-semibold my-5">
        6. Modifications de la politique de confidentialité :
      </h2>
      <p>
        Nous nous réservons le droit de mettre à jour cette politique de
        confidentialité à tout moment. La date de la dernière mise à jour sera
        indiquée en haut de la politique.
      </p>
      <h2 className="text-2xl font-semibold my-5">7. Contact :</h2>
      <p>
        Si vous avez des questions, des préoccupations ou des demandes relatives
        à notre politique de confidentialité, veuillez nous contacter à
        rcnoubissi@gmail.com.
      </p>
      <p className="my-7 ">
        En utilisant NecApp, vous consentez à cette politique de
        confidentialité.
      </p>
      <div className="flex justify-around gap-[20px] py-6 ">
        <div className=" flex gap-[10px] max-[412px]:flex-col max-[412px]:items-center max-[412px]:text-center">
          <div>© Copyright 2023, Eric Colday Noubissi</div>
          <ul className="flex gap-[10px]">
            <li>
              <Link
                href="https://www.linkedin.com/in/ecnoubissi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/eric-colday"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Confidentialite;
