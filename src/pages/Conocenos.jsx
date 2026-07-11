import { Link } from "react-router-dom";

export default function Conocenos() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">

      {/* ===== Header ===== */}
      <div className="bg-black text-white p-6 shadow-xl">
        <h1 className="text-4xl font-black">SUSHI YAMATO</h1>
        <p className="text-yellow-400 mt-2 font-semibold">
          🍣 Conócenos
        </p>
        <Link
          to="/"
          className="
            inline-block mt-4
            bg-red-500 text-white
            px-4 py-2 rounded-xl
            font-bold hover:bg-red-600 transition
          "
        >
          ← Volver al Menú
        </Link>
      </div>

      {/* ===== Hero Image ===== */}
      <div className="relative">
        <img
          src="/images/fachada.webp"
          alt="Sushi Yamato - Fachada"
          className="w-full max-h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <p className="text-sm font-light tracking-widest">📍 La Entrada, Copán</p>
        </div>
      </div>

      {/* ===== Contenido ===== */}
      <div className="max-w-4xl mx-auto px-5 py-10">

        {/* Título */}
        <h2 className="text-3xl font-black text-center mb-2">
          Bienvenido a <span className="text-red-500">Sushi Yamato</span>
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8 tracking-wide">
          Auténtica cocina japonesa en el corazón de Honduras
        </p>

        {/* Descripción */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">
          <p className="text-gray-700 leading-relaxed">
            Somos un restaurante japonés ubicado en <strong>La Entrada, Copán</strong>,
            donde fusionamos la tradición culinaria de Japón con los ingredientes
            más frescos de la región.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Ofrecemos <strong>sushi fresco</strong>, <strong>ramen japonés</strong>,
            <strong> bowls asiáticos</strong> y <strong>bubble tea</strong>,
            preparados al momento con pasión y dedicación.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Cada plato está diseñado para brindarte una experiencia única,
            con sabores auténticos que te transportarán a Japón.
          </p>
        </div>

        {/* Galería de 3 imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
            <img
              src="/images/restaurante1.webp"
              alt="Interior del restaurante"
              className="w-full h-48 object-cover hover:scale-105 transition duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
            <img
              src="/images/restaurante2.webp"
              alt="Platos de sushi"
              className="w-full h-48 object-cover hover:scale-105 transition duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
            <img
              src="/images/restaurante3.webp"
              alt="Ambiente del restaurante"
              className="w-full h-48 object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* Frase o eslogan */}
        <div className="text-center bg-black text-white rounded-3xl p-8 shadow-xl">
          <p className="text-xl font-light italic tracking-wide">
            "El auténtico sabor de Japón en Copán"
          </p>
          <p className="text-gray-400 text-sm mt-3">
            🍣  Sushi · 🍜 Ramen · 🥢 Bowls · 🧋 Bubble Tea
          </p>
        </div>

      </div>
    </div>
  );
}