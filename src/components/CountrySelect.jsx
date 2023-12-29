import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
export default function CountrySelect() {
  const [age, setAge] = React.useState("");
  const [country, setcountry] = React.useState([]);
  React.useEffect(() => {
    try {
      fetch(
        "https://searchartback-production-dc78.up.railway.app/api/country/?indicator=Gross%20Domestic%20Product%20billions%20of%20U.S.%20dollars"
      )
        .then((response) => response.json())
        .then((responseData) => setcountry(responseData));
    } catch (error) {
      console.log(error);
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
          Country
        </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{
            width: "170px",
            height: "38px",
            border: "1px solid #4A628A",
            backgroundColor: "#293F64",
            borderRadius: "7px",
            color: "#A7B4CA",
          }}
        >
          {country.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
