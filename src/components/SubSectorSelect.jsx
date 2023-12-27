import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import FavoriteContext from "../store/SectorContext";
export default function SubSectorSelect() {
  const favCard = React.useContext(FavoriteContext);
  const [age, setAge] = React.useState("");
  const [subSector, setsubSector] = React.useState([]);
  React.useEffect(() => {
   
    if (favCard.selection.length > 0) {
      fetch(
        `https://searchartback-production-dc78.up.railway.app/api/subsectors/?sector=${favCard.selection}`
      )
        .then((response) => response.json())
        .then((responseData) => setsubSector(responseData));
    }
  }, [favCard.selection]);
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setAge(selectedValue);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Typography
          variant="h2"
          sx={{
            color: "#A7B4CA",
            fontFamily: "Manrope",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
          }}
        >
          Subsector
        </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{
            width: "202px",
            height: "38px",
            border: "1px solid #4A628A",
            backgroundColor: "#293F64",
            borderRadius: "7px",
          }}
        >
          {subSector?.map((subSector) => (
            <MenuItem value={subSector}>{subSector}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
