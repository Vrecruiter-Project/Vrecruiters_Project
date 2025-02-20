import { FormControl, MenuItem, Select } from "@mui/material";
import * as React from "react";

const Dropdown = (params) => {
  const { id, field, value } = params;
  const [dropdownValue, setDropdownValue] = React.useState(value || "");

  const handleChange = (event) => {
    setDropdownValue(event.target.value);
    // Update the row data (this is a basic example, in a real app you should handle this update appropriately)
    params.api.setEditCellValue(
      { id, field, value: event.target.value },
      event
    );
  };

  return (
    <FormControl fullWidth>
      <Select value={dropdownValue} onChange={handleChange} displayEmpty>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="Khushi">Khushi</MenuItem>
        <MenuItem value="Manjeet">Manjeet</MenuItem>
        <MenuItem value="Ritika">Ritika</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
