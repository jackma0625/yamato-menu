import { useState, useEffect } from "react";
import { categories } from "./menu";

// 促销数据移到组件外部
const PROMOS = [
  { text: "🔥 Miércoles Bubble Tea -15%", color: "bg-yellow-400" },
  { text: "🎉 Jueves 3x2 en Rollos", color: "bg-red-400" },
  { text: "⚽ Vive el Mundial con Sushi Yamato", color: "bg-green-400" },
];

const PROMO_IMAGE = "/images/camaron-cantones.webp";
const WHATSAPP_NUMBER = "50494340468";

export default function App() {
  // ============ State ============
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [showPromo, setShowPromo] = useState(false);
  const [selected, setSelected] = useState("Entradas");
  const [promoIndex, setPromoIndex] = useState(0);

  // ============ Derived State ============
  const total = cart.reduce((sum, item) => sum + Number(item.price) * item.qty, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // ============ Effects ============
  // 滚动时关闭购物车
  useEffect(() => {
    const handleScroll = () => setShowCart(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 促销弹窗（每天只显示一次）
  useEffect(() => {
    const lastClosed = localStorage.getItem("promoClosed");
    const today = new Date().toDateString();
    if (lastClosed !== today) setShowPromo(true);
  }, []);

  // 促销轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setPromoIndex((prev) => (prev === PROMOS.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ============ Handlers ============
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });

    setToast(`${item.name} agregado`);
    setTimeout(() => setToast(""), 2000);
  };

  const removeFromCart = (name) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.name === name) {
            if (item.qty > 1) return { ...item, qty: item.qty - 1 };
            return null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const closePromo = () => {
    localStorage.setItem("promoClosed", new Date().toDateString());
    setShowPromo(false);
  };

  const handleWhatsAppOrder = () => {
    const message = cart
      .map((item) => `${item.qty}x ${item.name} - L.${Number(item.price) * item.qty}`)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Hola, quiero ordenar:\n\n${message}\n\nTotal: L.${total}`
    )}`;

    window.open(url);
  };

  // ============ Render Helpers ============
  const renderItemOptions = (item) => {
    if (item.options) {
      return (
        <div className="flex flex-col gap-2 mt-3">
          {item.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() =>
                addToCart({
                  ...item,
                  name: `${item.name} - ${option.name}`,
                  price: option.price,
                })
              }
              className="
                bg-black text-white px-4 py-2 rounded-xl
                active:scale-95 active:bg-red-500
                transition whitespace-nowrap text-base
              "
            >
              {option.name} - L.{option.price}
            </button>
          ))}
        </div>
      );
    }

    return (
      <>
        <p className="text-red-500 font-black text-xl mb-2">L.{item.price}</p>
        <button
          onClick={() => addToCart(item)}
          className="
            bg-black text-white px-4 py-2 rounded-xl
            active:scale-95 active:bg-red-500 transition
          "
        >
          Agregar
        </button>
      </>
    );
  };

  const renderProductCard = (item, index) => (
    <div
      key={index}
      className="bg-white rounded-3xl overflow-hidden shadow-lg"
    >
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className="w-full aspect-square object-cover rounded-xl"
      />
      <div className="p-4">
        <h2 className="font-black text-lg leading-tight">{item.name}</h2>
        <p className="text-sm text-gray-500 mt-2 min-h-[40px]">{item.desc}</p>
        <div className="mt-4">{renderItemOptions(item)}</div>
      </div>
    </div>
  );

  // ============ Main Render ============
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      {/* ===== Promo Modal ===== */}
      {showPromo && (
        <div
          onClick={closePromo}
          className="
            fixed inset-0 bg-black/60 z-[999]
            flex items-center justify-center p-4
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-sm w-full overflow-hidden shadow-2xl"
          >
            <img
              src={PROMO_IMAGE}
              className="w-full h-56 object-cover"
              alt="Promoción"
            />
            <div className="p-5">
              <button
                onClick={closePromo}
                className="float-right text-xl font-bold"
              >
                ✕
              </button>
              <h2 className="text-3xl font-black text-red-500">NUEVO</h2>
              <p className="font-bold mt-2">Camarón Cantonés</p>
              <p className="text-500 font-black text-xl mt-2">
                18u L.349 | 9u L.180
              </p>
              <p className="text-gray-600 mt-2">
                Camarones al vapor con jengibre y cebollina
              </p>
              <button
                onClick={closePromo}
                className="
                  mt-4 w-full bg-black text-white py-3 rounded-xl
                  font-bold active:scale-95 transition
                "
              >
                Ver Menú
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== Toast ===== */}
      {toast && (
        <div
          className="
            fixed top-5 right-5 bg-black text-white px-5 py-3
            rounded-2xl shadow-2xl z-[100] animate-bounce
          "
        >
          ✅ {toast}
        </div>
      )}

      {/* ===== Header ===== */}
      <div className="bg-black text-white p-6 shadow-xl">
        <h1 className="text-4xl font-black">SUSHI YAMATO</h1>
        <p className="text-sm text-yellow-400 mt-2 font-semibold">
          Sushi • Ramen • Bowls • Bubble Tea
        </p>
        <p className="text-gray-400 mt-1">
          Restaurante japonés en Copán, Honduras
        </p>

        <div className="flex gap-3 mt-3">
          <a
            href="https://instagram.com/sushiyamato.hn"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
              text-white px-3 py-1.5 rounded-full text-xs font-bold
            "
          >
            📸 Instagram
          </a>
          <a
            href="https://maps.app.goo.gl/LXmX42vSrZLLTk2v8"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-white text-black px-3 py-1.5 rounded-full text-xs font-bold
            "
          >
            📍 Maps
          </a>
        </div>

        {/* Promo Banner */}
        <div
          className={`
            mt-5 ${PROMOS[promoIndex].color} text-black
            rounded-2xl px-4 py-3 font-bold text-sm
            shadow-lg transition-all duration-500
          `}
        >
          {PROMOS[promoIndex].text}
        </div>
      </div>

      {/* ===== Category Tabs ===== */}
      <div className="sticky top-0 z-50 bg-black py-3 shadow-xl">
        <div className="flex gap-3 overflow-x-auto px-2">
          {categories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setSelected(cat.category)}
              className={`
                px-6 py-3 rounded-full font-bold whitespace-nowrap transition
                ${selected === cat.category ? "bg-red-500 text-white" : "bg-white text-black"}
              `}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </div>

      {/* ===== Products ===== */}
      <div className="p-4">
        {categories
          .filter((cat) => cat.category === selected)
          .map((cat) => (
            <div key={cat.category} className="mb-10">
              <h2 className="text-3xl font-black mb-5">{cat.category}</h2>
              <div className="grid grid-cols-2 gap-4">
                {cat.items.map((item, index) => renderProductCard(item, index))}
              </div>
            </div>
          ))}
      </div>

      {/* ===== Floating Buttons ===== */}
      {/* Cart Toggle */}
      <button
        onClick={() => setShowCart(!showCart)}
        className="
          fixed bottom-16 right-3 z-40
          bg-black text-white px-3 py-2 rounded-full
          shadow-lg font-semibold text-sm
        "
      >
        Mi Orden
        <span className="bg-red-500 text-white px-2 py-1 rounded-full ml-2 animate-pulse">
          {cartCount}
        </span>
      </button>

      {/* WhatsApp Order */}
      {cart.length > 0 && (
        <button
          onClick={handleWhatsAppOrder}
          className="
            fixed bottom-3 right-3 z-10
            bg-green-500 text-white px-3 py-2 rounded-full
            shadow-lg font-semibold text-sm
          "
        >
          WhatsApp Order
        </button>
      )}

      {/* ===== Cart Drawer ===== */}
      {showCart && (
        <div
          className="
            fixed bottom-24 right-5 z-50
            bg-white p-4 rounded-2xl shadow-2xl
            w-56 text-black max-h-48 overflow-y-auto
          "
        >
          <h2 className="font-black text-lg mb-3">Mi Orden</h2>

          {cart.length === 0 ? (
            <p className="text-gray-400 text-sm">Carrito vacío</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.name} className="flex justify-between items-center mb-2">
                  <div>
                    <p className="font-bold text-sm">{item.name}</p>
                    <p className="text-xs">{item.qty} x L.{item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="text-red-500 font-bold text-sm"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <hr className="my-3" />
              <p className="font-black text-lg">Total: L.{total}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}