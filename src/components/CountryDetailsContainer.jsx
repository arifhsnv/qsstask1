import React, { useContext, useEffect, useState } from "react";
import "./CountryDetailsContainer.css";
import { Typography } from "@mui/material";
import FavoriteContext from "../store/SectorContext.js";
import HorizontalBarChart from "./HorizontalBarChart.jsx";
function CountryDetailsContainer() {
  const favCard = useContext(FavoriteContext);
  const [initialData, setInitialData] = useState([]);
  const [flagsData, setFlagsData] = useState([]);
  const [filteredIndicator, setfilteredIndicator] = useState([]);
  const [addYear, setaddYear] = useState([]);
  const [addCountry, setaddCountry] = useState([]);

  useEffect(() => {
    fetch(
      `https://searchartback-production-dc78.up.railway.app/api/bar-chart/?indicator=${favCard.indicatorData}&year1=${favCard.yearData}&ranks=1%2C10&countries=Afghanistan%3BAlbania%3BAlgeria%3BAndorra%3BAngola%3BAntigua%2520and%2520Barbuda%3BArgentina%3BArmenia%3BAruba%3BAustralia%3BAustria%3BAzerbaijan%3BBahamas%3BBahrain%3BBangladesh%3BBarbados%3BBelarus%3BBelgium%3BBelize%3BBenin%3BBermuda%3BBhutan%3BBolivia%3BBosnia%2520and%2520Herzegovina%3BBotswana%3BBrazil%3BBrunei%3BBulgaria%3BBurkina%2520Faso%3BBurma%2520(Myanmar)%3BBurundi%3BCabo%2520Verde%3BCambodia%3BCameroon%3BCanada%3BCentral%2520African%2520Republic%3BChad%3BChile%3BChina%3BChina%2C%2520P.R.%3A%2520Hong%2520Kong%3BChina%2C%2520P.R.%3A%2520Macao%3BColombia%3BComoros%3BCosta%2520Rica%3BCroatia%3BCyprus%3BCzechia%3BDenmark%3BDjibouti%3BEcuador%3BEgypt%3BEl%2520Salvador%3BEquatorial%2520Guinea%3BEritrea%3BEstonia%3BEswatini%3BEthiopia%3BFaroe%2520Islands%3BFiji%3BFinland%3BFrance%3BGabon%3BGambia%3BGeorgia%3BGermany%3BGhana%3BGreece%3BGrenada%3BGuatemala%3BGuinea%3BGuinea-Bissau%3BGuyana%3BHaiti%3BHonduras%3BHungary%3BIceland%3BIndia%3BIndonesia%3BIran%3BIraq%3BIreland%3BIsrael%3BItaly%3BIvory%2520Coast%3BJamaica%3BJapan%3BJordan%3BKazakhstan%3BKenya%3BKiribati%3BKuwait%3BKyrgyzstan%3BLaos%3BLatvia%3BLebanon%3BLesotho%3BLiberia%3BLibya%3BLiechtenstein%3BLithuania%3BLuxembourg%3BMadagascar%3BMalawi%3BMalaysia%3BMaldives%3BMali%3BMalta%3BMexico%3BMicronesia%3BMoldova%3BMonaco%3BMongolia%3BMontenegro%3BMorocco%3BMozambique%3BNamibia%3BNepal%3BNetherlands%3BNew%2520Caledonia%3BNew%2520Zealand%3BNicaragua%3BNiger%3BNigeria%3BNorth%2520Macedonia%3BNorway%3BOman%3BPakistan%3BPalau%3BPalestine%3BPanama%3BPapua%2520New%2520Guinea%3BParaguay%3BPeru%3BPhilippines%3BPoland%3BPortugal%3BPuerto%2520Rico%3BQatar%3BRomania%3BRussia%3BRwanda%3BSamoa%3BSan%2520Marino%3BSao%2520Tome%2520and%2520Principe%3BSaudi%2520Arabia%3BSenegal%3BSerbia%3BSeychelles%3BSierra%2520Leone%3BSingapore%3BSlovakia%3BSlovenia%3BSolomon%2520Islands%3BSomalia%3BSouth%2520Africa%3BSouth%2520Korea%3BSpain%3BSri%2520Lanka%3BSt.%2520Lucia%3BSt.%2520Vincent%2520and%2520the%2520Grenadines%3BSudan%3BSuriname%3BSweden%3BSwitzerland%3BSyria%3BTajikistan%3BTanzania%3BThailand%3BTogo%3BTonga%3BTrinidad%2520and%2520Tobago%3BTunisia%3BTurkiye%3BTurkmenistan%3BTuvalu%3BUganda%3BUkraine%3BUnited%2520Arab%2520Emirates%3BUnited%2520Kingdom%3BUnited%2520States%3BUruguay%3BUzbekistan%3BVanuatu%3BVenezuela%3BVietnam%3BYemen%3BZambia%3BZimbabwe`
    )
      .then((response) => response.json())
      .then((responseData) => setInitialData(responseData.countries_by_rank));

    setaddCountry(favCard.selectedCountry);
    setfilteredIndicator(favCard.indicatorData);
    setaddYear(favCard.yearData);
  }, [initialData, favCard.indicatorData]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((response) => response.json())
      .then((responseData) => setFlagsData(responseData));
  }, [flagsData]);
  favCard.initialDataCountry.push(initialData.rank);
  return (
    <>
      <div className="card-container">
        <div className="information">
          <Typography
            variant="body1"
            sx={{
              color: "#A7B4CA",
              fontFamily: "Manrope",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
            }}
          >
            {filteredIndicator}
            <span> in</span>
            <Typography
              variant="body1"
              sx={{
                color: "#A7B4CA",
                fontFamily: "Manrope",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
              }}
            >
              {addYear}
              <span>year</span>
            </Typography>
          </Typography>
        </div>
        <div className="ranks-place">
          <div className="ranks">
            <Typography
              variant="body1"
              sx={{
                color: "#fff",
                fontFamily: "Manrope",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                marginLeft: "20px",
              }}
            >
              Rank
            </Typography>
            {initialData.map((data) => (
              <Typography
                key={data.country}
                sx={{
                  color: "#fff",
                  fontFamily: "Manrope",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  marginLeft: "30px",
                }}
              >
                {data.rank}
              </Typography>
            ))}
          </div>
          <div className="country">
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Manrope",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                marginLeft: "30px",
              }}
            >
              Country
            </Typography>
            {initialData
              ? initialData.map((data) => (
                  <div key={data.country}>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontFamily: "Manrope",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                        marginLeft: "30px",
                      }}
                    >
                      {data.country}
                    </Typography>
                    {flagsData
                      .filter((flag) => flag.name.common === data.country)
                      .map((flag) => (
                        <div
                          key={flag.name.common}
                          style={{
                            width: "100px",
                            height: "100px",
                            position: "absolute",
                            left: "150px",
                          }}
                        >
                          <img
                            style={{
                              width: "16px",
                              height: "16px",
                              position: "absolute",
                              bottom: "100px",
                            }}
                            src={flag.flags.svg}
                            alt={flag.name.common}
                          />
                        </div>
                      ))}
                  </div>
                ))
              : addCountry.map((country) => (
                  <div key={country}>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontFamily: "Manrope",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                        marginLeft: "30px",
                      }}
                    >
                      {country}
                    </Typography>
                  </div>
                ))}
          </div>
          <HorizontalBarChart countryData={initialData} />
        </div>
      </div>
    </>
  );
}

export default CountryDetailsContainer;
