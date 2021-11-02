import { Table } from "react-bootstrap";
import ModuleCard from "./ModuleCard";
// import { useState } from 'react'

const ModulesCard: React.FC = () => {
  // const [count, setCount] = useState(1)

  return (
    <div>
      <Table className="table-hover table-sm small">
        <thead>
          <tr>
            <th>Module</th>
            <th style={{ width: "20%" }}>Count</th>
            <th style={{ width: "5%" }}></th>
            <th style={{ width: "5%" }}></th>
          </tr>
        </thead>
        <tbody>
          <ModuleCard />
        </tbody>
      </Table>
    </div>
  );
};

export default ModulesCard;
