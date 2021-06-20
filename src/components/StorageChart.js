import { Line } from "react-chartjs-2";

export default function StorageChart({ datasetArray, dateArray, condition }) {

  function createColor(fromColor, toColor, num) {
    const gradient = fromColor.map((channel, i) => (toColor[i] - channel) / num);
    return [...Array(num)].map((x, i) => i).map(x => fromColor.map((channel, i) => channel + x * gradient[i]));
  }

  const gradientColor = createColor([51, 6, 109], [19, 157, 159], datasetArray.length);

  const data = {
    labels: dateArray,
    datasets: datasetArray.map((storage, i) => ({
      label: storage[0][0],
      data: storage.map(daily => daily[condition]),
      fill: false,
      borderColor: `rgb(${gradientColor[i]})`,
      tension: 0.4
    }))
  };

  return (
    <Line data={data} />
  );
}
