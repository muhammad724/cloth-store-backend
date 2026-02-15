import { useNavigate } from "react-router";

export default function CategorySection() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F5F1EB] text-[#0B0B0B] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-[#d1ac5c] text-center mb-12">
          Shop By Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">

          {[
            { name: "Shoes", image: "https://images.unsplash.com/photo-1520975916090-3105956dac38" },
            { name: "Hoodies", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b" },
            { name: "T-Shirts", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d" },
            { name: "Long-Seleves", image: "https://images.unsplash.com/photo-1669791777188-301b370d05f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9uZyUyMHNsZWV2ZXxlbnwwfHwwfHx8MA%3D%3D" },
            { name: "Swaetar", image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dlYXRlcnxlbnwwfHwwfHx8MA%3D%3D" },
          ].map((item) => (
            <div
              key={item.name}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              onClick={() => navigate("/Product")} // you can later filter by category
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}

        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate("/Product")}
            className="px-8 py-3 bg-[#C9A24D] text-black font-semibold rounded-md hover:opacity-90 transition"
          >
            Show All Products
          </button>
        </div>

      </div>
    </section>
  );
}
