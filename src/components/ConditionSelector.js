export default function ConditionSelector({ condition, setCondition }) {

  const conditions = [[2, "絕對水量"], [3, "百分比水量"]];

  const options = conditions.map(x => (
    <option value={x[0]}>{x[1]}</option>
  ))

  const handleChange = (e) => setCondition(e.target.value);

  return (
    <select className="form-select" aria-label="Default select example" value={condition} onChange={handleChange}>
      {options}
    </select>
  );
}
