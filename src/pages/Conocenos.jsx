import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Conocenos() {
  const [activeImage, setActiveImage] = useState(0);

  const galleryImages = [
    { src: "/images/restaurante1.webp", alt: "Interior del restaurante" },
    { src: "/images/restaurante2.webp", alt: "Sushi fresco" },
    { src: "/images/restaurante3.webp", alt: "Ambiente acogedor" },
  ];

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">

      {/* ===== 返回按钮 ===== */}
      <Link
        to="/"
        className="
          fixed top-4 left-4 z-50
          bg-white/10 backdrop-blur-md
          text-white px-4 py-2 rounded-full
          font-bold text-sm
          hover:bg-white/20 transition
          border border-white/10
        "
      >
        ← Volver
      </Link>

      {/* ===== HERO - 全屏沉浸式 ===== */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 背景视频/图片效果 */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url('/images/fachada.webp')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent"></div>
        </div>

        {/* 装饰性光晕 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>

        {/* 内容 */}
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <p className="text-yellow-400 text-sm tracking-[0.3em] font-light mb-4 animate-pulse">
            ✦  AUTÉNTICA COCINA JAPONESA  ✦
          </p>
          <h1 className="text-6xl md:text-7xl font-black leading-tight">
            Sushi
            <span className="text-red-500"> Yamato</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mt-4 tracking-wide">
            El verdadero sabor de Japón en <br className="hidden md:block" />
            <span className="text-yellow-400 font-medium">La Entrada, Copán</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm">
              🍣 Sushi
            </span>
            <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm">
              🍜 Ramen
            </span>
            <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm">
              🥢 Bowls
            </span>
            <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm">
              🧋 Bubble Tea
            </span>
          </div>

          <div className="mt-10 flex justify-center gap-8 text-sm text-gray-400">
            <div>
              <p className="text-2xl font-bold text-white">📍</p>
              <p>La Entrada, Copán</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">⏰</p>
              <p>Lun-Dom 11AM - 9PM</p>
            </div>
          </div>
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <p className="text-xs tracking-widest">DESCUBRE</p>
          <p className="text-2xl text-center">↓</p>
        </div>
      </div>

      {/* ===== SECCIÓN 1: Nuestra Historia ===== */}
      <section className="relative py-20 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-yellow-400 text-sm tracking-[0.2em] font-light">✦  NUESTRA HISTORIA</p>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-3 leading-tight">
                Pasión por el <br />
                <span className="text-red-500">auténtico sabor</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mt-6 text-lg">
                En Sushi Yamato creemos que la comida es un arte. Cada plato es
                preparado con ingredientes frescos y técnicas tradicionales japonesas,
                fusionadas con el toque cálido de Honduras.
              </p>
              <p className="text-gray-500 leading-relaxed mt-4">
                Desde nuestros rollos de sushi hasta el ramen casero, cada bocado
                está hecho con dedicación para transportarte a Japón sin salir de Copán.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative">
                <img
                  src="/images/restaurante1.webp"
                  alt="Interior de Sushi Yamato"
                  className="w-full rounded-3xl shadow-2xl shadow-red-500/10"
                />
                <div className="absolute -bottom-4 -right-4 bg-red-500 text-white text-sm font-bold px-6 py-3 rounded-2xl shadow-xl">
                  🏆 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECCIÓN 2: Galería con轮播 ===== */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-sm tracking-[0.2em] font-light">✦  GALERÍA</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
              Una experiencia <span className="text-red-500">visual</span>
            </h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl aspect-[16/9] md:aspect-[16/7]">
              {galleryImages.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className={`w-full h-full object-cover transition-all duration-700 absolute inset-0 ${
                    activeImage === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* 轮播指示器 */}
            <div className="flex justify-center gap-2 mt-6">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeImage === index ? "w-12 bg-red-500" : "w-6 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECCIÓN 3: Valores / Frase ===== */}
      <section className="py-20 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-red-500/10 border border-red-500/20 rounded-full px-6 py-2 mb-6">
            <span className="text-red-400 text-sm font-medium">✦  FILOSOFÍA</span>
          </div>

          <blockquote className="text-3xl md:text-4xl font-light text-white leading-relaxed">
            "No solo servimos comida, <br />
            creamos <span className="text-red-500 font-bold">momentos inolvidables</span>"
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-red-500/40 transition">
              <p className="text-4xl mb-3">🍣</p>
              <h3 className="text-white font-bold">Frescura</h3>
              <p className="text-gray-500 text-sm mt-2">Ingredientes seleccionados diariamente</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-red-500/40 transition">
              <p className="text-4xl mb-3">👨‍🍳</p>
              <h3 className="text-white font-bold">Tradición</h3>
              <p className="text-gray-500 text-sm mt-2">Técnicas japonesas auténticas</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-red-500/40 transition">
              <p className="text-4xl mb-3">❤️</p>
              <h3 className="text-white font-bold">Pasión</h3>
              <p className="text-gray-500 text-sm mt-2">Hecho con amor y dedicación</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-black/50 py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white font-bold text-lg">SUSHI YAMATO</p>
          <p className="text-gray-600 text-sm mt-1">La Entrada, Copán · Honduras</p>
          <p className="text-gray-700 text-xs mt-4">
            © 2026 · Menú digital por{" "}
            <a
              href="https://hnmenu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transition"
            >
              HNMenu
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}