import { Table } from "react-bootstrap";
import ModuleCard from "./ModuleCard";
import { Button } from "react-bootstrap";
import { FaPlusSquare, FaMagic } from "react-icons/fa";
import { useState } from "react";

type StationModule = {
  id: number;
};

const createModule = (id: number): StationModule => ({
  id,
});

const ModulesCard: React.FC = () => {
  const [modules, setModules] = useState<StationModule[]>([createModule(1)]);

  const addModule = () => {
    const nextId =
      modules.length === 0 ? 1 : modules.map((module) => module.id).reduce((idA, idB) => Math.max(idA, idB)) + 1;
    setModules([...modules, createModule(nextId)]);
    console.log(`Adding module with id ${nextId}`);
  };

  return (
    <div>
      <h3>Test</h3>
      <Table className="table-hover table-sm small" style={{ verticalAlign: "middle" }}>
        <thead>
          <tr>
            <th>Module</th>
            <th style={{ width: "20%" }}>Count</th>
            <th style={{ width: "5%" }} />
            <th style={{ width: "5%" }} />
          </tr>
        </thead>
        <tbody>
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              keyHint={module.id}
              onDelete={(keyHint) => {
                setModules(modules.filter((module) => module.id !== keyHint));
              }}
            />
          ))}
        </tbody>
      </Table>
      <div>
        <Button size="sm" onClick={addModule}>
          <FaPlusSquare className="btnMargin" />
          Add Module
        </Button>
        <Button size="sm">
          <FaMagic className="btnMargin" />
          Autofill Modules
        </Button>
      </div>
    </div>
  );
};

export default ModulesCard;
