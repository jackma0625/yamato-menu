export default function App() {
  const categories = [
    {
      title: "Entradas",
      image: "/images/entradas.png",
    },
    {
      title: "Rollos 1",
      image: "/images/rollos1.png",
    },
    {
      title: "Rollos 2",
      image: "/images/rollos2.png",
    },
    {
      title: "Rollos 3",
      image: "/images/rollos3.png",
    },
    {
      title: "Ramen",
      image: "/images/ramen.png",
    },
    {
      title: "Bowls",
      image: "/images/bowls.png",
    },
    {
      title: "Bebidas",
      image: "/images/bebidas.png",
    },
  ];

  return (
    <div className="bg-zinc-100 min-h-screen">
      
      <div className="sticky top-0 z-50 bg-white shadow-md p-3 overflow-x-auto">
        <div className="flex gap-3 w-max">
          {categories.map((item, index) => (
            <a
              key={index}
              href={`#section-${index}`}
              className="
              bg-black
              text-white
              px-5
              py-2
              rounded-full
              font-bold
              whitespace-nowrap
              "
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>

      <div className="p-4 flex flex-col gap-10">
        {categories.map((item, index) => (
          <div
            key={index}
            id={`section-${index}`}
            className="bg-white rounded-3xl shadow-xl p-3"
          >
            <h2 className="text-3xl font-black mb-4">
              {item.title}
            </h2>

            <img
              src={item.image}
              alt={item.title}
              className="w-full rounded-2xl"
            />

            <a
              href="https://wa.me/50494340468"
              target="_blank"
              className="
              mt-5
              block
              w-full
              bg-green-500
              text-white
              text-center
              py-4
              rounded-2xl
              text-xl
              font-bold
              active:scale-95
              transition
              "
            >
              Pedir por WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}