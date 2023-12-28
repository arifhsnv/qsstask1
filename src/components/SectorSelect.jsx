import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import FavoriteContext from "../store/SectorContext.js";
export default function SectorSelect() {
  const favCard = React.useContext(FavoriteContext);
  const [age, setAge] = React.useState("");
  const [sector, setsector] = React.useState([]);

  React.useEffect(() => {
    fetch("https://searchartback-production-dc78.up.railway.app/api/sectors/")
      .then((response) => response.json())
      .then((repsonseData) => setsector(repsonseData));
  }, []);
  const handleChange = (event) => {
    const selectedSector = event.target.value;
    setAge(selectedSector);
    favCard.selection = selectedSector;
    console.log(selectedSector);
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
          Sector
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
          {sector.map((item) => (
            <MenuItem  value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
