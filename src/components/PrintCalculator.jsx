import { useState } from 'react';

const PrintCalculator = () => {
  const [filamentCost, setFilamentCost] = useState(22.99);
  const [materialWeight, setMaterialWeight] = useState(.2);

  const calculateValues = () => {
    const materialCost = filamentCost * materialWeight;
    const totalCost = materialCost.toFixed(2);
    return totalCost;
  }

  return(
    <div>
      <p>Materials</p>
      <form>
        <label>Filament ($/kg)</label>
        <input type="number" value={filamentCost} step="0.01" onChange={e => setFilamentCost(+e.target.value)} />
        <label>Material Weight (kg)</label>
        <input type="number" value={materialWeight} step="0.01" onChange={e => setMaterialWeight(+e.target.value)} />
      </form>
      <p>Material Cost: ${calculateValues()}</p>
    </div>
  );
}

export default PrintCalculator;
