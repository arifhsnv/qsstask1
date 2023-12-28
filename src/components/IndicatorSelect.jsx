import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
export default function IndicatorSelect() {
  const [age, setAge] = React.useState("");
  const [indicator, setindicator] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://searchartback-production-dc78.up.railway.app/api/indicators/?subsector=Productivity%20and%20Labor%20Market"
        );
      } catch (error) {}
    }
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
          Indicator
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
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
