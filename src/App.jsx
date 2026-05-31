import { useState } from "react";
import { categories } from "./menu";

export default function App() {
  const [cart, setCart] = useState([])
  const addToCart = (item) => {
    setCart([...cart, item])
  }
  const [selected, setSelected] = useState("Entradas");

  return (
    <div className="bg-[#f5f5f5] min-h-screen">

      {/* HEADER */}
      <div className="bg-black text-white p-6 sticky top-0 z-50 shadow-xl">

        <h1 className="text-4xl font-black">
          SUSHI YAMATO
        </h1>

        <p className="text-gray-400 mt-1">
          La Entrada de Copan
        </p>

        {/* CATEGORY */}
        <div className="flex gap-3 overflow-x-auto mt-5 pb-2">

          {categories.map((cat) => (

            <button
              key={cat.category}
              onClick={() => setSelected(cat.category)}
              className={`
                px-6
                py-3
                rounded-full
                font-bold
                whitespace-nowrap
                ${
                  selected === cat.category
                    ? "bg-red-500 text-white"
                    : "bg-white text-black"
                }
              `}
            >
              {cat.category}
            </button>

          ))}

        </div>

      </div>

      {/* PRODUCTS */}
      <div className="p-4">

        {categories
          .filter((cat) => cat.category === selected)
          .map((cat) => (

            <div key={cat.category} className="mb-10">

              <h2 className="text-3xl font-black mb-5">
                {cat.category}
              </h2>

              <div className="grid grid-cols-2 gap-4">

                {cat.items.map((item, index) => (

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
                        aspect-square
                        object-cover
                        rounded-xl
                      "
                    />

                    <div className="p-4">

                      <h2 className="font-black text-lg leading-tight">
                        {item.name}
                      </h2>

                      <p className="text-sm text-gray-500 mt-2 min-h-[40px]">
                        {item.desc}
                      </p>

                      <div className="mt-4">

                        <p className="text-red-500 font-black text-xl">
                          {item.price}
                        </p>
                        <button
                           onClick={() => addToCart(item)}
                           className="bg-black text-white px-4 py-2 rounded-xl"
                          >
                           Agregar
                        </button>
                        

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

        ))}

      </div>

      <button
  onClick={() => {
    const message = cart
      .map((item) => `- ${item.name} ${item.price}`)
      .join("\n")

    const url = `https://wa.me/50494340468?text=${encodeURIComponent(
      "Hola, quiero ordenar:\n\n" + message
    )}`

    window.open(url)
  }}
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
  WhatsApp Order
</button>

    </div>
  );
}