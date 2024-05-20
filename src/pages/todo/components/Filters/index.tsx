import React from "react";
import { Chip } from "../Chip";
import { ColorPicker } from "../ColorPicker";

export const Filters = ({ color, filters, setFilters, setColor }) => {
  const _setFilter = (status) =>
    setFilters((_filters) => {
      if (_filters.includes(status)) {
        return _filters.filter((f) => f !== status);
      }

      return [status];
    });

  return (
    <div className="flex mb-4 bg-inherit items-center justify-between">
      <ColorPicker
        value={color}
        onChange={(e) => setColor(() => e.target.value)}
      />
      <div className="flex bg-inherit">
        <Chip onClick={() => setFilters([])} checked={!filters.length}>
          All
        </Chip>
        <Chip
          onClick={() => _setFilter("TODO")}
          checked={filters.includes("TODO")}
        >
          Todo
        </Chip>
        <Chip
          onClick={() => _setFilter("COMPLETED")}
          checked={filters.includes("COMPLETED")}
        >
          Completed
        </Chip>
      </div>
    </div>
  );
};
