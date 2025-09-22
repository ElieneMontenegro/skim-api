/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex("games").insert([
    {
      title: "The Witcher 3",
      description: "RPG de mundo aberto",
      price: 99.9,
      release_date: "2015-05-19",
    },
    {
      title: "Stardew Valley",
      description: "Simulador de fazenda",
      price: 24.9,
      release_date: "2016-02-26",
    },
    {
      title: "Hades",
      description: "Roguelike de ação",
      price: 74.9,
      release_date: "2020-09-17",
    },
    {
      title: "Cyberpunk 2077",
      description: "RPG futurista de mundo aberto",
      price: 199.9,
      release_date: "2020-12-10",
    },
    {
      title: "Hollow Knight",
      description: "Metroidvania com atmosfera sombria",
      price: 46.99,
      release_date: "2017-02-24",
    },
    {
      title: "Celeste",
      description: "Plataforma desafiador com narrativa emocional",
      price: 39.9,
      release_date: "2018-01-25",
    },
    {
      title: "Dark Souls III",
      description: "RPG de ação desafiador",
      price: 159.9,
      release_date: "2016-04-12",
    },
    {
      title: "Elden Ring",
      description: "RPG de mundo aberto",
      price: 249.9,
      release_date: "2022-02-25",
    },
    {
      title: "Red Dead Redemption 2",
      description: "Aventura no Velho Oeste",
      price: 299.9,
      release_date: "2018-10-26",
    },
    {
      title: "Minecraft",
      description: "Jogo de construção e sobrevivência",
      price: 99.9,
      release_date: "2011-11-18",
    },
    {
      title: "Terraria",
      description: "Aventura em 2D com exploração e combate",
      price: 19.9,
      release_date: "2011-05-16",
    },
    {
      title: "DOOM Eternal",
      description: "FPS frenético contra demônios",
      price: 199.9,
      release_date: "2020-03-20",
    },
    {
      title: "God of War",
      description: "Ação e aventura na mitologia nórdica",
      price: 249.9,
      release_date: "2022-01-14",
    },
    {
      title: "Sekiro: Shadows Die Twice",
      description: "Ação e furtividade no Japão feudal",
      price: 239.9,
      release_date: "2019-03-22",
    },
    {
      title: "Assassins Creed Valhalla",
      description: "RPG de ação na era viking",
      price: 249.9,
      release_date: "2020-11-10",
    },
    {
      title: "Baldurs Gate 3",
      description: "RPG baseado em D&D",
      price: 299.9,
      release_date: "2023-08-03",
    },
    {
      title: "Overwatch 2",
      description: "FPS competitivo em equipes",
      price: 0.0,
      release_date: "2022-10-04",
    },
    {
      title: "Apex Legends",
      description: "Battle royale de heróis",
      price: 0.0,
      release_date: "2019-02-04",
    },
    {
      title: "Fortnite",
      description: "Battle royale com construção",
      price: 0.0,
      release_date: "2017-07-21",
    },
    {
      title: "League of Legends",
      description: "MOBA competitivo",
      price: 0.0,
      release_date: "2009-10-27",
    },
    {
      title: "Valorant",
      description: "FPS tático 5v5",
      price: 0.0,
      release_date: "2020-06-02",
    },
    {
      title: "Counter-Strike 2",
      description: "FPS competitivo clássico",
      price: 0.0,
      release_date: "2023-09-27",
    },
    {
      title: "GTA V",
      description: "Ação e mundo aberto em Los Santos",
      price: 149.9,
      release_date: "2013-09-17",
    },
    {
      title: "Portal 2",
      description: "Puzzle com física e humor",
      price: 39.9,
      release_date: "2011-04-19",
    },
    {
      title: "Left 4 Dead 2",
      description: "Cooperação contra hordas de zumbis",
      price: 29.9,
      release_date: "2009-11-17",
    },
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex("games").del(); //pra o rollback
};
