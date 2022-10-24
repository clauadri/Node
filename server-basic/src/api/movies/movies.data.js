const harryPotter = {
    movies: [
      { name: "Harry Potter and the Philosopher's Stone", year: 2001 },
      { name: "Harry Potter and the Chamber of Secrets", year: 2002 },
      { name: "Harry Potter and the Prisoner of Azkaban ", year: 2004 },
      { name: "Harry Potter and the Goblet of Fire", year: 2005 },
      { name: "Harry Potter and the Order of the Phoenix", year: 2007 },
      { name: "Harry Potter and the Half-Blood Prince", year: 2009 },
      { name: "Harry Potter and the Deathly Hallows: Part 1", year: 2010 },
      { name: "Harry Potter and the Deathly Hallows: Part 2", year: 2011 },
    ],
  };
  
  const marvelSagas = {
    "the infinity saga": [
      { name: "Phase One", url: "/sagas/marvel/phase-one" },
      { name: "Phase Two", url: "/sagas/marvel/phase-two" },
      { name: "Phase Three", url: "/sagas/marvel/phase-three" },
    ],
    "the multiverse saga": [
      { name: "Phase Four", url: "/sagas/marvel/phase-four" },
      { name: "Phase Five", url: "/sagas/marvel/phase-five" },
      { name: "Phase Six", url: "/sagas/marvel/phase-six" },
    ],
  };
  
  const lordOfTheRings = {
    movies: [
      { name: "The Fellowship of the Ring", year: 2001 },
      { name: "The Two Towers", year: 2002 },
      { name: "The Return of the King", year: 2003 },
    ],
    "movies related": [
      { name: "The Hobbit: An Unexpected Journey", year: 2012 },
      { name: "The Hobbit: The Desolation of Smaug", year: 2013 },
      { name: "The Hobbit: The Battle of the Five Armies", year: 2014 },
    ],
    "tv series": [{ name: "The Lord of the Rings: The Rings of Power", year: 2022 }],
  };
  
  const sagas = [
    { name: "Harry Potter", data: harryPotter },
    { name: "Marvel", data: marvelSagas },
    { name: "The Lord of The Rings", data: lordOfTheRings },
  ];
  // exportamos todos los datos para usarlos en otro sitio
  module.exports = {
    sagas,
    harryPotter,
    marvelSagas,
    lordOfTheRings,
  };
  