import menu from "./menu";
export default function App() {
  
  return (
    <div className="p-4 flex flex-col gap-4">
  {menu.map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-3xl shadow-xl overflow-hidden"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <p className="text-sm text-gray-500">
          {item.category}
        </p>

        <h2 className="text-2xl font-bold">
          {item.name}
        </h2>

        <p className="text-xl text-red-500 font-bold mt-2">
          {item.price}
        </p>

        <a
          href={`https://wa.me/50494340468?text=Hola quiero pedir ${item.name}`}
          target="_blank"
          className="
          mt-4
          w-full
          bg-green-500
          text-white
          py-4
          rounded-2xl
          text-xl
          font-bold
          active:scale-95
          transition
          block
          text-center
          "
        >
          Pedir por WhatsApp
        </a>
      </div>
    </div>
  ))}
</div>
  );
}