import { program } from "commander";
import gameState from "../src/state.js";
import { showMainMenu } from "../src/gameLogic.js";

program
  .name("rockpaperscissors")
  .description("Play Rock-Paper-Scissors in your terminal");

program.action(async () => {
  await showMainMenu(gameState);
});

program.parseAsync(process.argv);