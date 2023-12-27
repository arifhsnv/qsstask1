import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
export default function YearSelect() {
  const [age, setAge] = React.useState("");
  const [years, setyears] = React.useState([]);
  React.useEffect(() => {
    fetch(
      "https://searchartback-production-dc78.up.railway.app/api/years/?countries=Afghanistan%3BAlbania%3BAlgeria%3BAndorra%3BAngola%3BAntigua%20and%20Barbuda%3BArgentina&indicator=Gross%20Domestic%20Product%20billions%20of%20U.S.%20dollars"
    )
      .then((response) => response.json())
      .then((responseData) => setyears(responseData));
  }, []);
  const handleChange = (event) => {
    setAge(event.target.value);
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
          Year
        </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{
            width: "98px",
            height: "38px",
            border: "1px solid #4A628A",
            backgroundColor: "#293F64",
            borderRadius: "7px",
          }}
        >
          {years.map((year) => (
            <MenuItem value={year}>{year}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
