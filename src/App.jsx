import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Conocenos from "./pages/Conocenos";
import { categories } from "./menu";

// ===== 促销数据 =====
const PROMOS = [
  { text: "🎉 Jueves 3x2 en Rollos", color: "bg-red-400" },
  
];

const PROMO_IMAGE = "/images/combo-yamato.webp";
const WHATSAPP_NUMBER = "50494340468";

// ===== HomePage 组件 =====
function HomePage() {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [showPromo, setShowPromo] = useState(false);
  const [selected, setSelected] = useState("Entradas");
  const [promoIndex, setPromoIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  // ===== 组合套餐状态 =====
  const [comboItem, setComboItem] = useState(null);
  const [comboStep, setComboStep] = useState(0);
  const [comboSelections, setComboSelections] = useState({});

  const total = cart.reduce((sum, item) => sum + Number(item.price) * item.qty, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  useEffect(() => {
    const handleScroll = () => setShowCart(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const lastClosed = localStorage.getItem("promoClosed");
    const today = new Date().toDateString();
    if (lastClosed !== today) setShowPromo(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPromoIndex((prev) => (prev === PROMOS.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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

  // ===== 打开组合套餐选择器 =====
  const openComboSelector = (item) => {
    setComboItem(item);
    setComboStep(0);
    setComboSelections({});
  };

  // ===== 关闭组合套餐选择器 =====
  const closeComboSelector = () => {
    setComboItem(null);
    setComboStep(0);
    setComboSelections({});
  };

  // ===== 选择组合套餐选项 =====
  const selectComboOption = (stepIndex, optionName) => {
    const newSelections = { ...comboSelections, [stepIndex]: { name: optionName } };
    setComboSelections(newSelections);
  
    if (stepIndex < comboItem.steps.length - 1) {
      setComboStep(stepIndex + 1);
    } else {
      const comboName = comboItem.name;
      const details = Object.values(newSelections).map(s => s.name).join(' + ');
      const totalPrice = Number(comboItem.price) || 0;  // ← 用商品固定价格，不累加
      
      addToCart({
        name: `${comboName} (${details})`,
        price: totalPrice,
      });
      
      closeComboSelector();
    }
  };

  // ===== 判断是否是组合套餐 =====
  const isComboItem = (item) => {
    return item.type === 'combo' && item.steps && item.steps.length > 0;
  };

  // ===== 渲染产品按钮 =====
  const renderItemOptions = (item) => {
    // 组合套餐
    if (isComboItem(item)) {
      return (
        <button
          onClick={() => openComboSelector(item)}
          className="bg-black text-white px-4 py-2 rounded-xl active:scale-95 active:bg-red-500 transition w-full text-sm"
        >
          Personalizar Combo
        </button>
      );
    }

    // 普通带选项的产品
    if (item.options) {
      return (
        <button
          onClick={() => setSelectedItem(item)}
          className="bg-black text-white px-4 py-2 rounded-xl active:scale-95 active:bg-red-500 transition w-full text-sm"
        >
          Personalizar
        </button>
      );
    }

    // 普通产品
    return (
      <>
        <p className="text-red-500 font-black text-xl mb-2">L.{item.price}</p>
        <button
          onClick={() => addToCart(item)}
          className="bg-black text-white px-4 py-2 rounded-xl active:scale-95 active:bg-red-500 transition w-full text-sm"
        >
          Agregar
        </button>
      </>
    );
  };

  // ===== 渲染产品卡片 =====
  const renderProductCard = (item, index) => (
    <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg">
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className="w-full aspect-square object-cover rounded-xl"
      />
      <div className="p-4">
        <h2 className="font-black text-lg leading-tight">{item.name}</h2>
        <p className="text-sm text-gray-500 mt-2 min-h-[40px]">{item.desc}</p>
        
        {/* 只有组合套餐才在卡片上显示价格（因为按钮里没有价格） */}
        {item.type === 'combo' && item.price && (
          <p className="text-red-500 font-black text-xl mt-1">L.{item.price}</p>
        )}
        
        <div className="mt-4">{renderItemOptions(item)}</div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      {/* Promo Modal */}
      {showPromo && (
        <div
          onClick={closePromo}
          className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center p-4"
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
              <button onClick={closePromo} className="float-right text-xl font-bold">
                ✕
              </button>
              <h2 className="text-3xl font-black text-red-500">NUEVO</h2>
              <p className="font-bold mt-2">🍣 Combo Yamato</p>
              <p className="text-500 font-black text-xl mt-2">L.399</p>
              <p className="text-gray-600 mt-2">sushi + entradas a un mejor precio.</p>
              <button
                onClick={closePromo}
                className="mt-4 w-full bg-black text-white py-3 rounded-xl font-bold active:scale-95 transition"
              >
                Ver Menú
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed top-5 right-5 bg-black text-white px-5 py-3 rounded-2xl shadow-2xl z-[100] animate-bounce">
          ✅ {toast}
        </div>
      )}

      {/* Header */}
      <div className="bg-black text-white p-6 shadow-xl">
        <h1 className="text-4xl font-black">SUSHI YAMATO</h1>
        <p className="text-sm text-yellow-400 mt-2 font-semibold">
          Sushi • Ramen • Bowls • Bubble Tea
        </p>
        <p className="text-gray-400 mt-1">
          Restaurante japonés en Copán, Honduras
        </p>

        <div className="flex gap-3 mt-3 flex-wrap">
          <a
            href="https://instagram.com/sushiyamato.hn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-3 py-1.5 rounded-full text-xs font-bold"
          >
            📸 Instagram
          </a>
          <a
            href="https://maps.app.goo.gl/LXmX42vSrZLLTk2v8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-3 py-1.5 rounded-full text-xs font-bold"
          >
            📍 Maps
          </a>
          <Link
            to="/conocenos"
            className="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold"
          >
            🏠 Conócenos
          </Link>
        </div>

        <div
          className={`mt-5 ${PROMOS[promoIndex].color} text-black rounded-2xl px-4 py-3 font-bold text-sm shadow-lg transition-all duration-500`}
        >
          {PROMOS[promoIndex].text}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-0 z-50 bg-black py-3 shadow-xl">
        <div className="flex gap-3 overflow-x-auto px-2">
          {categories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setSelected(cat.category)}
              className={`px-6 py-3 rounded-full font-bold whitespace-nowrap transition ${
                selected === cat.category ? "bg-red-500 text-white" : "bg-white text-black"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
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

      {/* Floating Buttons */}
      <button
        onClick={() => setShowCart(!showCart)}
        className="fixed bottom-16 right-3 z-40 bg-black text-white px-3 py-2 rounded-full shadow-lg font-semibold text-sm"
      >
        Mi Orden
        <span className="bg-red-500 text-white px-2 py-1 rounded-full ml-2 animate-pulse">
          {cartCount}
        </span>
      </button>

      {cart.length > 0 && (
        <button
          onClick={handleWhatsAppOrder}
          className="fixed bottom-3 right-3 z-10 bg-green-500 text-white px-3 py-2 rounded-full shadow-lg font-semibold text-sm"
        >
          WhatsApp Order
        </button>
      )}

      {/* ===== 普通产品个性化弹窗 ===== */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-5 w-full max-w-sm max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-black mb-1">{selectedItem.name}</h2>
            <p className="text-gray-500 text-sm mb-4">{selectedItem.desc}</p>
            <div className="flex flex-col gap-2">
              {selectedItem.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    addToCart({
                      ...selectedItem,
                      name: `${selectedItem.name} - ${option.name}`,
                      price: option.price,
                    });
                    setSelectedItem(null);
                  }}
                  className="bg-gray-100 py-3 px-4 rounded-xl text-left hover:bg-gray-200 transition"
                >
                  <span className="font-medium">{option.name}</span>
                  <span className="text-gray-500 text-sm ml-2">+ L.{option.price}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setSelectedItem(null)}
              className="mt-4 w-full border py-3 rounded-xl text-center"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* ===== 组合套餐多步骤弹窗 ===== */}
      {comboItem && (
        <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-5 w-full max-w-sm max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-black mb-1">{comboItem.name}</h2>
            <p className="text-gray-500 text-sm mb-4">{comboItem.desc}</p>

            {/* 步骤指示器 */}
            <div className="flex gap-2 mb-4">
              {comboItem.steps.map((_, idx) => (
                <span
                  key={idx}
                  className={`text-xs px-3 py-1 rounded-full ${
                    idx <= comboStep ? 'bg-black text-white' : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {idx + 1}
                </span>
              ))}
            </div>

            {/* 当前步骤 */}
            <p className="font-bold mb-3 text-lg">
              {comboItem.steps[comboStep]?.label}
            </p>

            <div className="flex flex-col gap-2">
              {comboItem.steps[comboStep]?.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => selectComboOption(comboStep, opt.name, opt.price)}
                  className="bg-gray-100 py-3 px-4 rounded-xl text-left hover:bg-gray-200 transition"
                >
                  <span className="font-medium">{opt.name}</span>
                  {opt.price > 0 && (
                    <span className="text-gray-500 text-sm ml-2">+ L.{opt.price}</span>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={closeComboSelector}
              className="mt-4 w-full border py-3 rounded-xl text-center"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {showCart && (
        <div className="fixed bottom-24 right-5 z-50 bg-white p-4 rounded-2xl shadow-2xl w-56 text-black max-h-48 overflow-y-auto">
          <h2 className="font-black text-lg mb-3">Mi Orden</h2>
          {cart.length === 0 ? (
            <p className="text-gray-400 text-sm">Carrito vacío</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.name} className="flex justify-between items-center mb-2">
                  <div>
                    <p className="font-bold text-sm leading-tight">{item.name}</p>
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

      <footer className="bg-black text-gray-400 text-center py-6 mt-10">
        <p className="text-sm">© 2026 Sushi Yamato</p>
        <p className="text-xs mt-2">
          Menú digital desarrollado por{" "}
          <a
            href="https://hnmenu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold"
          >
            HNMenu
          </a>
        </p>
      </footer>
    </div>
  );
}

// ===== App 组件（路由配置） =====
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/conocenos" element={<Conocenos />} />
    </Routes>
  );
}