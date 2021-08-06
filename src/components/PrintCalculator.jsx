import { useState } from 'react';

import packageJson from '../../package.json';

const PrintCalculator = () => {
  const [filamentCost, setFilamentCost] = useState(22.99);
  const [materialWeight, setMaterialWeight] = useState(50);

  const [machineWear, setMachineWear] = useState(1);
  const [printTime, setPrintTime] = useState(1);
  const [powerConsumption, setPowerConsumption] = useState(0.125);
  const [electricCost, setElectricCost] = useState(0.08785);

  const calculateMaterials = () => {
    const materialCost = filamentCost * (materialWeight / 1000);
    const totalCost = materialCost;
    return totalCost.toFixed(2);
  }

  const calculateMachine = () => {
    const electricTotal = electricCost * powerConsumption * printTime;
    const totalCost = electricTotal + machineWear;
    return totalCost.toFixed(2);
  }

  const calculateTotal = () => {
    const material = calculateMaterials();
    const machine = calculateMachine();
    const totalCost = +material + +machine;
    return totalCost;
  }

  return(
    <div>
      <div>
        <p>Materials</p>
        <form>
          <label>Filament ($/kg)</label>
          <input type="number" value={filamentCost} step="0.01" onChange={e => setFilamentCost(+e.target.value)} />
          <label>Material Weight (g)</label>
          <input type="number" value={materialWeight} onChange={e => setMaterialWeight(+e.target.value)} />
        </form>
        <p>Material Cost: ${calculateMaterials()}</p>
      </div>

      <div>
        <p>Machine Cost & Wear</p>
        <form>
          <label>Machine Wear (cost per print to cover machine use)</label>
          <input type="number" value={machineWear} step="0.1" onChange={e => setMachineWear(+e.target.value)} />
          <label>Print Time (Hours)</label>
          <input type="number" value={printTime} step="0.1" onChange={e => setPrintTime(+e.target.value)} />
          <label>Power Consumption (your machine's power-consumption by kwh)</label>
          <input type="number" value={powerConsumption} step="0.001" onChange={e => setPowerConsumption(+e.target.value)} />
          <label>Electricity Cost (electric cost of kwh)</label>
          <input type="number" value={electricCost} step="0.00001" onChange={e => setElectricCost(+e.target.value)} />
        </form>
        <p>Machine Cost: ${calculateMachine()}</p>
      </div>

      <div>
        <p>Total Cost: ${calculateTotal()}</p>
      </div>

      <div>
        <p>v{packageJson.version}</p>
      </div>
    </div>
  );
}

export default PrintCalculator;
