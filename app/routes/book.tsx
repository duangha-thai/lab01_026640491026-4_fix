import { useState } from "react";
import { books } from "./data";

export default function BookSeller() {
  // Create state to hold all books
  const [BookList] = useState(books);

  // Create state for filter (initially set to bestseller)
  const [filter, setFilter] = useState("bestseller");

  // Filter books based on selected filter value
  const filteredBooks = BookList.filter((book) => {
    if (filter === "bestseller") return book.Bestseller;
    if (filter === "flashsale") return book.Flashsale;
    return false;
  });

  return (
    <>
      {/* Header section */}
      <div className="banner text-center my-6">
        <h1 className="text-3xl font-sans font-bold">
          ยินดีต้อนรับเข้าสู่ร้านขายหนังสือ
        </h1>
        <hr className="my-4 border-gray-400" />
      </div>

      {/* Filter buttons for Bestseller and Flash Sale */}
      <div className="text-center my-4">
        <button
          onClick={() => setFilter("bestseller")}
          className={`px-4 py-2 mr-2 rounded-lg ${
            filter === "bestseller"
              ? "bg-red-600 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          Bestsellers
        </button>
        <button
          onClick={() => setFilter("flashsale")}
          className={`px-4 py-2 rounded-lg ${
            filter === "flashsale"
              ? "bg-yellow-600 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          Flash Sale
        </button>
      </div>

      {/* Cards for displaying books */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {filteredBooks.map((item) => (
          <div key={item.Code} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <a href={`/BookDetail/${item.Code}`}>
              <img
                className="object-cover w-full h-48"
                src={item.Cover}
                alt={item.Title}
              />
            </a>
            <div className="p-4">
              <a
                href={`/BookDetail/${item.Code}`}
                className="text-lg font-semibold text-gray-900 hover:text-blue-600"
              >
                {item.Title}
              </a>
              <div className="mt-2">
                {item.Bestseller && (
                  <span className="inline-block bg-blue-600 text-white px-2 py-1 rounded-lg font-bold">
                    ขายดี!!!!!
                  </span>
                )}
                {item.Flashsale && (
                  <span className="inline-block bg-yellow-600 text-white px-2 py-1 rounded-lg font-bold">
                    ลดราคา!!!!!
                  </span>
                )}
              </div>
              <div className="mt-2">
                <span className="text-lg font-bold text-gray-900">
                  {item.Price.toFixed(2)} บาท
                </span>
              </div>
              <a
                href={`/BookDetail/${item.Code}`}
                className="mt-4 block text-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                รายละเอียดเพิ่มเติม
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer section */}
      <div className="banner text-center my-6">
        <hr className="my-4 border-gray-400" />
        <p>
          ขอขอบคุณข้อมูลจาก{" "}
          <a
            href="https://www.naiin.com/"
            className="text-blue-500 hover:underline"
          >
            ร้านหนังสือนายอินทร์ ร้านขายหนังสือออนไลน์ อีบุ๊ค และสินค้าไลฟ์สไตล์
          </a>
        </p>
      </div>
    </>
  );
}
