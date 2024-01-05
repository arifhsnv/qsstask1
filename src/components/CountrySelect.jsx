import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import FavoriteContext from "../store/SectorContext";

export default function CountrySelect() {
  const favCard = useContext(FavoriteContext);
  const [age, setAge] = useState("");
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://searchartback-production-dc78.up.railway.app/api/country/?indicator=${favCard.indicatorData}`
        );
        const responseData = await response.json();
        setCountry(responseData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [country]);

  const handleChange = (event) => {
    const selectedCountryCode = event.target.value;
    setAge(selectedCountryCode);
    favCard.setSelectedCountry(selectedCountryCode);

    favCard.selectedCountry.push(selectedCountryCode);
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
          {country.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
