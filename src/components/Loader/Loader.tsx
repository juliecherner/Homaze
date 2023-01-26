import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const Loader = () => {
  return (
    <>
      <Box>
        <CircularProgress disableShrink size="15rem" sx={{ mt: "30%" }} />
      </Box>
    </>
  );
};

export default Loader;
