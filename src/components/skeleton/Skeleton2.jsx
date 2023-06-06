import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
import { EditerContext } from "../../AppContext";

const Skeleton2 = () => {
  const { switching, setSwitching } = useContext(EditerContext);
  const handleSkeletonClick = () => {
    // Handle the click event here
    setSwitching(false);
    console.log("Switched to false");
  };
  return (
    <>
      <div>
        <Stack
          spacing={1}
          sx={{
            width: "50%",
            margin: "0 auto",
            boxShadow: 3,
            marginY: 4,
            marginX:3,
            width: "fit-content",
            backgroundColor: "white",
          }}
        >
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "flex-start",
            }}
            onClick={handleSkeletonClick}
          >
            {/* Profile picture */}
            <div style={{ marginRight: "10px", marginLeft: "10px" }}>
              <Skeleton
                variant="circle"
                width={100}
                height={100}
                style={{ backgroundColor: "gray" }}
              />
            </div>

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
                  width={210}
                  height={20}
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
                  width={120}
                  height={20}
                  style={{ marginRight: "10px", marginBottom: "5px" }}
                />
                <Skeleton
                  variant="rectangular"
                  width={110}
                  height={20}
                  style={{ marginBottom: "5px" }}
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
                  width={180}
                  height={5}
                  style={{
                    marginRight: "10px",
                    backgroundColor: "black",
                    marginBottom: "5px",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Skeleton
                    variant="square"
                    width={20}
                    height={20}
                    style={{
                      marginRight: "5px",
                      backgroundColor: "black",
                      marginBottom: "5px",
                    }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width={80}
                    height={20}
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
                    width={20}
                    height={20}
                    style={{
                      marginRight: "5px",
                      backgroundColor: "black",
                      marginBottom: "5px",
                    }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width={80}
                    height={20}
                    style={{ marginBottom: "5px" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Skeleton
                    variant="square"
                    width={20}
                    height={20}
                    style={{
                      marginRight: "5px",
                      backgroundColor: "black",
                      marginBottom: "5px",
                    }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width={80}
                    height={20}
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
                    width={20}
                    height={20}
                    style={{
                      marginRight: "5px",
                      backgroundColor: "black",
                      marginBottom: "5px",
                    }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width={80}
                    height={20}
                    style={{ marginBottom: "5px" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
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
      </div>
    </>
  );
};

export default Skeleton2;
