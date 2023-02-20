import { Box, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../Card/Card.component";
import { CategoryTitle, StyledList } from "./Category.style";

export const Category = ({ categoryCard, setCategoryCard }) => {
  const [product, setProduct] = useState([]);
  const [value, setValue] = React.useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:5000/author/genreId/" + value)
      .then((res) => {
        if (res.status === 201) {
          setCategoryCard(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [value, setCategoryCard]);

  const getCategory = async () => {
    axios
      .get("http://localhost:5000/genre")
      .then((res) => {
        if (res.status === 201) {
          setProduct(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleChange = (evt) => {
    setValue(+evt.target.attributes.tabIndex.nodeValue);
  };

  return (
    <Box>
      <CategoryTitle>Asosiy kategoriyalar</CategoryTitle>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            width: "640px",
            borderBottom: 0,
            borderColor: "transparent",
            textAlign: "center",
            margin: "0px auto",
          }}
        >
          <Tabs
            TabIndicatorProps={{ sx: { backgroundColor: "transparent" } }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              "& button:": { color: "#0d0d0d99" },
              "& button:hover": { color: "#c9ac8c" },
              "& button.Mui-selected": { color: "#c9ac8c", border: "none" },
            }}
          >
            {product.map((el) => (
              <Tab
                sx={{ color: "rgba(13, 13, 13, 0.6)" }}
                key={el.id}
                value={el.id}
                tabIndex={el.id}
                label={el.name}
                id={`simple-tab-${el.id}`}
              />
            ))}
          </Tabs>
        </Box>
        <Box
          aria-label="sticky table"
          sx={{ maxHeight: 440 }}
          className="box-flow"
        >
          {product.map((el) => (
            <Box
              sx={{ marginTop: "5px" }}
              key={el.id}
              role="tabpanel"
              hidden={value !== el.id}
              value={value}
              index={el.id}
            >
              <Box
                sx={{
                  paddingTop: 2,
                  paddingBottom: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <StyledList>
                  {categoryCard.map((item) => (
                    <Card key={item.id} el={item} />
                  ))}
                </StyledList>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
