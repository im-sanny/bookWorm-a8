import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const fetchBookData = async () => {
  try {
    const response = await fetch(
      "https://im-sanny.github.io/fake-data/data.json"
    );
    const bookData = await response.json();
    return bookData;
  } catch (error) {
    console.error("Error fetching book data:", error);
    return [];
  }
};

const Rechart = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    fetchBookData().then((data) => setBookData(data));
  }, []);
  return (
    <div>
      <div className="min-h-[calc(100vh-202px)]">
        <BarChart
          width={800}
          height={400}
          data={bookData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis />
          <YAxis />
          <Tooltip dataKey="bookName" />
          <Legend />
          <Bar dataKey="totalPages" fill="#8884d8" label={{ position: "top" }}>
            {bookData.map((entry, index) => (
              <Bar
                key={`bar-${index}`}
                shape={`<TriangleBar />`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default Rechart;
