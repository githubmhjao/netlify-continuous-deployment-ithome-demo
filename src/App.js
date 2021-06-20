import { useState, useEffect } from "react";
import createBody from "./createBody";
import ConditionSelector from "./components/ConditionSelector";
import StorageChart from "./components/StorageChart";

export default function App() {
  const [dateArray, setDateArray] = useState([]);
  const [datasetArray, setDatasetArray] = useState([]);
  const [condition, setCondition] = useState(2);

  function createDateArray() {
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDate = today.getDate();
    const arrayLength = 20;
    const dateArray = [...Array(arrayLength)]
      .map((x, i) => i - arrayLength + 1)
      .map(x => new Date(todayYear, todayMonth, todayDate + x))
      .map(x => [x.getFullYear(), x.getMonth() + 1, x.getDate()]);
    return dateArray;
  }

  async function fetchStorage(year, month, date) {
    const res = await fetch("/storage/api", {
      "headers": {
        "accept": "*/*",
        "accept-language": "zh-TW,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-microsoftajax": "Delta=true",
        "x-requested-with": "XMLHttpRequest"
      },
      "referrer": "https://fhy.wra.gov.tw/ReservoirPage_2011/StorageCapacity.aspx",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": createBody(year, month, date),
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    });

    const text = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");

    const storageData = [...doc.querySelector("tbody").querySelectorAll("tr")]
      .slice(2, -1)
      .map(x => [...x.querySelectorAll("td")])
      .map(x => [x[0], x[1], x[9], x[10]].map(td => td.textContent.replaceAll(",", "").replaceAll(" %", "")))
      .map(x => isNaN(parseFloat(x)) ? x : parseFloat(x))

    return storageData;
  }

  useEffect(() => {
    (async () => {
      const rawDateArray = createDateArray();
      console.log(rawDateArray);
      const storageArray = await Promise.all(rawDateArray.map(async x => await fetchStorage(...x)));
      const rawDatasetArray = storageArray[0].map((storage, i) => storageArray.map(date => date[i]));

      setDateArray(rawDateArray);
      setDatasetArray(rawDatasetArray);
    })()
  }, [])

  return (
    <div className="container">
      <h1>Hello from Netlify</h1>
      <h2>Enjoy the power of Continuous Deployment!</h2>
      <ConditionSelector condition={condition} setCondition={setCondition} />
      <StorageChart datasetArray={datasetArray} dateArray={dateArray} condition={condition} />
    </div>
  );
}
