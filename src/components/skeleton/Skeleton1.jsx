import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
import { EditerContext } from "../../AppContext";

const Skeleton1 = () => {
  const {switching , setSwitching} = useContext(EditerContext)
  const handleSkeletonClick = () => {
    // Handle the click event here
    setSwitching(true)
    console.log("Switched to True");
  };
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          boxShadow: 3,
          backgroundColor: "white",
        }}
      >
        <br />
        <div
          style={{
            display: "flex",

            alignItems: "center",
          }}
          onClick={handleSkeletonClick}
        >
          {/* Profile picture */}
          <div style={{ marginLeft: "2rem" }}>
            <Skeleton
              variant="circular"
              width={"12rem"}
              height={"12rem"}
              style={{ backgroundColor: "gray" }}
            />
          </div>
          {/* Vertical line */}
          <div
            style={{
              borderLeft: "1px solid black",
              height: "150px",
              margin: "0rem 2rem",
            }}
          ></div>

          {/* Content */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Skeleton
                variant="rectangular"
                width={"30%"}
                height={"2rem"}
                style={{ backgroundColor: "gray", marginBottom: "5px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Skeleton
                variant="square"
                width={"70%"}
                height={"2rem"}
                style={{ marginBottom: "5px" }}
              />
            </div>
            {/* <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Skeleton
                variant="square"
                width={"40%"}
                height={"1.5rem"}
                style={{
                  marginRight: "5px",
                  marginBottom: "5px",
                }}
              />
              <Skeleton
                variant="rectangular"
                width="60%"
                height={"1.5rem"}
                style={{ marginRight: "20px", marginBottom: "5px" }}
              />
            </div> */}

            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Skeleton
                variant="square"
                width={"40%"}
                height={"1.5rem"}
                style={{
                  marginRight: "5px",
                  marginBottom: "5px",
                }}
              />
              <Skeleton
                variant="rectangular"
                width="60%"
                height={"1.5rem"}
                style={{ marginRight: "20px", marginBottom: "5px" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Skeleton
                variant="square"
                width={"40%"}
                height={"1.5rem"}
                style={{
                  marginRight: "5px",
                  marginBottom: "5px",
                }}
              />
              <Skeleton
                variant="rectangular"
                width="60%"
                height={"1.5rem"}
                style={{ marginRight: "20px", marginBottom: "5px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Skeleton
                variant="square"
                width={"40%"}
                height={"1.5rem"}
                style={{
                  marginRight: "5px",
                  marginBottom: "5px",
                }}
              />
              <Skeleton
                variant="rectangular"
                width="60%"
                height={"1.5rem"}
                style={{ marginRight: "20px", marginBottom: "5px" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                marginTop: "1.5rem",
              }}
            >
              <Skeleton
                variant="rectangular"
                width={20}
                height={20}
                style={{ backgroundColor: "blue", marginRight: "10px" }}
              />
              <Skeleton
                variant="rectangular"
                width={20}
                height={20}
                style={{ backgroundColor: "darkblue", marginRight: "10px" }}
              />
              <Skeleton
                variant="rectangular"
                width={20}
                height={20}
                style={{ backgroundColor: "lightblue", marginRight: "10px" }}
              />
              <Skeleton
                variant="rectangular"
                width={20}
                height={20}
                style={{ backgroundColor: "red" }}
              />
            </div>
          </div>
        </div>
        <br />
      </Stack>
    </>
  );
};

export default Skeleton1;
