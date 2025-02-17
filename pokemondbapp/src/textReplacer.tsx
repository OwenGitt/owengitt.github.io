export const formatText = (text: string) => {
  return (
    text.charAt(0).toUpperCase() +
    text
      .slice(1)
      .replace("-area", "")
      .replace("area", "")
      // Remove region names
      .replace("kanto-", "")
      .replace("johto-", "")
      .replace("hoenn-", "")
      .replace("sinnoh-", "")
      .replace("unova-", "")
      // Replace any dashes
      .replaceAll("-", " ")
      // Capitalize important locations that appear in sentence
      .replace("pewter", "Pewter")
      .replace("viridian", "Viridian")
      .replace("pastoria", "Pastoria")
      .replace("celestic", "Celestic")
      .replace("eterna", "Eterna")
      .replace("solaceon", "Solaceon")
      .replace("mauville", "Mauville")
      .replace("new bark", "New Bark")
      .replace("floaroma", "Floaroma")
      .replace("hearthome", "Hearthome")
      .replace("jubilife", "Jubilife")
      .replace("verity", "Verity")
      .replace("cinnabar lab", "- Cinnabar Lab")
      .replace("cave", "Cave")
      .replace("island", "Island")
      .replace("chasm", "Chasm")
      .replace("town", "Town")
      .replace("city", "City")
      .replace("tower", "Tower")
      .replace("tomb", "Tomb")
      .replace("forest", "Forest")
      .replace("path", "Path")
      .replace("sewers", "Sewers")
      .replace("canyon", "Canyon")
      .replace("alph", "Alph")
      // Capitalize Mt location
      .replace("moon", "Moon")
      .replace("coronet", "Coronet")
      .replace("mortar", "Mortar")
      .replace("pyre", "Pyre")
      // Format safari zone areas
      .replace("great marsh", "Great Marsh")
      .replace("Great Marsh 1", "Great Marsh Zone 1")
      .replace("Great Marsh 2", "Great Marsh Zone 2")
      .replace("Great Marsh 3", "Great Marsh Zone 3")
      .replace("Great Marsh 4", "Great Marsh Zone 4")
      .replace("Great Marsh 5", "Great Marsh Zone 5")
      .replace("Great Marsh 6", "Great Marsh Zone 6")
      .replace("safari zone", "Safari Zone")
      .replace("Safari Zone 1", "Safari Zone Area 1")
      .replace("Safari Zone 2", "Safari Zone Area 2")
      .replace("Safari Zone 3", "Safari Zone Area 3")
      .replace("Safari Zone 4", "Safari Zone Area 4")
      .replace("Safari Zone middle", "Safari Zone Middle")
      .replace("zone marshland", " - Marshland")
      .replace("zone meadow", " - Meadow")
      .replace("zone forest", " - Forest")
      .replace("zone peak", " - Peak")
      .replace("zone wasteland", " - Wasteland")
      .replace("zone wetland", " - Wetland")
      .replace("zone rocky beach", " - Rocky Beach")
      .replace("zone swamp", " - Swamp")
      .replace("zone savannah", " - Savannah")
      .replace("zone mountain", " - Mountain")
      .replace("zone desert", " - Desert")
      // Sub areas
      .replace("outside", "- Outside")
      .replace("summit", "- Summit")
      .replace("underwater", "- Underwater")
      .replace("mountainside", "- Mountainside")
      .replace("b1f", "- B1F")
      .replace("b2f", "- B2F")
      .replace("b3f", "- B3F")
      .replace("b4f", "- B4F")
      .replace("b5f", "- B5F")
      .replace("b6f", "- B6F")
      .replace("b7f", "- B7F")
      .replace("b8f", "- B8F")
      .replace("b9f", "- B9F")
      .replace("b10f", "- B10F")
      .replace("b11f", "- B11F")
      .replace("1f", " 1F")
      .replace("2f", "- 2F")
      .replace("3f", "- 3F")
      .replace("4f", "- 4F")
      .replace("5f", "- 5F")
      .replace("6f", "- 6F")
      .replace("7f", "- 7F")
      .replace("8f", "- 8F")
      .replace("9f", "- 9F")
      .replace("10f", "- 10F")
      .replace("11f", "- 11F")
      // Remove bike names
      .replace("acro bike", "")
      .replace("mach bike", "")
      // Capitalize directions
      .replace(" ne", " NE")
      .replace(" nw", " NW")
      .replace(" se", " SE")
      .replace(" sw", " SW")
      .replace(" n", " N")
      .replace(" s", " S")
      .replace(" e", " E")
      .replace(" w", " W")
      // Misc
      .replace(" before galactic intervention", "")
      .replace(" after galactic intervention", "")
      .replace("unknown all rattata", "")
      .replace("Ss anne", "SS Anne")
  );
};

export const formatPokemonNames = (name: string) => {
  return (
    name.charAt(0).toUpperCase() +
    name
      .slice(1)
      // Format known Pokémon name issues
      .replace("r-m", "r. M")
      .replace("-jr", " jr.")
      .replace("-f", "♀")
      .replace("-m", "♂")
      .replace("-ordinary", "")
      .replace("-incarnate", "")
      .replace("-aria", "")
      .replace("-land", "")
      .replace("-altered", "")
      .replace("standard", "")
      .replace("red-striped", "")
      .replace("-", " ")
  );
};

export const formatEvolutionReqs = (text: string) => {
  return (
    text
      // Format known evolution text issues
      .replace("Stat 1", "Atk > Def")
      .replace("Stat -1", "Atk < Def")
      .replace("Stat 0", "Atk = Def")
      .replace("Loc. Eterna-forest", "Lvl up near Moss Rock")
      .replace("Level up at eterna-forest", "Lvl up near Moss Rock")
      .replace("Level up at sinnoh-route-217", "Lvl up near Ice Rock")
      .replace(
        "Level up at mt-coronet",
        "Lvl up in areas with a special magnetic field",
      )
      .replace("Gender 1", "Female")
      .replace("Gender 2", "Male")
      // Format item names
      .replace("oval-stone", "Oval Stone")
      .replace("razor-claw", "Razor Claw")
      .replace("razor-fang", "Razor Fang")
      // Format move names
      .replace("mimic", "Mimic")
      .replace("ancient-power", "Ancient Power")
      // Replace any left-over dashes
      .replace("-", " ")
  );
};
