import Rating from "./Rating";
import Spinner from "./Spinner";


function CardList({ blogs }) {
  // Перевірка наявності даних і формату
  if (!blogs.length) {
    return <Spinner/>;
  }

  return (
    <div className="space-y-6">
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
            <p className="text-gray-600 mt-2">
              {blog.body?.substring(0, 100) || "Текст відсутній"}
            </p>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            {/* Вставити компонент BlogUser, якщо потрібно */}
            {/* <BlogUser userId={blog.userId} /> */}
          </p>
          <div className="flex items-center justify-between">
            <Rating />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList