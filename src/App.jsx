import menu from "./menu";
import { useState } from "react";

export default function App() {
  const categories = [...new Set(menu.map(item => item.category))];

  const [selected, setSelected] = useState("Entradas");

  const filtered = menu.filter(
    item => item.category === selected
  );

  return (
    <div className="bg-[#f5f5f5] min-h-screen pb-32">

      {/* HEADER */}
      <div className="bg-black text-white p-6 sticky top-0 z-50 shadow-xl">

        <h1 className="text-4xl font-black">
          SUSHI YAMATO
        </h1>

        <p className="text-gray-400 mt-1">
          Japanese Fusion
        </p>

        {/* CATEGORY */}
        <div className="flex gap-3 overflow-x-auto mt-5 pb-1">

          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelected(category)}
              className={`
                px-5
                py-2
                rounded-full
                whitespace-nowrap
                font-bold
                transition
                ${
                  selected === category
                    ? "bg-red-500 text-white"
                    : "bg-white text-black"
                }
              `}
            >
              {category}
            </button>
          ))}

        </div>
      </div>

      {/* PRODUCTS */}
      <div className="p-4 grid grid-cols-2 gap-4">

        {filtered.map((item, index) => (

          <div
            key={index}
            className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-lg
            "
          >

            <img
              src={item.image}
              alt={item.name}
              className="
                w-full
                h-40
                object-cover
              "
            />

            <div className="p-4">

              <p className="text-xs text-gray-400">
                {item.category}
              </p>

              <h2 className="font-black text-lg leading-tight mt-1">
                {item.name}
              </h2>

              <p className="text-sm text-gray-500 mt-2 min-h-[40px]">
                {item.desc}
              </p>

              <div className="mt-4 flex items-center justify-between">

                <p className="text-red-500 font-black text-xl">
                  {item.price}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/50494340468"
        target="_blank"
        className="
          fixed
          bottom-5
          right-5
          bg-green-500
          text-white
          px-6
          py-4
          rounded-full
          shadow-2xl
          font-black
          text-lg
        "
      >
        WhatsApp
      </a>

    </div>
  );
}