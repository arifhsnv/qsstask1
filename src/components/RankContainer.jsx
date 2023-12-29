import React from "react";
import "./RankContainer.css";
import { Typography } from "@mui/material";
function RankContainer() {
  return (
    <>
      <div className="rank-container">
        <div className="rank-country">
          <div className="introduction">
            <Typography
              variant="body1"
              sx={{
                color: "#A7B4CA",
                fontFamily: "Manrope",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                width: "359px",
                height: "44px",
              }}
            >
              Gross Domestic Product billions of U.S. dollars in 2021 year
            </Typography>
          </div>
          <div style={{ display: "flex",gap:"100px" }}>
            <Typography
              variant="body1"
              sx={{
                color: "#fff",
                fontFamily: "Manrope",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "500",
                  lineHeight: "normal",
                marginLeft:"10px"
              }}
            >
              Rank
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#fff",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
              }}
            >
              Country
            </Typography>
                  </div>
                  <div className="details-countries"></div>
        </div>
      </div>
    </>
  );
}

export default RankContainer;
