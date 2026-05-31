import { categories } from "./menu";

export default function App() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">

      {/* HEADER */}
      <div className="bg-black text-white p-6 sticky top-0 z-50 shadow-xl">

        <h1 className="text-4xl font-black">
          SUSHI YAMATO
        </h1>

        <p className="text-gray-400 mt-1">
          Japanese Fusion
        </p>

        {/* CATEGORY */}
        <div className="flex gap-3 overflow-x-auto mt-5 pb-2">

          {categories.map((cat) => (
            <button
              key={cat.category}
              className="
                bg-white
                text-black
                px-6
                py-3
                rounded-full
                font-bold
                whitespace-nowrap
              "
            >
              {cat.category}
            </button>
          ))}

        </div>

      </div>

      {/* PRODUCTS */}
      <div className="p-4">

        {categories.map((cat) => (

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
                      h-40
                      object-cover
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

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

      {/* WHATSAPP */}
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