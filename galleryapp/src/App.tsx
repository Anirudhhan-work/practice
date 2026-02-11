import { ArrowBigLeft } from "lucide-react";
import { useEffect, useState } from "react";

interface Lorem {
  id: string;
  author: string;
  download_url: string;
}

const App = () => {
  const [data, setData] = useState<Lorem[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=8`,
      );
      const json: Lorem[] = await res.json();
      console.log(json[0]);
      setData(json);
    };

    fetchData();
  }, [page]);

  return (
    <div className="w-full h-screen">
      <div className="grid grid-cols-4">
        {data.map((d) => (
          <div className="w-120 p-10" key={d.id}>
            <img
              src={d.download_url}
              alt=""
              className="rounded-lg object-cover h-70"
            />
            <h1 className="text-white text-center py-3">{d.author}</h1>
          </div>
        ))}
      </div>
      <div className="text-white flex justify-center items-center gap-10">
        <button onClick={() => setPage(page - 1)}>
          <ArrowBigLeft size={50} />
        </button>
        <p>
          <span className="bg-gray-600 text-2xl p-1 rounded-xl">0{page}</span>{" "}
          <span>/ 100</span>
        </p>
        <button onClick={() => setPage(page + 1)}>
          <ArrowBigLeft className="rotate-180" size={50} />
        </button>
      </div>
    </div>
  );
};

export default App;
