import { books } from "./data";
import { useParams } from "@remix-run/react";

export default function BookDetail() {
  const { bookId } = useParams();
  const book = books.find((item) => item.Code === bookId);

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <div className="flex justify-center my-6 px-4">
      <div className="max-w-4xl bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-sans font-bold text-center mb-4">
            รายละเอียดหนังสือ
          </h1>
          <hr className="my-4 border-gray-300" />
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <img
              src={book.Cover}
              alt={book.Title}
              className="object-cover w-full lg:w-64 h-96 rounded-lg shadow-md"
            />
            <div className="lg:ml-8 mt-6 lg:mt-0 text-black w-full">
              <table className="table-auto w-full text-left border-collapse">
                <tbody>
                  <tr>
                    <td className="font-semibold p-2 border">ชื่อหนังสือ</td>
                    <td className="p-2 border">{book.Title}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold p-2 border">รายละเอียด</td>
                    <td className="p-2 border">{book.Description}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold p-2 border">ราคา</td>
                    <td className="p-2 border">{book.Price.toFixed(2)} บาท</td>
                  </tr>
                  <tr>
                    <td className="font-semibold p-2 border">ผู้แต่ง</td>
                    <td className="p-2 border">{book.Author}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold p-2 border">สำนักพิมพ์</td>
                    <td className="p-2 border">{book.Publishing}</td>
                  </tr>
                </tbody>
              </table>
              <a
                href="/"
                className="inline-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
              >
                ย้อนกลับ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
