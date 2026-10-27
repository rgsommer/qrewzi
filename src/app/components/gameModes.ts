// The game's modes as the app names them (shared/gameModes.js in the
// Curriculate repo): the names, emoji and one-liners match what the live
// page, the projector badge and the players' screens show, so a class that
// reads them here meets the same words in the game.

export type GameMode = {
  id: "troopers" | "raiders" | "duels";
  name: string;
  emoji: string;
  blurb: string;
};

export const GAME_MODES: GameMode[] = [
  { id: "troopers", name: "Troopers", emoji: "🪖", blurb: "Teams go station to station, through the set in order." },
  { id: "raiders", name: "Raiders", emoji: "🏴‍☠️", blurb: "Teams raid the mystery boxes, picking their next one." },
  { id: "duels", name: "Duels", emoji: "🥊", blurb: "Every player on their own — paired 1-on-1, then with someone new after every duel; first right answer wins." },
];

export const BUILDER = {
  name: "Builder",
  emoji: "🏗️",
  blurb: "An add-on to Troopers and Raiders: each team builds a castle, a rocket, Noah's Ark… a layer for every task, in gold, stone, brick, wood or straw by how well it went.",
};
