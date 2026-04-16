const CardList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {posts.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-cover"
          />

          <div className="p-4">
            <h3 className="text-lg font-semibold text-center">
              {item.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;