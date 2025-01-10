import { Grid2 } from "@mui/material";
export function Grid1() {
  return (
    <div>
      <Grid2 container spacing={2} size={{ sm: 12, md: 4, lg: 2 }}>
        <Grid2>
          <button>I am grid1 of size</button>
        </Grid2>
        <Grid2>
          <button>I am grid2 of size</button>
        </Grid2>
        <Grid2>
          <button>I am grid3 of size</button>
        </Grid2>
        <Grid2>
          <button>I am grid4 of size</button>
        </Grid2>
      </Grid2>
    </div>
  );
}
