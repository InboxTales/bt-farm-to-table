import { Package, Wheat, Carrot } from "lucide-react";

const products = [
  {
    title: "Fruit Powders",
    description: "100% natural fruit powders perfect for smoothies and baking",
    icon: Package,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
  },
  {
    title: "Dehydrated Vegetables",
    description: "Preserved vegetables that maintain their nutritional value",
    icon: Carrot,
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
  },
  {
    title: "Spices",
    description: "Premium quality spices sourced directly from farmers",
    icon: Wheat,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
];

const Products = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Products
          </h2>
          <p className="text-lg md:text-xl text-accent-brown max-w-2xl mx-auto">
            From farm to table, we deliver premium quality ingredients that preserve nature's goodness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="ml-3 text-2xl font-semibold text-primary">
                    {product.title}
                  </h3>
                </div>
                <p className="text-accent-brown text-lg mb-6">{product.description}</p>
                <button className="inline-flex items-center text-accent-gold hover:text-primary font-semibold transition-colors group-hover:translate-x-2 duration-300">
                  Learn More
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;