import { Box, Grid, Show, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const Homepage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "220px 1fr" }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={6}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={6}>
          <GameHeading />
          <HStack spacing={4} marginBottom={1}>
            <PlatformSelector></PlatformSelector>
            <SortSelector></SortSelector>
          </HStack>
        </Box>

        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default Homepage;
