import React from "react";
import "./Selection.css";
import CountrySelect from "./CountrySelect";
import YearSelect from "./YearSelect";
import SectorSelect from "./SectorSelect";
import SubSectorSelect from "./SubSectorSelect";
import IndicatorSelect from "./IndicatorSelect";
import MinimumDistanceSlider from "./ValueText";
import {} from "@mui/material";
function Selection() {
  return (
    <>
      <div className="selection-container">
        <CountrySelect />
        <YearSelect />
        <SectorSelect />
        <SubSectorSelect />
        <IndicatorSelect />
        <MinimumDistanceSlider />
      </div>
    </>
  );
}

export default Selection;
