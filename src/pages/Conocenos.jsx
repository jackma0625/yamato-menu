import { Link } from "react-router-dom";

export default function Conocenos() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">

      <div className="bg-black text-white p-6">
        <h1 className="text-4xl font-black">
          SUSHI YAMATO
        </h1>

        <p className="text-yellow-400 mt-2">
          Conócenos
        </p>

        <Link
          to="/"
          className="
            inline-block mt-4
            bg-red-500 text-white
            px-4 py-2 rounded-xl
            font-bold
          "
        >
          ← Volver al Menú
        </Link>
      </div>

      <div className="max-w-5xl mx-auto p-5">

        <img
          src="/images/fachada.jpg"
          alt="Sushi Yamato"
          className="w-full rounded-3xl mb-6"
        />

        <h2 className="text-3xl font-black mb-4">
          Bienvenido a Sushi Yamato
        </h2>

        <p className="text-gray-600 leading-8">
          Somos un restaurante japonés ubicado en
          La Entrada, Copán, Honduras.

          Ofrecemos sushi fresco, ramen japonés,
          bowls asiáticos y bubble tea preparados
          con ingredientes de calidad.
        </p>

      </div>

    </div>
  );
}