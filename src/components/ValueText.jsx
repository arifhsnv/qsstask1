import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

export default function MinimumDistanceSlider() {
  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <Box sx={{ width: 300, marginRight: "20px", display: "flex" }}>
      <input
        style={{
          width: "46px",
          height: "38px",
          borderRadius: "6px",
          border: "1px solid #2C3645",
          backgroundColor: "#051124",
          color: "#A7B4CA",
          fontFamily: "Manrope",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
          textAlign: "center",
        }}
        type="number"
      />
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
      <input
        style={{
          width: "46px",
          height: "38px",
          borderRadius: "6px",
          border: "1px solid #2C3645",
          backgroundColor: "#051124",
          color: "#A7B4CA",
          fontFamily: "Manrope",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
          textAlign: "center",
        }}
        type="number"
      />
    </Box>
  );
}
