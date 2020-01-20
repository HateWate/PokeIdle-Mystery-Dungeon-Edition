const ROUTES = {
  Kanto137: {
    starter: {
      name: 'Pallet Town'
    , pokes: ['Bulbasaur', 'Charmander', 'Squirtle', 'Pikachu', 'Eevee']
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    }
   , route: {
      name: 'Route 1'
    , pokes: ['Pidgey', 'Rattata', 'Pikachu', 'Oddish', 'Bellsprout']
    , minLevel: 2
    , maxLevel: 7
    , unlocked: true
    }
   , kantocustom: {
      name: 'Trainer House'
    , pokes: ['Meganium', 'Typhlosion', 'Feraligatr']
    , minLevel: 50
    , maxLevel: 50
    , unlocked: true
    }
   , route1: {
      name: 'Route 22'
    , pokes: ['Pidgey', 'Rattata', 'Spearow', 'Nidoran f', 'Nidoran m', 'Mankey']
    , minLevel: 2
    , maxLevel: 6
    , unlocked: true
    }
   , route2: {
      name: 'Route 2'
    , pokes: ['Caterpie', 'Weedle', 'Pidgey', 'Rattata', 'Nidoran f', 'Nidoran m', 'Oddish', 'Bellsprout']
    , minLevel: 2
    , maxLevel: 8
    , unlocked: true
    }
   , special: {
      name: 'Viridian Forest'
    , pokes: ['Bulbasaur', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pikachu', 'Oddish', 'Bellsprout']
    , minLevel: 3
    , maxLevel: 9
    , unlocked: true
    }
   , route3: {
      name: 'Route 3'
    , pokes: ['Charmander', 'Pidgey', 'Rattata', 'Spearow', 'Ekans', 'Sandshrew', 'Nidoran f', 'Nidoran m', 'Jigglypuff', 'Mankey']
    , minLevel: 5
    , maxLevel: 12
    , unlocked: true
    }
   , special1: {
      name: 'Mt. Moon'
    , pokes: ['Sandshrew', 'Clefairy', 'Clefable', 'Zubat', 'Paras', 'Geodude', 'Onix', 'Chansey']
    , minLevel: 6
    , maxLevel: 13
    , unlocked: true
    }
   , route4: {
      name: 'Route 4'
    , pokes: ['Charmander', 'Rattata', 'Spearow', 'Ekans', 'Sandshrew', 'Psyduck', 'Mankey']
    , minLevel: 6
    , maxLevel: 12
    , unlocked: true
    }
   , route5: {
      name: 'Routes 24-25'
    , pokes: ['Squirtle', 'Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Pidgeotto', 'Oddish', 'Venonat', 'Meowth', 'Psyduck', 'Abra', 'Bellsprout']
    , minLevel: 7
    , maxLevel: 17
    , unlocked: true
    }
   , route6: {
      name: 'Route 5'
    , pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Vulpix', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Growlithe', 'Abra', 'Bellsprout', 'Chansey']
    , minLevel: 10
    , maxLevel: 17
    , unlocked: true
    }
   , route7: {
      name: 'Route 6'
    , pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Vulpix', 'Jigglypuff', 'Oddish', 'Meowth', 'Psyduck', 'Mankey', 'Growlithe', 'Abra', 'Bellsprout', 'Chansey']
    , minLevel: 10
    , maxLevel: 17
    , unlocked: true
    }
   , route8: {
      name: 'Route 11'
    , pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Raticate', 'Spearow', 'Ekans', 'Sandshrew', 'Drowzee', 'Mr. Mime', 'Chansey']
    , minLevel: 9
    , maxLevel: 20
    , unlocked: true
    }
   , special2: {
      name: 'Diglett Cave'
    , pokes: ['Zubat', 'Diglett', 'Dugtrio', 'Chansey']
    , minLevel: 15
    , maxLevel: 31
    , unlocked: true
    }
   , route9: {
      name: 'Route 9'
    , pokes: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Sandshrew', 'Nidoran f', 'Nidorina', 'Nidoran m', 'Nidorino', 'Chansey']
    , minLevel: 11
    , maxLevel: 22
    , unlocked: true
    }
   , route10: {
      name: 'Route 10'
    , pokes: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Sandshrew', 'Nidoran f', 'Nidorina', 'Nidoran m', 'Nidorino', 'Machop', 'Magnemite', 'Krabby', 'Voltorb', 'Chansey', 'Dratini']
    , minLevel: 11
    , maxLevel: 23
    , unlocked: true
    }
   , special3: {
      name: 'Rock Tunnel'
    , pokes: ['Charmander', 'Zubat', 'Golbat', 'Mankey', 'Machop', 'Geodude', 'Graveler', 'Onix', 'Cubone', 'Rhyhorn', 'Kangaskhan']
    , minLevel: 13
    , maxLevel: 23
    , unlocked: true
    }
   , special4: {
      name: 'Pokemon Tower'
    , pokes: ['Zubat', 'Gastly', 'Haunter', 'Cubone', 'Chansey']
    , minLevel: 13
    , maxLevel: 32
    , unlocked: true
    }
   , route11: {
      name: 'Route 8'
    , pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Raticate', 'Ekans', 'Sandshrew', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Meowth', 'Mankey', 'Growlithe', 'Arcanine', 'Abra', 'Kadabra', 'Chansey']
    , minLevel: 15
    , maxLevel: 27
    , unlocked: true
    }
   , route12: {
      name: 'Route 7'
    , pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Raticate', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Growlithe', 'Arcanine', 'Abra', 'Kadabra', 'Bellsprout', 'Porygon']
    , minLevel: 15
    , maxLevel: 27
    , unlocked: true
    }
   , special5: {
      name: 'Rocket Game Corner'
    , pokes: ['Pikachu', 'Nidorina', 'Nidorino', 'Clefairy', 'Clefable', 'Wigglytuff', 'Abra', 'Horsea', 'Scyther', 'Pinsir', 'Porygon', 'Dratini', 'Dragonair']
    , minLevel: 6
    , maxLevel: 30
    , unlocked: true
    }
   , route13: {
      name: 'Route 16'
    , pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Doduo', 'Dodrio', 'Chansey', 'Snorlax']
    , minLevel: 18
    , maxLevel: 36
    , unlocked: true
    }
   , route14: {
      name: 'Route 17'
    , pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Psyduck', 'Ponyta', 'Rapidash', 'Doduo', 'Dodrio', 'Eevee', 'Chansey']
    , minLevel: 20
    , maxLevel: 38
    , unlocked: true
    }
   , route15: {
      name: 'Route 18'
    , pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Doduo', 'Dodrio', 'Chansey']
    , minLevel: 20
    , maxLevel: 38
    , unlocked: true
    }
   , route16: {
      name: 'Route 12'
    , pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Farfetch/d', 'Krabby', 'Kingler', 'Chansey', 'Snorlax']
    , minLevel: 22
    , maxLevel: 36
    , unlocked: true
    }
   , route17: {
      name: 'Route 13'
    , pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Farfetch/d', 'Krabby', 'Kingler', 'Chansey', 'Ditto']
    , minLevel: 22
    , maxLevel: 38
    , unlocked: true
    }
   , route18: {
      name: 'Routes 14-15'
    , pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Venomoth', 'Bellsprout', 'Weepinbell', 'Chansey', 'Scyther', 'Pinsir', 'Tauros', 'Ditto']
    , minLevel: 22
    , maxLevel: 38
    , unlocked: true
    }
   , special6: {
      name: 'Safari Zone'
    , pokes: ['Nidoran f', 'Nidorina', 'Nidoran m', 'Nidorino', 'Paras', 'Parasect', 'Venonat', 'Doduo', 'Exeggcute', 'Cubone', 'Marowak', 'Rhyhorn', 'Chansey', 'Tangela', 'Kangaskhan', 'Scyther', 'Pinsir', 'Tauros', 'Dratini', 'Dragonair']
    , minLevel: 22
    , maxLevel: 35
    , unlocked: true
    }
   , special7: {
      name: 'Power Plant'
    , pokes: ['Pikachu', 'Raichu', 'Magnemite', 'Magneton', 'Grimer', 'Muk', 'Voltorb', 'Electrode', 'Koffing', 'Weezing', 'Electabuzz', 'Chansey']
    , minLevel: 20
    , maxLevel: 42
    , unlocked: true
    }
   , route19: {
      name: 'Route 19'
    , pokes: ['Poliwag', 'Tentacool', 'Shellder', 'Goldeen', 'Staryu', 'Magikarp', 'Lapras']
    , minLevel: 23
    , maxLevel: 42
    , unlocked: true
    }
   , route20: {
      name: 'Route 20'
    , pokes: ['Poliwhirl', 'Tentacruel', 'Cloyster', 'Seaking', 'Starmie', 'Gyarados', 'Lapras']
    , minLevel: 28
    , maxLevel: 42
    , unlocked: true
    }
   , special8: {
      name: 'Seafoam Island'
    , pokes: ['Squirtle', 'Zubat', 'Golbat', 'Psyduck', 'Golduck', 'Slowpoke', 'Slowbro', 'Seel', 'Dewgong', 'Shellder', 'Krabby', 'Kingler', 'Horsea', 'Seadra', 'Staryu', 'Jynx'] 
    , minLevel: 25
    , maxLevel: 44
    , unlocked: true
    }  
   , special9: {
      name: 'Fossil Lab'
    , pokes: ['Omanyte', 'Kabuto', 'Aerodactyl'] 
    , minLevel: 30
    , maxLevel: 30
    , unlocked: true
    }  
   , special10: {
      name: 'Pokemon Mansion'
    , pokes: ['Rattata', 'Raticate', 'Vulpix', 'Growlithe', 'Ponyta', 'Grimer', 'Muk', 'Koffing', 'Weezing', 'Magmar', 'Ditto', 'Chansey'] 
    , minLevel: 28
    , maxLevel: 44
    , unlocked: true
    }  
   , route21: {
      name: 'Route 21'
    , pokes: ['Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Oddish', 'Gloom', 'Vileplume', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tangela', 'Chansey']
    , minLevel: 36
    , maxLevel: 42
    , unlocked: true
    }
   , route22: {
      name: 'Route 23'
    , pokes: ['Spearow', 'Fearow', 'Ekans', 'Arbok', 'Sandshrew', 'Sandslash', 'Nidoran f', 'Nidorina', 'Nidoqueen', 'Nidoran m', 'Nidorino', 'Nidoking', 'Mankey', 'Primeape', 'Exeggcute', 'Exeggutor', 'Ditto', 'Chansey']
    , minLevel: 36
    , maxLevel: 46
    , unlocked: true
    }
   , special11: {
      name: 'Victory Road'
    , pokes: ['Arbok', 'Sandslash', 'Zubat', 'Golbat', 'Venomoth', 'Primeape', 'Machop', 'Machoke', 'Geodude', 'Graveler', 'Onix', 'Marowak', 'Hitmonlee', 'Hitmonchan', 'Rhyhorn', 'Rhydon', 'Chansey'] 
    , minLevel: 32
    , maxLevel: 49
    , unlocked: true
    } 
   , special12: {
      name: 'Cerulean Cave'
    , pokes: ['Arbok', 'Raichu', 'Sandslash', 'Wigglytuff', 'Zubat', 'Golbat', 'Gloom', 'Parasect', 'Venomoth', 'Psyduck', 'Golduck', 'Primeape', 'Kadabra', 'Machoke', 'Weepinbell', 'Geodude', 'Graveler', 'Magneton', 'Dodrio', 'Hypno', 'Electrode', 'Marowak', 'Lickitung', 'Rhyhorn', 'Rhydon', 'Chansey', 'Ditto', 'Snorlax', 'Wobbuffet'] 
    , minLevel: 45
    , maxLevel: 60
    , unlocked: true
    }  
   , kantocustom1: {
      name: 'Treasure Beach'
    , pokes: ['Spearow', 'Fearow', 'Meowth', 'Persian', 'Psyduck', 'Slowpoke', 'Tangela']
    , minLevel: 31
    , maxLevel: 40
    , unlocked: true
    }
   , kantocustom2: {
      name: 'Kindle Road'
    , pokes: ['Spearow', 'Fearow', 'Meowth', 'Persian', 'Psyduck', 'Geodude', 'Ponyta', 'Rapidash', 'Slowpoke']
    , minLevel: 30
    , maxLevel: 40
    , unlocked: true
    }
   , kantocustom3: {
      name: 'Mt. Ember'
    , pokes: ['Spearow', 'Fearow', 'Machop', 'Machoke', 'Geodude', 'Graveler', 'Ponyta', 'Rapidash', 'Magmar', 'Slugma', 'Magcargo']
    , minLevel: 18
    , maxLevel: 44
    , unlocked: true
    }
   , kantocustom4: {
      name: 'Cape Brink'
    , pokes: ['Spearow', 'Fearow', 'Oddish', 'Gloom', 'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Bellsprout', 'Weepinbell', 'Slowpoke', 'Slowbro']
    , minLevel: 30
    , maxLevel: 40
    , unlocked: true
    }
   , kantocustom5: {
      name: 'Three Isle Port'
    , pokes: ['Dunsparce']
    , minLevel: 5
    , maxLevel: 35
    , unlocked: true
    }
   , kantocustom6: {
      name: 'Bond Bridge'
    , pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Meowth', 'Persian', 'Psyduck', 'Bellsprout', 'Weepinbell', 'Slowpoke']
    , minLevel: 29
    , maxLevel: 40
    , unlocked: true
    }
   , kantocustom7: {
      name: 'Berry Forest'
    , pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Venomoth', 'Psyduck', 'Bellsprout', 'Weepinbell', 'Slowpoke', 'Drowzee', 'Hypno', 'Exeggcute']
    , minLevel: 30
    , maxLevel: 40
    , unlocked: true
    }
   , kantocustom8: {
      name: 'Icefall Cave'
    , pokes: ['Zubat', 'Golbat', 'Psyduck', 'Slowpoke', 'Seel', 'Dewgong', 'Lapras', 'Marill', 'Wooper', 'Sneasel', 'Swinub', 'Delibird']
    , minLevel: 23
    , maxLevel: 53
    , unlocked: true
    }
   , kantocustom9: {
      name: 'Five Isle Meadow'
    , pokes: ['Pidgey', 'Pidgeotto', 'Psyduck', 'Meowth', 'Persian', 'Slowpoke', 'Sentret', 'Hoppip', 'Qwilfish', 'Remoraid']
    , minLevel: 41
    , maxLevel: 50
    , unlocked: true
    }
   , kantocustom10: {
      name: 'Memorial Pillar'
    , pokes: ['Sentret', 'Hoppip', 'Qwilfish', 'Remoraid']
    , minLevel: 6
    , maxLevel: 16
    , unlocked: true
    }
   , kantocustom11: {
      name: 'Water Labyrinth'
    , pokes: ['Tentacool', 'Tentacruel', 'Togepi', 'Hoppip', 'Qwilfish', 'Remoraid']
    , minLevel: 5
    , maxLevel: 40
    , unlocked: true
    }
   , kantocustom12: {
      name: 'Resort Gorgeous'
    , pokes: ['Tentacool', 'Tentacruel', 'Hoppip', 'Qwilfish', 'Remoraid', 'Mantine']
    , minLevel: 5
    , maxLevel: 40
    , unlocked: true
    }
   , kantocustom13: {
      name: 'Lost Cave'
    , pokes: ['Zubat', 'Golbat', 'Gastly', 'Haunter', 'Murkrow', 'Misdreavus']
    , minLevel: 22
    , maxLevel: 52
    , unlocked: true
    }
   , kantocustom14: {
      name: 'Water Path'
    , pokes: ['Spearow', 'Fearow', 'Oddish', 'Gloom', 'Meowth', 'Persian', 'Psyduck', 'Bellsprout', 'Weepinbell', 'Slowpoke', 'Sentret']
    , minLevel: 40
    , maxLevel: 50
    , unlocked: true
    }
   , kantocustom15: {
      name: 'Ruin Valley'
    , pokes: ['Spearow', 'Fearow', 'Meowth', 'Persian', 'Psyduck', 'Slowpoke', 'Natu', 'Marill', 'Yanma', 'Wooper', 'Wobbuffet']
    , minLevel: 15
    , maxLevel: 52
    , unlocked: true
    }
   , kantocustom16: {
      name: 'Pattern Bush'
    , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Ledyba', 'Spinarak', 'Heracross']
    , minLevel: 6
    , maxLevel: 14
    , unlocked: true
    }
   , kantocustom17: {
      name: 'Altering Cave'
    , pokes: ['Mareep', 'Aipom', 'Pineco', 'Shuckle', 'Teddiursa', 'Houndour', 'Stantler', 'Smeargle']
    , minLevel: 3
    , maxLevel: 28
    , unlocked: true
    }
   , kantocustom18: {
      name: 'Canyon Entrance'
    , pokes: ['Spearow', 'Fearow', 'Meowth', 'Persian', 'Psyduck', 'Slowpoke', 'Sentret', 'Phanpy']
    , minLevel: 41
    , maxLevel: 50
    , unlocked: true
    }
   , kantocustom19: {
      name: 'Sevault Canyon'
    , pokes: ['Fearow', 'Meowth', 'Persian', 'Geodude', 'Onix', 'Cubone', 'Marowak', 'Skarmory', 'Phanpy', 'Larvitar']
    , minLevel: 15
    , maxLevel: 54
    , unlocked: true
    }
   , kantocustom20: {
      name: 'Tanoby Chambers'
    , pokes: ['Unown']
    , minLevel: 25
    , maxLevel: 25
    , unlocked: true
    }
   , special13: {
      name: 'Ice Island'
    , pokes: ['Articuno'] 
    , minLevel: 50
    , maxLevel: 50
    , unlocked: true
    }  
   , special14: {
      name: 'Lightning Island'
    , pokes: ['Zapdos'] 
    , minLevel: 50
    , maxLevel: 50
    , unlocked: true
    }  
   , special15: {
      name: 'Fire Island'
    , pokes: ['Moltres'] 
    , minLevel: 50
    , maxLevel: 50
    , unlocked: true
    }  
   , special16: {
      name: 'New Island'
    , pokes: ['Mewtwo'] 
    , minLevel: 70
    , maxLevel: 70
    , unlocked: true
    }  
   , special17: {
      name: 'Faraway Island'
    , pokes: ['Mew'] 
    , minLevel: 30
    , maxLevel: 30
    , unlocked: true
    }  
   , water: {
      name: 'Old Rod'
    , pokes: ['Magikarp'] 
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    }  
   , water1: {
      name: 'Good Rod'
    , pokes: ['Psyduck', 'Poliwag', 'Goldeen', 'Tentacool'] 
    , minLevel: 20
    , maxLevel: 25
    , unlocked: true
    }  
   , water2: {
      name: 'Super Rod'
    , pokes: ['Shellder', 'Krabby', 'Horsea', 'Staryu'] 
    , minLevel: 35
    , maxLevel: 40
    , unlocked: true
    }  
  },
  Johto24: {
    starter2: {
      name: 'New Bark Town'
    , pokes: ['Chikorita', 'Cyndaquil', 'Totodile'] 
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    } 
	, route23: {
      name: 'Route 29'
    , pokes: ['Pidgey', 'Rattata', 'Sentret', 'Hoothoot', 'Hoppip'] 
    , minLevel: 2
    , maxLevel: 4
    , unlocked: true
    } 
	, route24: {
      name: 'Route 46'
    , pokes: ['Rattata', 'Spearow', 'Jigglypuff', 'Geodude', 'Phanpy'] 
    , minLevel: 2
    , maxLevel: 5
    , unlocked: true
    } 
	, route25: {
      name: 'Route 30'
    , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Rattata', 'Zubat', 'Poliwag', 'Hoothoot', 'Ledyba', 'Spinarak', 'Hoppip'] 
    , minLevel: 2
    , maxLevel: 5
    , unlocked: true
    } 
	, route26: {
      name: 'Route 31'
    , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Rattata', 'Zubat', 'Poliwag', 'Bellsprout', 'Gastly', 'Hoothoot', 'Ledyba', 'Spinarak', 'Hoppip'] 
    , minLevel: 3
    , maxLevel: 6
    , unlocked: true
    } 
	, special18: {
      name: 'Dark Cave'
    , pokes: ['Zubat', 'Golbat', 'Geodude', 'Graveler', 'Wobbuffet', 'Dunsparce', 'Shuckle', 'Teddiursa', 'Ursaring'] 
    , minLevel: 2
    , maxLevel: 30
    , unlocked: true
    } 
	, special19: {
      name: 'Sprout Tower'
    , pokes: ['Rattata', 'Gastly'] 
    , minLevel: 3
    , maxLevel: 6
    , unlocked: true
    } 
	, route28: {
      name: 'Route 32'
    , pokes: ['Mareep', 'Hoppip', 'Wooper', 'Hoothoot'] 
    , minLevel: 4
    , maxLevel: 7
    , unlocked: true
    } 
	, special19: {
      name: 'Ruin of Alph'
    , pokes: ['Natu', 'Smeargle'] 
    , minLevel: 18
    , maxLevel: 24
    , unlocked: true
    } 
	, special20: {
      name: 'Inside the Ruins'
    , pokes: ['Unown'] 
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    } 
	, special21: {
      name: 'Union Cave'
    , pokes: ['Zubat', 'Geodude', 'Onix', 'Rattata', 'Golbat', 'Raticate', 'Lapras'] 
    , minLevel: 6
    , maxLevel: 23
    , unlocked: true
    } 
	, route29: {
      name: 'Route 33'
    , pokes: ['Rattata', 'Spearow', 'Ekans', 'Geodude', 'Zubat'] 
    , minLevel: 6
    , maxLevel: 7
    , unlocked: true
    } 
	, special22: {
      name: 'Slowpoke Well'
    , pokes: ['Zubat', 'Slowpoke', 'Slowbro', 'Golbat', 'Slowking'] 
    , minLevel: 5
    , maxLevel: 24
    , unlocked: true
    }
	, special23: {
      name: 'Ilex Forest'
    , pokes: ['Caterpie', 'Weedle', 'Metapod', 'Kakuna', 'Paras', 'Pidgey', 'Venonat'] 
    , minLevel: 5
    , maxLevel: 7
    , unlocked: true
    }
	, route30: {
      name: 'Route 34'
    , pokes: ['Snubbull', 'Murkrow', 'Houndour'] 
    , minLevel: 10
    , maxLevel: 10
    , unlocked: true
    }
	, special24: {
      name: 'Daycare House'
    , pokes: ['Pichu', 'Cleffa', 'Igglybuff', 'Tyrogue', 'Smoochum', 'Elekid', 'Magby', 'Togepi'] 
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    }
	  , route31: {
      name: 'Route 35'
    , pokes: ['Yanma', 'Noctowl'] 
    , minLevel: 20
    , maxLevel: 20
    , unlocked: true
    }
	, special26: {
      name: 'National Park'
    , pokes: ['Sunkern', 'Ledyba', 'Spinarak', 'Hoothoot'] 
    , minLevel: 10
    , maxLevel: 15
    , unlocked: true
    }
	, route32: {
      name: 'Route 36'
    , pokes: ['Stantler', 'Sudowoodo', 'Ledyba', 'Spinarak', 'Hoothoot'] 
    , minLevel: 13
    , maxLevel: 20
    , unlocked: true
    }
	, route33: {
      name: 'Route 37'
    , pokes: ['Stantler', 'Spinarak', 'Ledyba', 'Hoothoot', 'Ledian', 'Ariados'] 
    , minLevel: 13
    , maxLevel: 16
    , unlocked: true
    }
	, special27: {
      name: 'Burned Tower'
    , pokes: ['Rattata', 'Raticate', 'Zubat', 'Koffing', 'Weezing', 'Magmar'] 
    , minLevel: 12
    , maxLevel: 16
    , unlocked: true
    }
	, special28: {
      name: 'Tin Tower'
    , pokes: ['Rattata', 'Gastly'] 
    , minLevel: 20
    , maxLevel: 24
    , unlocked: true
    }
	, route34: {
      name: 'Route 38'
    , pokes: ['Snubbull', 'Miltank', 'Noctowl'] 
    , minLevel: 13
    , maxLevel: 16
    , unlocked: true
    }
	, route35: {
      name: 'Route 39'
    , pokes: ['Miltank', 'Noctowl'] 
    , minLevel: 15
    , maxLevel: 16
    , unlocked: true
    }
	, route36: {
      name: 'Route 40'
    , pokes: ['Tentacool', 'Tentacruel'] 
    , minLevel: 15
    , maxLevel: 24
    , unlocked: true
    }
	, route37: {
      name: 'Route 41'
    , pokes: ['Mantine'] 
    , minLevel: 20
    , maxLevel: 24
    , unlocked: true
    }
	, special29: {
      name: 'Whirl Island'
    , pokes: ['Krabby', 'Zubat', 'Seel', 'Golbat'] 
    , minLevel: 22
    , maxLevel: 26
    , unlocked: true
    }
	, special30: {
      name: 'Cianwood City'
    , pokes: ['Shuckle'] 
    , minLevel: 15
    , maxLevel: 15
    , unlocked: true
    }
	, route38: {
      name: 'Route 42'
    , pokes: ['Mareep', 'Flaaffy', 'Marill'] 
    , minLevel: 13
    , maxLevel: 17
    , unlocked: true
    }
	, special31: {
      name: 'Mt.Mortar'
    , pokes: ['Zubat', 'Golbat', 'Machop', 'Machoke', 'Geodude', 'Graveler', 'Raticate'] 
    , minLevel: 15
    , maxLevel: 32
    , unlocked: true
    }
	, special32: {
      name: 'Rocket Hideout'
    , pokes: ['Electrode'] 
    , minLevel: 23
    , maxLevel: 23
    , unlocked: true
    }
	, route39: {
      name: 'Route 43'
    , pokes: ['Girafarig', 'Flaaffy', 'Mareep', 'Noctowl', 'Sentret', 'Furret'] 
    , minLevel: 15
    , maxLevel: 17
    , unlocked: true
    }
	, special33: {
      name: 'Lake of Rage'
    , pokes: ['Gyarados'] 
    , minLevel: 30
    , maxLevel: 30
    , unlocked: true
    }
	, route40: {
      name: 'Route 44'
    , pokes: ['Lickitung', 'Tangela', 'Bellsprout', 'Weepinbell', 'Poliwag', 'Poliwhirl'] 
    , minLevel: 22
    , maxLevel: 26
    , unlocked: true
    }
	, special34: {
      name: 'Ice Path'
    , pokes: ['Swinub', 'Delibird', 'Sneasel'] 
    , minLevel: 21
    , maxLevel: 24
    , unlocked: true
    }
	, special35: {
      name: 'Dragons Den'
    , pokes: ['Dratini'] 
    , minLevel: 10
    , maxLevel: 14
    , unlocked: true
    }
	, route41: {
      name: 'Route 45'
    , pokes: ['Teddiursa', 'Gligar', 'Phanpy', 'Skarmory', 'Donphan'] 
    , minLevel: 20
    , maxLevel: 27
    , unlocked: true
    }
	, route42: {
      name: 'Route 48'
    , pokes: ['Ursaring', 'Sneasel', 'Donphan'] 
    , minLevel: 40
    , maxLevel: 43
    , unlocked: true
    }
	, special36: {
      name: 'Mt.Silver'
    , pokes: ['Ursaring', 'Donphan', 'Misdreavus', 'Larvitar', 'Pupitar'] 
    , minLevel: 44
    , maxLevel: 48
    , unlocked: true
    }
	, special37: {
      name: 'Felines, Cats or Dogs ?'
    , pokes: ['Raikou', 'Entei', 'Suicune'] 
    , minLevel: 40
    , maxLevel: 40
    , unlocked: true
    }
	, special38: {
      name: 'Whirl Island B2F Inner'
    , pokes: ['Lugia'] 
    , minLevel: 60
    , maxLevel: 60
    , unlocked: true
    }
	, special39: {
      name: 'Tin Tower 10F'
    , pokes: ['Ho-Oh'] 
    , minLevel: 60
    , maxLevel: 60
    , unlocked: true
    }
	, special40: {
      name: 'Altar of Time'
    , pokes: ['Celebi'] 
    , minLevel: 30
    , maxLevel: 30
    , unlocked: true
    }
	, special41: {
      name: 'Headbutt'
    , pokes: ['Aipom', 'Pineco', 'Heracross', 'Spinarak', 'Ledyba', 'Hoothoot', 'Noctowl'] 
    , minLevel: 10
    , maxLevel: 10
    , unlocked: true
    }
	, special42: {
      name: 'Hoenn Sounds'
    , pokes: ['Zigzagoon', 'Linoone', 'Whismur', 'Makuhita', 'Plusle', 'Minun', 'Numel', 'Spoink', 'Spinda', 'Absol'] 
    , minLevel: 10
    , maxLevel: 10
    , unlocked: true
    }
	, special43: {
      name: 'Sinnoh Sounds'
    , pokes: ['Meditite', 'Bidoof', 'Shinx', 'Budew', 'Buizel', 'Chingling', 'Bronzor', 'Chatot', 'Carnivine'] 
    , minLevel: 10
    , maxLevel: 10
    , unlocked: true
    }
	, water3: {
      name: 'Old Rod'
    , pokes: ['Remoraid'] 
    , minLevel: 10
    , maxLevel: 10
    , unlocked: true
    }  
   , water4: {
      name: 'Good Rod'
    , pokes: ['Marill', 'Chinchou', 'Wooper'] 
    , minLevel: 20
    , maxLevel: 20
    , unlocked: true
    }  
   , water5: {
      name: 'Super Rod'
    , pokes: ['Corsola', 'Qwilfish', 'Lanturn', 'Octillery'] 
    , minLevel: 40
    , maxLevel: 40
    , unlocked: true
    }  
  },
  Kanto24: {
    starter: {
      name: 'Pallet Town'
    , pokes: ['Pichu']
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    }
  },
  Hoenn: {
    starter3: {
      name: 'Littleroot Town'
    , pokes: ['Treecko', 'Torchic', 'Mudkip'] 
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    } 
	, route43: {
      name: 'Route 101'
    , pokes: ['Zigzagoon', 'Wurmple', 'Poochyena'] 
    , minLevel: 2
    , maxLevel: 3
    , unlocked: true
    }
	, route44: {
      name: 'Route 103'
    , pokes: ['Zigzagoon', 'Poochyena', 'Wingull'] 
    , minLevel: 2
    , maxLevel: 4
    , unlocked: true
    }
	, route45: {
      name: 'Route 102'
    , pokes: ['Zigzagoon', 'Poochyena', 'Lotad', 'Wurmple', 'Seedot', 'Ralts', 'Surskit'] 
    , minLevel: 3
    , maxLevel: 4
    , unlocked: true
    }
	, route46: {
      name: 'Route 104'
    , pokes: ['Zigzagoon', 'Poochyena', 'Wurmple', 'Wingull', 'Taillow'] 
    , minLevel: 3
    , maxLevel: 5
    , unlocked: true
    }
	, special42: {
      name: 'Petalburg Woods'
    , pokes: ['Zigzagoon', 'Poochyena', 'Wurmple', 'Shroomish', 'Silcoon', 'Cascoon', 'Taillow', 'Slakoth'] 
    , minLevel: 5
    , maxLevel: 6
    , unlocked: true
    }
	, route47: {
      name: 'Route 116'
    , pokes: ['Zigzagoon', 'Poochyena', 'Whismur', 'Taillow', 'Nincada', 'Skitty'] 
    , minLevel: 6
    , maxLevel: 8
    , unlocked: true
    }
	, special43: {
      name: 'Rusturf Tunnel'
    , pokes: ['Whismur'] 
    , minLevel: 5
    , maxLevel: 8
    , unlocked: true
    }
	, route48: {
      name: 'Route 105'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, route49: {
      name: 'Route 106'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, special44: {
      name: 'Granite Cave'
    , pokes: ['Makuhita', 'Aron', 'Mawile', 'Sableye', 'Nosepass'] 
    , minLevel: 6
    , maxLevel: 12
    , unlocked: true
    }
	, route50: {
      name: 'Route 107'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, route51: {
      name: 'Route 108'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, route52: {
      name: 'Route 109'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, route53: {
      name: 'Route 110'
    , pokes: ['Zigzagoon', 'Poochyena', 'Electrike', 'Gulpin', 'Minun', 'Wingull', 'Plusle'] 
    , minLevel: 12
    , maxLevel: 13
    , unlocked: true
    }
	, special145: {
      name: 'New Mauville'
    , pokes: ['Magnemite', 'Magneton', 'Voltorb', 'Electrode'] 
    , minLevel: 22
    , maxLevel: 26
    , unlocked: true
    }
	, route54: {
      name: 'Route 117'
    , pokes: ['Poochyena', 'Zigzagoon', 'Roselia', 'Illumise', 'Volbeat', 'Seedot', 'Surskit'] 
    , minLevel: 13
    , maxLevel: 14
    , unlocked: true
    }
	, route55: {
      name: 'Route 111'
    , pokes: ['Trapinch', 'Baltoy', 'Cacnea'] 
    , minLevel: 19
    , maxLevel: 22
    , unlocked: true
    }
	, special45: {
      name: 'Mirage Tower'
    , pokes: ['Anorith', 'Lileep'] 
    , minLevel: 20
    , maxLevel: 20
    , unlocked: true
    }
	, route56: {
      name: 'Route 112'
    , pokes: ['Numel'] 
    , minLevel: 14
    , maxLevel: 16
    , unlocked: true
    }
	, special46: {
      name: 'Fiery Path'
    , pokes: ['Numel', 'Torkoal'] 
    , minLevel: 14
    , maxLevel: 16
    , unlocked: true
    }
	, special47: {
      name: 'Jagged Pass'
    , pokes: ['Numel', 'Spoink'] 
    , minLevel: 20
    , maxLevel: 22
    , unlocked: true
    }
	, route57: {
      name: 'Route 113'
    , pokes: ['Spinda'] 
    , minLevel: 14
    , maxLevel: 16
    , unlocked: true
    }
	, route58: {
      name: 'Route 114'
    , pokes: ['Swablu', 'Seedot', 'Zangoose', 'Nuzleaf', 'Surskit', 'Lotad', 'Seviper', 'Lombre'] 
    , minLevel: 15
    , maxLevel: 18
    , unlocked: true
    }
	, special48: {
      name: 'Meteor Falls'
    , pokes: ['Solrock', 'Lunatone', 'Bagon'] 
    , minLevel: 14
    , maxLevel: 35
    , unlocked: true
    }
	, route59: {
      name: 'Route 115'
    , pokes: ['Taillow', 'Swablu', 'Swellow', 'Wingull'] 
    , minLevel: 23
    , maxLevel: 26
    , unlocked: true
    }
	, route60: {
      name: 'Route 118'
    , pokes: ['Zigzagoon', 'Electrike', 'Wingull', 'Linoone', 'Manectric', 'Kecleon'] 
    , minLevel: 24
    , maxLevel: 27
    , unlocked: true
    }
	, route61: {
      name: 'Route 119'
    , pokes: ['Zigzagoon', 'Linoone', 'Tropius', 'Kecleon'] 
    , minLevel: 25
    , maxLevel: 27
    , unlocked: true
    }
	, special49: {
      name: 'Weather Institute'
    , pokes: ['Castform'] 
    , minLevel: 25
    , maxLevel: 25
    , unlocked: true
    }
	, route62: {
      name: 'Route 120'
    , pokes: ['Linoone', 'Mightyena', 'Zigzagoon', 'Poochyena', 'Seedot', 'Surskit', 'Absol'] 
    , minLevel: 25
    , maxLevel: 27
    , unlocked: true
    }
	, route63: {
      name: 'Route 121'
    , pokes: ['Duskull', 'Zigzagoon', 'Linoone', 'Wingull', 'Kecleon'] 
    , minLevel: 25
    , maxLevel: 28
    , unlocked: true
    }
	, special50: {
      name: 'Safari Zone (RS Edition)'
    , pokes: ['Oddish', 'Girafarig', 'Doduo', 'Natu', 'Wobbuffet', 'Pikachu', 'Gloom', 'Rhyhorn', 'Phanpy', 'Dodrio', 'Xatu', 'Heracross', 'Pinsir'] 
    , minLevel: 25
    , maxLevel: 31
    , unlocked: true
    }
	, special51: {
      name: 'Safari Zone (Emerald Edition)'
    , pokes: ['Aipom', 'Teddiursa', 'Ledyba', 'Sunkern', 'Hoothoot','Pineco', 'Houndour','Miltank', 'Mareep', 'Spinarak', 'Gligar','Snubbull', 'Stantler']
	, minLevel: 33
    , maxLevel: 40
    , unlocked: true
    }
	, route64: {
      name: 'Route 122'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, special52: {
      name: 'Mt. Pyre'
    , pokes: ['Duskull', 'Shuppet', 'Meditite', 'Chimecho', 'Wingull']
	, minLevel: 22
    , maxLevel: 30
    , unlocked: true
    }
	, special53: {
      name: 'Too much Hideouts'
    , pokes: ['Electrode']
	, minLevel: 40
    , maxLevel: 40
    , unlocked: true
    }
	, route65: {
      name: 'Route 123'
    , pokes: ['Shuppet', 'Duskull', 'Poochyena', 'Mightyena', 'Zigzagoon', 'Wingull', 'Linoone', 'Kecleon'] 
    , minLevel: 25
    , maxLevel: 28
    , unlocked: true
    }
	, route66: {
      name: 'Route 124'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, special54: {
      name: 'Mossdeep City'
    , pokes: ['Beldum']
	, minLevel: 5
    , maxLevel: 5
    , unlocked: true
    }
	, route67: {
      name: 'Route 125'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, special55: {
      name: 'Shoal Cave'
    , pokes: ['Spheal', 'Snorunt']
	, minLevel: 26
    , maxLevel: 32
    , unlocked: true
    }
	, route68: {
      name: 'Route 126'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, route69: {
      name: 'Route 127'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, route70: {
      name: 'Route 128'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, special56: {
      name: 'Victory Road'
    , pokes: ['Lairon', 'Hariyama', 'Medicham', 'Loudred', 'Makuhita', 'Whismur', 'Aron', 'Sableye', 'Mawile']
    , minLevel: 36
    , maxLevel: 42
    , unlocked: true
    }
	, route71: {
      name: 'Route 129'
    , pokes: ['Wingull', 'Pelipper', 'Wailord'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, route72: {
      name: 'Route 130'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, special57: {
      name: 'Mirage Island'
    , pokes: ['Wynaut']
	, minLevel: 5
    , maxLevel: 50
    , unlocked: true
    }
	, route73: {
      name: 'Route 131'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, special58: {
      name: 'Sky Pillar'
    , pokes: ['Mawile', 'Claydol', 'Dusclops', 'Sableye', 'Banette', 'Altaria']
    , minLevel: 34
    , maxLevel: 60
    , unlocked: true
    }
	, route74: {
      name: 'Route 132'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, route75: {
      name: 'Route 133'
    , pokes: ['Wingull', 'Pelipper'] 
    , minLevel: 10
    , maxLevel: 30
    , unlocked: true
    }
	, special59: {
      name: 'Ruins'
    , pokes: ['Regice', 'Regirock', 'Registeel']
	, minLevel: 40
    , maxLevel: 40
    , unlocked: true
    }
	, special60: {
      name: 'Southern Island'
    , pokes: ['Latios', 'Latias']
	, minLevel: 50
    , maxLevel: 50
    , unlocked: true
    }
	, special61: {
      name: 'Cave of Origin'
    , pokes: ['Kyogre', 'Groudon']
	, minLevel: 45
    , maxLevel: 45
    , unlocked: true
    }
	, special62: {
      name: 'Sky Pillar (Top)'
    , pokes: ['Rayquaza']
	, minLevel: 70
    , maxLevel: 70
    , unlocked: true
    }
	, special63: {
      name: 'Wishmaker'
    , pokes: ['Jirachi']
	, minLevel: 5
    , maxLevel: 5
    , unlocked: true
    }
	, special64: {
      name: 'THE UNIVERSE'
    , pokes: ['Deoxys']
	, minLevel: 30
    , maxLevel: 30
    , unlocked: true
    }
	, special65: {
      name: 'Underwater 7.8'
    , pokes: ['Clamperl', 'Relicanth']
	, minLevel: 20
    , maxLevel: 35
    , unlocked: true
    }
	, water6: {
      name: 'Old Rod'
    , pokes: ['Feebas', 'Azurill'] 
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    }  
   , water7: {
      name: 'Good Rod'
    , pokes: ['Luvdisc', 'Barboach', 'Corphish'] 
    , minLevel: 20
    , maxLevel: 20
    , unlocked: true
    }  
   , water8: {
      name: 'Super Rod'
    , pokes: ['Wailmer', 'Carvanha'] 
    , minLevel: 40
    , maxLevel: 40
    , unlocked: true
    } 
  },
    Sinnoh: {
    starter4: {
      name: 'Twinleaf Town'
    , pokes: ['Turtwig', 'Chimchar', 'Piplup'] 
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    } 
	, route76: {
      name: 'Route 201'
    , pokes: ['Starly', 'Bidoof', 'Kricketot'] 
    , minLevel: 2
    , maxLevel: 3
    , unlocked: true
    } 
	, special66: {
      name: 'Lake Verity'
    , pokes: ['Starly', 'Bidoof']
	, minLevel: 2
    , maxLevel: 4
    , unlocked: true
    }
	, route77: {
      name: 'Route 202'
    , pokes: ['Starly', 'Bidoof', 'Shinx', 'Kricketot'] 
    , minLevel: 2
    , maxLevel: 4
    , unlocked: true
    } 
	, route78: {
      name: 'Route 203'
    , pokes: ['Starly', 'Bidoof', 'Shinx', 'Kricketot'] 
    , minLevel: 4
    , maxLevel: 6
    , unlocked: true
    }
	, special67: {
      name: 'Oreburgh Gate'
    , pokes: ['Zubat', 'Psyduck', 'Geodude']
	, minLevel: 5
    , maxLevel: 8
    , unlocked: true
    }
	, special67a: {
      name: 'Oreburgh City'
    , pokes: ['Cranidos', 'Shieldon']
	, minLevel: 20
    , maxLevel: 20
    , unlocked: true
    }	
	, special68: {
      name: 'Oreburgh Mine'
    , pokes: ['Geodude', 'Zubat', 'Onix']
	, minLevel: 5
    , maxLevel: 10
    , unlocked: true
    }	
	, route79: {
      name: 'Route 204'
    , pokes: ['Starly', 'Bidoof', 'Shinx', 'Budew', 'Kricketot'] 
    , minLevel: 3
    , maxLevel: 6
    , unlocked: true
    }
	, special69: {
      name: 'Floaroma Town'
    , pokes: ['Combee', 'Burmy', 'Cherubi', 'Munchlax']
	, minLevel: 5
    , maxLevel: 15
    , unlocked: true
    }		
	, route80: {
      name: 'Route 205'
    , pokes: ['Shellos', 'Buizel', 'Bidoof', 'Pachirisu'] 
    , minLevel: 8
    , maxLevel: 12
    , unlocked: true
    }
	, special70: {
      name: 'Valley Windworks'
    , pokes: ['Shellos', 'Buizel', 'Shinx', 'Pachirisu', 'Bidoof']
	, minLevel: 7
    , maxLevel: 12
    , unlocked: true
    }	
	, special71: {
      name: '99 Luftballons'
    , pokes: ['Drifloon']
	, minLevel: 20
    , maxLevel: 20
    , unlocked: true
    }	
	, special72: {
      name: 'Fuego Ironworks'
    , pokes: ['Floatzel', 'Shellos', 'Gastrodon', 'Shinx', 'Luxio', 'Pachirisu']
	, minLevel: 28
    , maxLevel: 30
    , unlocked: true
    }	
	, special73: {
      name: 'Eterna Forest'
    , pokes: ['Budew', 'Buneary', 'Bidoof', 'Kricketot']
	, minLevel: 10
    , maxLevel: 14
    , unlocked: true
    }
	, special74: {
      name: 'Old Chateau'
    , pokes: ['Gastly', 'Haunter']
	, minLevel: 12
    , maxLevel: 16
    , unlocked: true
    }
	, special75: {
      name: 'Strange TV'
    , pokes: ['Rotom']
	, minLevel: 15
    , maxLevel: 15
    , unlocked: true
    }
	, route81: {
      name: 'Route 206'
    , pokes: ['Kricketune', 'Bronzor', 'Kricketot', 'Stunky'] 
    , minLevel: 14
    , maxLevel: 19
    , unlocked: true
    }
	, special76: {
      name: 'Wayward Cave'
    , pokes: ['Bronzor', 'Gible']
	, minLevel: 14
    , maxLevel: 20
    , unlocked: true
    }
	, route82: {
      name: 'Route 207'
    , pokes: ['Machop', 'Geodude', 'Ponyta'] 
    , minLevel: 5
    , maxLevel: 7
    , unlocked: true
    }
	, special77: {
      name: 'Mt. Coronet'
    , pokes: ['Chingling', 'Bronzor', 'Bronzong', 'Snover', 'Abomasnow']
	, minLevel: 12
    , maxLevel: 40
    , unlocked: true
    }
	, route83: {
      name: 'Route 208'
    , pokes: ['Bidoof', 'Bibarel'] 
    , minLevel: 16
    , maxLevel: 18
    , unlocked: true
    }
	, special78: {
      name: 'Hearthome City'
    , pokes: ['Happiny']
	, minLevel: 1
    , maxLevel: 1
    , unlocked: true
    }
	, route84: {
      name: 'Route 209'
    , pokes: ['Bibarel', 'Mime Jr.', 'Starly', 'Staravia', 'Bonsly'] 
    , minLevel: 16
    , maxLevel: 18
    , unlocked: true
    }
	, special79: {
      name: 'Hallowed Tower'
    , pokes: ['Spiritomb']
	, minLevel: 25
    , maxLevel: 25
    , unlocked: true
    }
	, special80: {
      name: 'Lost Tower'
    , pokes: ['Zubat', 'Gastly', 'Murkrow', 'Misdreavus', 'Duskull', 'Golbat']
	, minLevel: 16
    , maxLevel: 19
    , unlocked: true
    }
	, special81: {
      name: 'Solaceon Ruins'
    , pokes: ['Unown']
	, minLevel: 14
    , maxLevel: 30
    , unlocked: true
    }
	, route85: {
      name: 'Route 210'
    , pokes: ['Mime Jr.', 'Kricketune', 'Bonsly', 'Staravia'] 
    , minLevel: 19
    , maxLevel: 21
    , unlocked: true
    }
	, route86: {
      name: 'Route 211'
    , pokes: ['Chingling', 'Bronzor'] 
    , minLevel: 27
    , maxLevel: 30
    , unlocked: true
    }
	, route87: {
      name: 'Route 212'
    , pokes: ['Budew', 'Starly', 'Kricketune', 'Staravia'] 
    , minLevel: 16
    , maxLevel: 24
    , unlocked: true
    }
	, special82: {
      name: 'Trophy Garden'
    , pokes: ['Clefairy', 'Jigglypuff', 'Meowth', 'Chansey', 'Ditto', 'Eevee', 'Cleffa', 'Igglybuff', 'Marill', 'Azurill', 'Plusle', 'Minun', 'Castform']
	, minLevel: 16
    , maxLevel: 18
    , unlocked: true
    }
	, special83: {
      name: 'Great Marsh'
    , pokes: ['Bibarel', 'Starly', 'Budew', 'Bidoof', 'Staravia', 'Skorupi', 'Drapion', 'Croagunk', 'Toxicroak', 'Carnivine']
	, minLevel: 20
    , maxLevel: 30
    , unlocked: true
    }
	, route88: {
      name: 'Route 213'
    , pokes: ['Shellos', 'Buizel', 'Chatot', 'Floatzel'] 
    , minLevel: 20
    , maxLevel: 26
    , unlocked: true
    }
	, special84: {
      name: 'Valor Lakefront'
    , pokes: ['Staravia', 'Bibarel', 'Kricketune']
	, minLevel: 21
    , maxLevel: 27
    , unlocked: true
    }
	, route89: {
      name: 'Route 214'
    , pokes: ['Stunky', 'Kricketune'] 
    , minLevel: 21
    , maxLevel: 24
    , unlocked: true
    }
	, special93: {
      name: 'Ruin Maniac Cave'
    , pokes: ['Hippopotas'] 
    , minLevel: 22
    , maxLevel: 23
    , unlocked: true
    }    
	, special85: {
      name: 'Sendoff Spring'
    , pokes: ['Bibarel', 'Staravia', 'Chingling']
	, minLevel: 37
    , maxLevel: 54
    , unlocked: true
    }
	, special86: {
      name: 'Turnback Cave'
    , pokes: ['Bronzong', 'Bronzor', 'Chingling']
	, minLevel: 45
    , maxLevel: 65
    , unlocked: true
    }
	, route90: {
      name: 'Route 215'
    , pokes: ['Kricketune', 'Staravia'] 
    , minLevel: 19
    , maxLevel: 22
    , unlocked: true
    }
	, route91: {
      name: 'Route 216'
    , pokes: ['Snover'] 
    , minLevel: 32
    , maxLevel: 35
    , unlocked: true
    }
	, route217: {
      name: 'Route 217'
    , pokes: ['Sneasel', 'Machoke', 'Medicham', 'Meditite', 'Swinub', 'Snorunt'] 
    , minLevel: 32
    , maxLevel: 35
    , unlocked: true
    }
	, special87: {
      name: 'Lake Acuity'
    , pokes: ['Bibarel', 'Chingling', 'Snover']
	, minLevel: 34
    , maxLevel: 41
    , unlocked: true
    }
	, special88: {
      name: 'Snowpoint Temple'
    , pokes: ['Golbat', 'Sneasel', 'Onix', 'Graveler', 'Steelix', 'Smoochum', 'Jynx']
	, minLevel: 47
    , maxLevel: 56
    , unlocked: true
    }
	, route92: {
      name: 'Route 218'
    , pokes: ['Floatzel', 'Shellos', 'Gastrodon', 'Glameow', 'Chatot'] 
    , minLevel: 28
    , maxLevel: 31
    , unlocked: true
    }
	, special89: {
      name: 'Iron Island'
    , pokes: ['Riolu']
	, minLevel: 1
    , maxLevel: 1
    , unlocked: true
    }
	, route93: {
      name: 'Route 219'
    , pokes: ['Tentacool', 'Wingull', 'Tentacruel', 'Pelipper'] 
    , minLevel: 20
    , maxLevel: 40
    , unlocked: true
    }
	, route94: {
      name: 'Route 220'
    , pokes: ['Tentacool', 'Wingull', 'Tentacruel', 'Pelipper'] 
    , minLevel: 20
    , maxLevel: 40
    , unlocked: true
    }
	, route95: {
      name: 'Route 221'
    , pokes: ['Floatzel', 'Stunky', 'Skuntank', 'Shellos', 'Gastrodon'] 
    , minLevel: 28
    , maxLevel: 31
    , unlocked: true
    }
	, route96: {
      name: 'Route 222'
    , pokes: ['Gastrodon', 'Floatzel', 'Chatot', 'Glameow', 'Luxio', 'Purugly'] 
    , minLevel: 38
    , maxLevel: 42
    , unlocked: true
    }
	, route97: {
      name: 'Route 223'
    , pokes: ['Mantyke'] 
    , minLevel: 30
    , maxLevel: 45
    , unlocked: true
    }
	, special90: {
      name: 'Victory Road'
    , pokes: ['Machoke', 'Golbat', 'Graveler', 'Medicham', 'Onix', 'Steelix', 'Rhyhorn', 'Rhydon']
	, minLevel: 40
    , maxLevel: 46
    , unlocked: true
    }
	, route98: {
      name: 'Route 224'
    , pokes: ['Roselia', 'Gloom', 'Weepinbell', 'Beautifly', 'Dustox', 'Bellsprout', 'Pelipper', 'Oddish'] 
    , minLevel: 49
    , maxLevel: 52
    , unlocked: true
    }
	, special91: {
      name: 'Fight Area'
    , pokes: ['Gallade', 'Froslass']
	, minLevel: 30
    , maxLevel: 30
    , unlocked: true
    }
	, route99: {
      name: 'Route 225'
    , pokes: ['Fearow', 'Raticate', 'Banette', 'Roselia', 'Rattata', 'Spearow', 'Machoke', 'Graveler'] 
    , minLevel: 47
    , maxLevel: 51
    , unlocked: true
    }
	, route100: {
      name: 'Route 226'
    , pokes: ['Fearow', 'Raticate', 'Golduck', 'Machoke', 'Rattata', 'Spearow', 'Graveler', 'Wingull', 'Banette'] 
    , minLevel: 47
    , maxLevel: 53
    , unlocked: true
    }
	, route101: {
      name: 'Route 227'
    , pokes: ['Rhydon', 'Camerupt', 'Fearow', 'Weezing', 'Golbat', 'Banette', 'Graveler', 'Rhyhorn', 'Skarmory', 'Numel'] 
    , minLevel: 24
    , maxLevel: 56
    , unlocked: true
    }
	, special92: {
      name: 'Stark Mountain'
    , pokes: ['Magcargo', 'Graveler', 'Golbat', 'Machoke', 'Weezing', 'Geodude', 'Onix', 'Slugma', 'Camerupt']
	, minLevel: 27
    , maxLevel: 58
    , unlocked: true
    }
	, route102: {
      name: 'Route 228'
    , pokes: ['Cacturne', 'Dugtrio', 'Rhydon', 'Diglett', 'Cacnea'] 
    , minLevel: 23
    , maxLevel: 54
    , unlocked: true
    }
	, route103: {
      name: 'Route 229'
    , pokes: ['Gloom', 'Weepinbell', 'Ledian', 'Illumise', 'Roselia', 'Oddish', 'Bellsprout', 'Scyther', 'Volbeat', 'Pinsir', 'Pidgey', 'Beautifly', 'Dustox'] 
    , minLevel: 20
    , maxLevel: 52
    , unlocked: true
    }
	, route104: {
      name: 'Route 230'
    , pokes: ['Gloom', 'Weepinbell', 'Floatzel', 'Oddish', 'Bellsprout', 'Golduck', 'Beautifly', 'Gastrodon', 'Dustox', 'Wingull'] 
    , minLevel: 18
    , maxLevel: 51
    , unlocked: true
    }
	, special94: {
      name: 'Lakes'
    , pokes: ['Uxie', 'Azelf', 'Mesprit']
	, minLevel: 50
    , maxLevel: 50
    , unlocked: true
    }
	, special95: {
      name: 'Spear Pillar'
    , pokes: ['Dialga', 'Palkia']
	, minLevel: 47
    , maxLevel: 47
    , unlocked: true
    }
	, special96: {
      name: 'Distortion World'
    , pokes: ['Giratina']
	, minLevel: 47
    , maxLevel: 47
    , unlocked: true
    }
	, special97: {
      name: 'Slow Down'
    , pokes: ['Regigigas']
	, minLevel: 70
    , maxLevel: 70
    , unlocked: true
    }
	, special98: {
      name: 'Volcano'
    , pokes: ['Heatran']
	, minLevel: 70
    , maxLevel: 70
    , unlocked: true
    }
	, special99: {
      name: 'Mysterious Sea'
    , pokes: ['Phione', 'Manaphy']
	, minLevel: 1
    , maxLevel: 1
    , unlocked: true
    }
	, special100: {
      name: 'Moon Island'
    , pokes: ['Cresselia', 'Darkrai']
	, minLevel: 50
    , maxLevel: 50
    , unlocked: true
    }
	, special101: {
      name: 'Flower Paradise'
    , pokes: ['Shaymin']
	, minLevel: 30
    , maxLevel: 30
    , unlocked: true
    }
	, special102: {
      name: 'Hall of Origin'
    , pokes: ['Arceus']
	, minLevel: 80
    , maxLevel: 80
    , unlocked: true
    }
	, water6: {
      name: 'Old Rod'
    , pokes: ['Finneon'] 
    , minLevel: 3
    , maxLevel: 15
    , unlocked: true
    }  
   , water7: {
      name: 'Good Rod'
    , pokes: ['Mantyke', 'Buizel'] 
    , minLevel: 10
    , maxLevel: 25
    , unlocked: true
    }  
   , water8: {
      name: 'Super Rod'
    , pokes: ['Lumineon', 'Mantyke', 'Floatzel'] 
    , minLevel: 20
    , maxLevel: 55
    , unlocked: true
    } 
 },
     Unova: {
    starter5: {
      name: 'Aspertia City'
    , pokes: ['Snivy', 'Tepig', 'Oshawott'] 
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    } 
	, route105: {
      name: 'Route 19'
    , pokes: ['Patrat', 'Purrloin', 'Lillipup'] 
    , minLevel: 2
    , maxLevel: 4
    , unlocked: true
    }
	, route106: {
      name: 'Route 20'
    , pokes: ['Pidove', 'Venipede', 'Patrat', 'Purrloin', 'Sewaddle'] 
    , minLevel: 2
    , maxLevel: 4
    , unlocked: true
    }
	, special103: {
      name: 'Floccesy Ranch'
    , pokes: ['Azurill', 'Mareep', 'Psyduck', 'Riolu'] 
    , minLevel: 4
    , maxLevel: 7
    , unlocked: true
    }
	, special104: {
      name: 'Virbank Complex'
    , pokes: ['Magby', 'Magnemite', 'Growlithe', 'Elekid', 'Koffing'] 
    , minLevel: 10
    , maxLevel: 13
    , unlocked: true
    }
	, special105: {
      name: 'Castelia City'
    , pokes: ['Cottonee', 'Pidove', 'Petilil', 'Whimsicott', 'Lilligant'] 
    , minLevel: 16
    , maxLevel: 18
    , unlocked: true
    }
	, special106: {
      name: 'Castelia Sewers'
    , pokes: ['Rattata', 'Zubat', 'Grimer'] 
    , minLevel: 14
    , maxLevel: 17
    , unlocked: true
    }
	, route107: {
      name: 'Route 4'
    , pokes: ['Sandile', 'Darumaka', 'Trubbish', 'Scraggy', 'Minccino'] 
    , minLevel: 14
    , maxLevel: 17
    , unlocked: true
    }
	, special107: {
      name: 'Desert Resort'
    , pokes: ['Sandile', 'Darumaka', 'Maractus', 'Sigilyph', 'Dwebble'] 
    , minLevel: 18
    , maxLevel: 21
    , unlocked: true
    }
	, special108: {
      name: 'Relic Castle'
    , pokes: ['Sandile', 'Yamask', 'Krokorok'] 
    , minLevel: 18
    , maxLevel: 30
    , unlocked: true
    }
	, special133: {
      name: 'Ancient Path'
    , pokes: ['Roggenrola', 'Timburr', 'Woobat'] 
    , minLevel: 16
    , maxLevel: 18
    , unlocked: true
    }
	, route108: {
      name: 'Route 5'
    , pokes: ['Gothita', 'Minccino', 'Trubbish', 'Liepard', 'Solosis'] 
    , minLevel: 21
    , maxLevel: 24
    , unlocked: true
    }
	, special109: {
      name: 'Driftveil Drawbridge'
    , pokes: ['Ducklett'] 
    , minLevel: 22
    , maxLevel: 25
    , unlocked: true
    }
	, route109: {
      name: 'Route 6'
    , pokes: ['Deerling', 'Karrablast', 'Tranquill', 'Foongus', 'Swadloon', 'Shelmet'] 
    , minLevel: 23
    , maxLevel: 26
    , unlocked: true
    }
	, special110: {
      name: 'Mistralton Cave'
    , pokes: ['Deino', 'Boldore', 'Woobat', 'Axew'] 
    , minLevel: 27
    , maxLevel: 31
    , unlocked: true
    }
	, special111: {
      name: 'Chargestone Cave'
    , pokes: ['Joltik', 'Klink', 'Ferroseed', 'Boldore', 'Tynamo'] 
    , minLevel: 24
    , maxLevel: 28
    , unlocked: true
    }
	, special112: {
      name: 'Reversal Mountain'
    , pokes: ['Skorupi', 'Spoink', 'Drifblim', 'Trapinch', 'Grumpig', 'Skarmory', 'Numel', 'Camerupt'] 
    , minLevel: 32
    , maxLevel: 38
    , unlocked: true
    }
	, special113: {
      name: 'Strange House'
    , pokes: ['Gothita', 'Gothorita', 'Solosis', 'Duosion'] 
    , minLevel: 31
    , maxLevel: 34
    , unlocked: true
    }
	, special114: {
      name: 'Nature Preserve'
    , pokes: ['Nuzleaf', 'Altaria', 'Golduck', 'Noctowl', 'Girafarig', 'Kecleon'] 
    , minLevel: 64
    , maxLevel: 67
    , unlocked: true
    }
	, route110: {
      name: 'Route 7'
    , pokes: ['Blitzle', 'Cubchoo', 'Deerling', 'Zebstrika', 'Watchog', 'Tranquill', 'Foongus'] 
    , minLevel: 30
    , maxLevel: 33
    , unlocked: true
    }
	, special115: {
      name: 'Celestial Tower'
    , pokes: ['Golett', 'Litwick', 'Elgyem'] 
    , minLevel: 30
    , maxLevel: 33
    , unlocked: true
    }
	, special116: {
      name: 'Twist Mountain'
    , pokes: ['Vanillite', 'Boldore', 'Gurdurr', 'Heatmor', 'Durant', 'Woobat', 'Beartic', 'Cryogonal'] 
    , minLevel: 54
    , maxLevel: 57
    , unlocked: true
    }
	, special117: {
      name: 'Icirrus City'
    , pokes: ['Palpitoad', 'Shelmet', 'Stunfisk', 'Karrablast'] 
    , minLevel: 54
    , maxLevel: 57
    , unlocked: true
    }
	, special118: {
      name: 'Dragonspiral Tower'
    , pokes: ['Sawsbuck', 'Vanillish', 'Mienshao', 'Beartic', 'Druddigon', 'Golurk', 'Druddigon'] 
    , minLevel: 55
    , maxLevel: 66
    , unlocked: true
    }
	, route111: {
      name: 'Route 8'
    , pokes: ['Palpitoad', 'Shelmet', 'Stunfisk', 'Karrablast'] 
    , minLevel: 54
    , maxLevel: 57
    , unlocked: true
    }
	, special119: {
      name: 'Moor of Icirrus'
    , pokes: ['Palpitoad', 'Shelmet', 'Stunfisk', 'Karrablast'] 
    , minLevel: 54
    , maxLevel: 57
    , unlocked: true
    }
	, route112: {
      name: 'Route 9'
    , pokes: ['Gothorita', 'Minccino', 'Garbodor', 'Pawniard', 'Liepard', 'Duosion'] 
    , minLevel: 37
    , maxLevel: 39
    , unlocked: true
    }
	, special120: {
      name: 'Victory Road'
    , pokes: ['Golurk', 'Tranquill', 'Cottonee', 'Petilil', 'Gurdurr', 'Throh', 'Boldore', 'Druddigon', 'Zweilous'] 
    , minLevel: 41
    , maxLevel: 50
    , unlocked: true
    }
	, route113: {
      name: 'Route 11'
    , pokes: ['Golduck', 'Gligar', 'Marill', 'Zangoose', 'Seviper'] 
    , minLevel: 40
    , maxLevel: 43
    , unlocked: true
    }
	, special121: {
      name: 'Village Bridge'
    , pokes: ['Golduck', 'Marill', 'Zangoose', 'Seviper'] 
    , minLevel: 36
    , maxLevel: 39
    , unlocked: true
    }
	, route114: {
      name: 'Route 12'
    , pokes: ['Roselia', 'Combee', 'Heracross', 'Pinsir'] 
    , minLevel: 39
    , maxLevel: 42
    , unlocked: true
    }
	, route115: {
      name: 'Route 13'
    , pokes: ['Tangela', 'Pelipper', 'Drifblim', 'Absol', 'Lunatone', 'Solrock'] 
    , minLevel: 34
    , maxLevel: 37
    , unlocked: true
    }
	, special122: {
      name: 'Giant Chasm'
    , pokes: ['Tangela', 'Pelipper', 'Clefairy', 'Lunatone', 'Solrock', 'Delibird', 'Piloswine', 'Jynx', 'Sneasel', 'Ditto', 'Metang'] 
    , minLevel: 49
    , maxLevel: 52
    , unlocked: true
    }
	, special123: {
      name: 'Undella Town'
    , pokes: ['Frillish', 'Basculin'] 
    , minLevel: 25
    , maxLevel: 40
    , unlocked: true
    }
	, route116: {
      name: 'Route 14'
    , pokes: ['Golduck', 'Swablu', 'Mienfoo', 'Drifblim', 'Absol', 'Altaria'] 
    , minLevel: 34
    , maxLevel: 37
    , unlocked: true
    }
	, special124: {
      name: 'Abundant Shrine'
    , pokes: ['Cottonee', 'Swablu', 'Bronzor', 'Vulpix', 'Marill', 'Golduck', 'Altaria'] 
    , minLevel: 33
    , maxLevel: 36
    , unlocked: true
    }
	, route117: {
      name: 'Route 15'
    , pokes: ['Sandslash', 'Gligar', 'Pupitar'] 
    , minLevel: 54
    , maxLevel: 57
    , unlocked: true
    }
	, special160: {
      name: 'Marvelous Bridge'
    , pokes: ['Swanna'] 
    , minLevel: 54
    , maxLevel: 57
    , unlocked: true
    }
	, route118: {
      name: 'Route 16'
    , pokes: ['Gothita', 'Minccino', 'Trubbish', 'Liepard', 'Solosis'] 
    , minLevel: 21
    , maxLevel: 24
    , unlocked: true
    }
	, special125: {
      name: 'Lostlorn Forest'
    , pokes: ['Cottonee', 'Swadloon', 'Venipede', 'Petilil'] 
    , minLevel: 21
    , maxLevel: 24
    , unlocked: true
    }
	, special126: {
      name: 'Undella Bay'
    , pokes: ['Mantyke', 'Remoraid', 'Spheal'] 
    , minLevel: 25
    , maxLevel: 40
    , unlocked: true
    }
	, route119: {
      name: 'Route 21'
    , pokes: ['Mantyke', 'Remoraid', 'Spheal'] 
    , minLevel: 30
    , maxLevel: 45
    , unlocked: true
    }
	, special127: {
      name: 'Seaside Cave'
    , pokes: ['Woobat', 'Boldore', 'Tynamo'] 
    , minLevel: 34
    , maxLevel: 37
    , unlocked: true
    }
	, route120: {
      name: 'Route 22'
    , pokes: ['Pelipper', 'Golduck', 'Lunatone', 'Solrock', 'Marill', 'Delibird'] 
    , minLevel: 39
    , maxLevel: 42
    , unlocked: true
    }
	, route121: {
      name: 'Route 23'
    , pokes: ['Bouffalant', 'Sawk', 'Mienfoo', 'Amoonguss', 'Vullaby', 'Rufflet'] 
    , minLevel: 47
    , maxLevel: 51
    , unlocked: true
    }
	, special150: {
      name: 'Pinwheel Forest'
    , pokes: ['Gurdurr', 'Palpitoad', 'Throh', 'Cottonee', 'Swadloon', 'Petilil', 'Whirlipede', 'Pansage', 'Pansear', 'Panpour'] 
    , minLevel: 54
    , maxLevel: 57
    , unlocked: true
    }
	, special128: {
      name: 'Nacrene City'
    , pokes: ['Tirtouga', 'Archen'] 
    , minLevel: 25
    , maxLevel: 25
    , unlocked: true
    }
	, route122: {
      name: 'Route 3'
    , pokes: ['Tranquill', 'Watchog', 'Zebstrika', 'Herdier', 'Purrloin'] 
    , minLevel: 47
    , maxLevel: 51
    , unlocked: true
    }
	, special129: {
      name: 'Wellspring Cave'
    , pokes: ['Boldore', 'Woobat'] 
    , minLevel: 55
    , maxLevel: 58
    , unlocked: true
    }
	, special130: {
      name: 'Dreamyard'
    , pokes: ['Watchog', 'Liepard', 'Munna'] 
    , minLevel: 56
    , maxLevel: 59
    , unlocked: true
    }
	, route123: {
      name: 'Route 2'
    , pokes: ['Watchog', 'Herdier', 'Liepard'] 
    , minLevel: 56
    , maxLevel: 59
    , unlocked: true
    }
	, route124: {
      name: 'Route 1'
    , pokes: ['Herdier', 'Watchog'] 
    , minLevel: 56
    , maxLevel: 59
    , unlocked: true
    }
	, route125: {
      name: 'Route 17'
    , pokes: ['Frillish'] 
    , minLevel: 45
    , maxLevel: 60
    , unlocked: true
    }
	, route126: {
      name: 'Route 18'
    , pokes: ['Scrafty', 'Crustle', 'Sawk', 'Throh'] 
    , minLevel: 57
    , maxLevel: 59
    , unlocked: true
    }
	, special131: {
      name: 'P2 Laboratory'
    , pokes: ['Watchog', 'Herdier', 'Klang', 'Scrafty'] 
    , minLevel: 56
    , maxLevel: 59
    , unlocked: true
    }
	, special132: {
      name: 'Shaking Spots'
    , pokes: ['Audino', 'Drilbur', 'Emolga'] 
    , minLevel: 10
    , maxLevel: 20
    , unlocked: true
    }
	, special134: {
      name: 'Just an Illusion'
    , pokes: ['Zorua'] 
    , minLevel: 25
    , maxLevel: 25
    , unlocked: true
    }
	, special135: {
      name: 'Relic Castle (Maze End)'
    , pokes: ['Larvesta', 'Volcarona'] 
    , minLevel: 65
    , maxLevel: 65
    , unlocked: true
    }
	, special136: {
      name: 'Liberty Garden'
    , pokes: ['Victini'] 
    , minLevel: 15
    , maxLevel: 15
    , unlocked: true
    }
	, special137: {
      name: 'Pledge Grove'
    , pokes: ['Keldeo', 'Cobalion', 'Terrakion', 'Virizion'] 
    , minLevel: 50
    , maxLevel: 50
    , unlocked: true
    }
	, special138: {
      name: 'Weather Guys'
    , pokes: ['Tornadus', 'Thundurus', 'Landorus'] 
    , minLevel: 70
    , maxLevel: 70
    , unlocked: true
    }
	, special139: {
      name: 'Castle of N'
    , pokes: ['Reshiram', 'Zekrom'] 
    , minLevel: 70
    , maxLevel: 70
    , unlocked: true
    }
	, special140: {
      name: 'Giant Chasm (Deep Cave)'
    , pokes: ['Kyurem'] 
    , minLevel: 70
    , maxLevel: 70
    , unlocked: true
    }
	 , special141: {
      name: 'Serene Grace'
    , pokes: ['Meloetta'] 
    , minLevel: 50
    , maxLevel: 50
    , unlocked: true
    }
	, special142: {
      name: 'Not Kabutops'
    , pokes: ['Genesect'] 
    , minLevel: 15
    , maxLevel: 15
    , unlocked: true
    }
       , water9: {
      name: 'Super Rod'
    , pokes: ['Alomomola', 'Tympole'] 
    , minLevel: 40
    , maxLevel: 40
    , unlocked: true
    } 
 },
    Kalos: {
    starter6: {
      name: 'Aquacorde Town'
    , pokes: ['Chespin', 'Fennekin', 'Froakie'] 
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    }
        , custom1: {
      name: 'Santalune City'
    , pokes: ['Bunnelby', 'Fletchling', 'Litleo'] 
    , minLevel: 2
    , maxLevel: 4
    , unlocked: true
    }
	, custom2: {
      name: 'Camphrier Town'
    , pokes: ['Scatterbug', 'Flabebe', 'Skiddo', 'Spewpa'] 
    , minLevel: 5
    , maxLevel: 8
    , unlocked: true
    } 
	, custom3: {
      name: 'Geosenge Town'
    , pokes: ['Furfrou', 'Spritzee', 'Swirlix'] 
    , minLevel: 10
    , maxLevel: 16
    , unlocked: true
    }  
	, custom4: {
      name: 'Coumarine City'
    , pokes: ['Hawlucha', 'Pancham', 'Inkay', 'Espurr'] 
    , minLevel: 15
    , maxLevel: 22
    , unlocked: true
    }
	, custom5: {
      name: 'Laverre City'
    , pokes: ['Phantump', 'Pumpkaboo'] 
    , minLevel: 20
    , maxLevel: 25
    , unlocked: true
    }
        , custom6: {
      name: 'Ambrette Town'
    , pokes: ['Amaura', 'Tyrunt'] 
    , minLevel: 20
    , maxLevel: 20
    , unlocked: true
    }
	, custom7: {
      name: 'Anistar City'
    , pokes: ['Dedenne', 'Helioptile', 'Klefki', 'Honedge'] 
    , minLevel: 27
    , maxLevel: 32
    , unlocked: true
    }    
        , custom8: {
      name: 'Couriway Town'
    , pokes: ['Bergmite', 'Carbink', 'Binacle', 'Goomy', 'Noibat'] 
    , minLevel: 32
    , maxLevel: 38
    , unlocked: true
    } 
	, custom10: {
      name: 'Team Flare Secret HQ'
    , pokes: ['Xerneas', 'Yveltal'] 
    , minLevel: 50
    , maxLevel: 50
    , unlocked: true
    }     
	, custom11: {
      name: 'Terminus Cave'
    , pokes: ['Zygarde'] 
    , minLevel: 70
    , maxLevel: 70
    , unlocked: true
    } 
	, custom12: {
      name: 'Queen of Rocks'
    , pokes: ['Diancie'] 
    , minLevel: 50
    , maxLevel: 50
    , unlocked: true
    }  
	, custom13: {
      name: 'The Magician'
    , pokes: ['Hoopa'] 
    , minLevel: 50
    , maxLevel: 50
    , unlocked: true
    } 
	, custom14: {
      name: 'Steam Siege'
    , pokes: ['Volcanion'] 
    , minLevel: 70
    , maxLevel: 70
    , unlocked: true
    } 
    , custom15: {
      name: 'Super Rod'
    , pokes: ['Skrelp', 'Clauncher'] 
    , minLevel: 20
    , maxLevel: 20
    , unlocked: true
    } 
 },
  Alola: {
    starter7: {
      name: 'Iki Town'
    , pokes: ['Rowlet', 'Litten', 'Popplio'] 
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    }
    , custom16: {
      name: 'Route 1'
    , pokes: ['Pikipek', 'Yungoos', 'Grubbin'] 
    , minLevel: 2
    , maxLevel: 4
    , unlocked: true
    } 
    , custom17: {
      name: 'Route 3'
    , pokes: ['Cutiefly', 'Rockruff', 'Oricorio', 'Crabrawler'] 
    , minLevel: 9
    , maxLevel: 12
    , unlocked: true
    }
    , custom18: {
      name: 'Route 5'
    , pokes: ['Mudbray', 'Dewpider', 'Salandit', 'Stufful'] 
    , minLevel: 13
    , maxLevel: 16
    , unlocked: true
    }
    , custom19: {
      name: 'Lush Jungle'
    , pokes: ['Fomantis', 'Morelull', 'Bounsweet', 'Comfey', 'Oranguru', 'Passimian'] 
    , minLevel: 18
    , maxLevel: 21
    , unlocked: true
    }
    , custom20: {
      name: 'Special Spots'
    , pokes: ['Wimpod', 'Sandygast', 'Pyukumuku'] 
    , minLevel: 20
    , maxLevel: 20
    , unlocked: true
    }
    , custom21: {
      name: 'Mount Hokulani'
    , pokes: ['Minior', 'Komala'] 
    , minLevel: 25
    , maxLevel: 28
    , unlocked: true
    }
    , custom22: {
      name: 'Route 14'
    , pokes: ['Turtonator', 'Togedemaru', 'Mimikyu'] 
    , minLevel: 29
    , maxLevel: 32
    , unlocked: true
    }
    , custom23: {
      name: 'Mount Lanakila'
    , pokes: ['Drampa', 'Jangmo-o'] 
    , minLevel: 42
    , maxLevel: 45
    , unlocked: true
    }
    , custom24: {
      name: 'Welcome to Alola'
    , pokes: ['A-Rattata', 'A-Sandshrew', 'A-Vulpix', 'A-Diglett', 'A-Meowth', 'A-Geodude', 'A-Grimer'] 
    , minLevel: 20
    , maxLevel: 20
    , unlocked: true
    }
    , custom25: {
      name: 'Aether Paradise'
    , pokes: ['Type: Null', 'Cosmog'] 
    , minLevel: 40
    , maxLevel: 40
    , unlocked: true
    }
    , custom26: {
      name: 'Ruins'
    , pokes: ['Tapu Koko', 'Tapu Lele', 'Tapu Bulu', 'Tapu Fini'] 
    , minLevel: 60
    , maxLevel: 60
    , unlocked: true
    }
    , custom27: {
      name: 'Altar'
    , pokes: ['Solgaleo', 'Lunala'] 
    , minLevel: 55
    , maxLevel: 55
    , unlocked: true
    }
    , custom28: {
      name: 'Ultra Wormholes'
    , pokes: ['Nihilego', 'Buzzwole', 'Pheromosa', 'Xurkitree', 'Celesteela', 'Kartana', 'Guzzlord', 'Poipole', 'Stakataka', 'Blacephalon'] 
    , minLevel: 55
    , maxLevel: 70
    , unlocked: true
    }
    , custom29: {
      name: 'Not an Ultra Beast'
    , pokes: ['Necrozma'] 
    , minLevel: 70
    , maxLevel: 70
    , unlocked: true
    }
    , custom30: {
      name: 'Not a PokeBall'
    , pokes: ['Magearna'] 
    , minLevel: 50
    , maxLevel: 50
    , unlocked: true
    }
    , custom31: {
      name: 'Fighting Ghost'
    , pokes: ['Marshadow'] 
    , minLevel: 50
    , maxLevel: 50
    , unlocked: true
    }
    , custom32: {
      name: 'Ultra Volt'
    , pokes: ['Zeraora'] 
    , minLevel: 50
    , maxLevel: 50
    , unlocked: true
    }	  
    , custom33: {
      name: 'Rod'
    , pokes: ['Wishiwashi', 'Mareanie', 'Bruxish', 'Dhelmise'] 
    , minLevel: 30
    , maxLevel: 30
    , unlocked: true
    }
},
  Galar: {
      starter8: {
      name: 'Postwick'
    , pokes: ['Grookey', 'Scorbunny', 'Sobble'] 
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    }
    , custom34: {
      name: 'Route 1'
    , pokes: ['Skwovet', 'Rookidee', 'Blipbug', 'Wooloo', 'Nickit'] 
    , minLevel: 2
    , maxLevel: 6
    , unlocked: true
    }
    , custom35: {
      name: 'Route 2'
    , pokes: ['Skwovet', 'Rookidee', 'Nickit', 'Chewtle', 'Yamper'] 
    , minLevel: 5
    , maxLevel: 7
    , unlocked: true
    }
    , custom36: {
      name: 'Route 3'
    , pokes: ['Gossifleur', 'Rookidee', 'Corvisquire', 'Skwovet', 'Rolycoly', 'Sizzlipede'] 
    , minLevel: 8
    , maxLevel: 18
    , unlocked: true
    }
    , custom37: {
      name: 'Route 4'
    , pokes: ['Yamper', 'Wooloo', 'Milcery'] 
    , minLevel: 13
    , maxLevel: 16
    , unlocked: true
    }
    , custom38: {
      name: 'Route 5'
    , pokes: ['Dottler', 'Applin', 'Eldegoss'] 
    , minLevel: 16
    , maxLevel: 22
    , unlocked: true
    }
    , custom39: {
      name: 'Route 6'
    , pokes: ['Silicobra'] 
    , minLevel: 28
    , maxLevel: 33
    , unlocked: true
    }
    , custom40: {
      name: 'Glimwood Tangle'
    , pokes: ['Morgrem', 'Hattrem', 'Sinistea', 'Indeedee', 'Indeedee-F', 'Impidimp'] 
    , minLevel: 31 
    , maxLevel: 38
    , unlocked: true
    }
    , custom41: {
      name: 'Route 7'
    , pokes: ['Thievul', 'Toxel', 'Corviknight', 'Perrserker', 'Morpeko'] 
    , minLevel: 36
    , maxLevel: 41
    , unlocked: true
    }
    , custom42: {
      name: 'Route 8'
    , pokes: ['Sandaconda', 'Falinks'] 
    , minLevel: 38
    , maxLevel: 41
    , unlocked: true
    }
    , custom43: {
      name: 'Route 9'
    , pokes: ['Cramorant', 'Clobbopus', 'Grapploct', 'Pincurchin'] 
    , minLevel: 38
    , maxLevel: 44
    , unlocked: true
    }
    , custom44: {
      name: 'Route 10'
    , pokes: ['Snom', 'Duraludon', 'Stonjourner', 'Eiscue'] 
    , minLevel: 44 
    , maxLevel: 48
    , unlocked: true
    }
    , custom45: {
      name: 'Wild Area'
    , pokes: ['Cufant', 'Dreepy', 'Hatenna'] 
    , minLevel: 40 
    , maxLevel: 50
    , unlocked: true
    }
    , custom46: {
      name: 'Fossils'
    , pokes: ['Dracozolt', 'Arctozolt', 'Dracovish', 'Arctovish'] 
    , minLevel: 10 
    , maxLevel: 10
    , unlocked: true
    }
    , custom47: {
      name: 'Welcome to Galar'
    , pokes: ['G-Meowth', 'G-Ponyta', 'G-Farfetch\'d', 'G-Mr. Mime', 'G-Corsola', 'G-Zigzagoon', 'G-Darumaka', 'G-Yamask', 'G-Stunfisk'] 
    , minLevel: 20
    , maxLevel: 20
    , unlocked: true
    }
    //Add Galar Mons qui EVOLUENT pas 
    , custom48: {
      name: 'Energy Plant'
    , pokes: ['Zacian', 'Zamazenta'] 
    , minLevel: 70 
    , maxLevel: 70
    , unlocked: true
    }
    , custom49: {
      name: 'Eternamax'
    , pokes: ['Eternatus'] 
    , minLevel: 60 
    , maxLevel: 60
    , unlocked: true
    }
    , custom50: {
      name: 'Rod'
    , pokes: ['Arrokuda'] 
    , minLevel: 20
    , maxLevel: 20
    , unlocked: true
    }
},
  Event: {
      event1: {
      name: 'Old Rod'
    , pokes: ['Magikarp'] 
    , minLevel: 5
    , maxLevel: 5  
    , unlocked: true
    }
    , event2: {
      name: 'Let\'s Go : Meltan'
    , pokes: ['Meltan'] 
    , minLevel: 30
    , maxLevel: 30
    , unlocked: true
    }
},
  Colosseum: {
      console: {
      name: 'Starters'
    , pokes: ['Espeon', 'Umbreon'] 
    , minLevel: 5
    , maxLevel: 5  
    , unlocked: true
    }
},
  GaleOfDarkness: {
      console1: {
      name: 'Starter'
    , pokes: ['Eevee'] 
    , minLevel: 5
    , maxLevel: 5  
    , unlocked: true
    }
},
  YellowRescueTeam: {
      pmd: {
      name: 'Personality Quiz'
    , pokes: ['Bulbasaur', 'Charmander', 'Squirtle', 'Pikachu', 'Meowth', 'Psyduck', 'Machop', 'Cubone', 'Eevee', 'Chikorita', 'Cyndaquil', 'Totodile', 'Treecko', 'Torchic', 'Mudkip', 'Skitty'] 
    , minLevel: 5
    , maxLevel: 5  
    , unlocked: true
    }
    , pmd1: {
      name: 'Tiny Woods'
    , pokes: ['Pidgey', 'Sunkern', 'Wurmple', 'Exeggcute'] 
    , minLevel: 1 
    , maxLevel: 1
    , unlocked: true
    }
    , pmd2: {
      name: 'Thunderwave Cave'
    , pokes: ['Rattata', 'Nidoran f', 'Poochyena', 'Voltorb', 'Elekid', 'Plusle', 'Minun'] 
    , minLevel: 3 
    , maxLevel: 4
    , unlocked: true
    }
    , pmd3: {
      name: 'Mt. Steel'
    , pokes: ['Spearow', 'Baltoy', 'Zigzagoon', 'Aron', 'Geodude', 'Tyrogue', 'Meditite', 'Beldum', 'Pinsir'] 
    , minLevel: 4 
    , maxLevel: 6
    , unlocked: true
    }
    , pmd4: {
      name: 'Sinister Woods'
    , pokes: ['Swinub', 'Oddish', 'Sudowoodo', 'Sunflora', 'Sentret', 'Silcoon', 'Cascoon', 'Shroomish', 'Linoone', 'Ledyba', 'Wooper', 'Scyther', 'Exeggutor', 'Hoothoot', 'Slakoth'] 
    , minLevel: 6 
    , maxLevel: 10
    , unlocked: true
    }
    , pmd5: {
      name: 'Silent Chasm'
    , pokes: ['Farfetch/d', 'Teddiursa', 'Weedle', 'Yanma', 'Gloom', 'Dustox', 'Houndour', 'Poliwag', 'Spinarak', 'Trapinch', 'Paras', 'Beedrill'] 
    , minLevel: 8 
    , maxLevel: 12
    , unlocked: true
    }
    , pmd6: {
      name: 'Mt. Thunder'
    , pokes: ['Weedle', 'Nidoran m', 'Elextrike', 'Cacnea', 'Pidgeotto', 'Beedrill', 'Electabuzz', 'Stantler', 'Ampharos', 'Gligar', 'Manectric', 'Growlithe'] 
    , minLevel: 8 
    , maxLevel: 14
    , unlocked: true
    }
    , pmd7: {
      name: 'Mt. Thunder Peak'
    , pokes: ['Growlithe', 'Electabuzz', 'Ampharos', 'Gligar', 'Manectric'] 
    , minLevel: 9 
    , maxLevel: 12
    , unlocked: true
    }
    , pmd8: {
      name: 'Great Canyon'
    , pokes: ['Skiploom', 'Dunsparce', 'Phanpy', 'Doduo', 'Vileplume', 'Breloom', 'Murkrow', 'Cacturne', 'Noctowl', 'Heracross', 'Ariados', 'Tauros', 'Houndoom'] 
    , minLevel: 13 
    , maxLevel: 16
    , unlocked: true
    }
    , pmd9: {
      name: 'Rock Path'
    , pokes: ['Pidgeot', 'Nidorina', 'Nidorino', 'Zubat', 'Numel'] 
    , minLevel: 14 
    , maxLevel: 17
    , unlocked: true
    }
    , pmd10: {
      name: 'Lapis Cave'
    , pokes: ['Zubat', 'Nincada', 'Illumise', 'Nidorina', 'Nidorino', 'Tangela', 'Bagon', 'Golbat'] 
    , minLevel: 14 
    , maxLevel: 17
    , unlocked: true
    }
    , pmd11: {
      name: 'Mt. Blaze'
    , pokes: ['Pidgeot', 'Magby', 'Numel', 'Slugma', 'Shuckle', 'Torkoal', 'Rapidash'] 
    , minLevel: 14 
    , maxLevel: 19
    , unlocked: true
    }
    , pmd12: {
      name: 'Mt. Blaze Peak'
    , pokes: ['Fearow', 'Arcanine'] 
    , minLevel: 17 
    , maxLevel: 18
    , unlocked: true
    }
    , pmd13: {
      name: 'Snow Path'
    , pokes: ['Azurill', 'Furret', 'Nosepass', 'Pineco'] 
    , minLevel: 11 
    , maxLevel: 18
    , unlocked: true
    }
    , pmd14: {
      name: 'Frosty Forest'
    , pokes: ['Azurill', 'Furret', 'Nosepass', 'Piloswine', 'Ditto', 'Mightyena', 'Lairon', 'Snorunt'] 
    , minLevel: 11 
    , maxLevel: 20
    , unlocked: true
    }
    , pmd15: {
      name: 'Frosty Grotto'
    , pokes: ['Rhyhorn', 'Metang'] 
    , minLevel: 16 
    , maxLevel: 17
    , unlocked: true
    }
    , pmd16: {
      name: 'Mt. Freeze'
    , pokes: ['Pineco', 'Swablu', 'Shelgon', 'Pupitar', 'Seel', 'Vigoroth', 'Zangoose', 'Chimecho', 'Slaking', 'Seviper'] 
    , minLevel: 15 
    , maxLevel: 22
    , unlocked: true
    }
    , pmd17: {
      name: 'Mt. Freeze Peak'
    , pokes: ['Glalie'] 
    , minLevel: 20 
    , maxLevel: 20
    , unlocked: true
    }
    , pmd18: {
      name: 'Uproar Forest'
    , pokes: ['Venonat', 'Aipom', 'Seedot', 'Roselia', 'Nuzleaf', 'Mankey'] 
    , minLevel: 10 
    , maxLevel: 17
    , unlocked: true
    }
    , pmd19: {
      name: 'Magma Cavern'
    , pokes: ['Raticate', 'Sandshrew', 'Nidoqueen', 'Nidoking', 'Graveler', 'Magmar', 'Mawile', 'Arbok', 'Magcargo', 'Rhydon', 'Sandslash', 'Golem', 'Grimer', 'Onix'] 
    , minLevel: 15 
    , maxLevel: 30
    , unlocked: true
    }
    , pmd20: {
      name: 'Magma Cavern Pit'
    , pokes: ['Onix', 'Steelix'] 
    , minLevel: 25 
    , maxLevel: 30
    , unlocked: true
    }
    , pmd21: {
      name: 'Sky Tower'
    , pokes: ['Shedinja', 'Forretress', 'Shuppet', 'Masquerain', 'Lunatone', 'Duskull', 'Koffing', 'Ledian', 'Altaria', 'Solrock', 'Scizor', 'Dusclops', 'Venomoth', 'Aerodactyl', 'Flygon', 'Tropius'] 
    , minLevel: 18 
    , maxLevel: 28
    , unlocked: true
    }
    , pmd22: {
      name: 'Sky Tower Summit'
    , pokes: ['Aerodactyl', 'Flygon', 'Claydol', 'Tropius', 'Salamence', 'Metagross'] 
    , minLevel: 25 
    , maxLevel: 30
    , unlocked: true
    }
    , pmd23: {
      name: 'Howling Forest'
    , pokes: ['Azurill', 'Houndour', 'Poochyena', 'Whismur', 'Spoink', 'Furret', 'Shuckle', 'Pidgey', 'Loudred', 'Houndoom', 'Mightyena', 'Grumpig', 'Snorlax', 'Exeggcute'] 
    , minLevel: 10 
    , maxLevel: 25
    , unlocked: true
    }
    , pmd24: {
      name: 'Stormy Sea'
    , pokes: ['Wingull', 'Tentacool', 'Shellder', 'Omanyte', 'Seel', 'Anorith', 'Slowpoke', 'Spheal', 'Omastar', 'Grimer', 'Kabutops', 'Armaldo', 'Seadra', 'Starmie', 'Tentacruel', 'Sealeo', 'Carvanha'] 
    , minLevel: 18 
    , maxLevel: 35
    , unlocked: true
    }
    , pmd25: {
      name: 'Solar Cave'
    , pokes: ['Wynaut', 'Girafarig', 'Beldum', 'Drowzee', 'Natu', 'Spoink', 'Jynx', 'Abra', 'Meditite', 'Mr. Mime', 'Lunatone', 'Metang', 'Hypno', 'Kirlia', 'Wobbuffet', 'Chimecho', 'Kadabra', 'Medicham', 'Grumpig', 'Claydol'] 
    , minLevel: 16 
    , maxLevel: 35
    , unlocked: true
    }
    , pmd26: {
      name: 'Northern Range'
    , pokes: ['Hoothoot', 'Beautifly', 'Dodrio', 'Jumpluff', 'Ninjask', 'Spinarak', 'Swellow', 'Pidgeot', 'Ledian', 'Xatu', 'Fearow', 'Togetic', 'Noctowl', 'Seviper'] 
    , minLevel: 20 
    , maxLevel: 40
    , unlocked: true
    }
    , pmd27: {
      name: 'Pitfall Valley'
    , pokes: ['Pidgeot', 'Farfetch/d', 'Ledyba', 'Swellow', 'Hoppip', 'Butterfree', 'Raticate', 'Spearow', 'Doduo', 'Swablu', 'Yanma', 'Masquerain', 'Scyther', 'Skiploom', 'Aerodactyl'] 
    , minLevel: 8 
    , maxLevel: 40
    , unlocked: true
    }
    , pmd28: {
      name: 'Silver Trench'
    , pokes: ['Wingull', 'Tentacool', 'Shellder', 'Omanyte', 'Qwilfish', 'Kabuto', 'Corsola', 'Slowpoke', 'Seel', 'Spheal', 'Horsea', 'Anorith', 'Krabby', 'Staryu', 'Grimer', 'Omastar', 'Vaporeon', 'Kabutops', 'Sealeo', 'Kingler', 'Slowbro', 'Seadra', 'Carvanha', 'Tentacruel', 'Starmie', 'Armaldo', 'Wailmer', 'Luvdisc', 'Dratini', 'Slowking', 'Remoraid', 'Dewgong', 'Muk', 'Octillery', 'Sharpedo', 'Walrein', 'Clamperl', 'Chinchou', 'Kingdra', 'Gorebyss', 'Cloyster', 'Lileep', 'Relicanth', 'Lanturn', 'Cradily', 'Huntail'] 
    , minLevel: 18 
    , maxLevel: 45
    , unlocked: true
    }
    , pmd29: {
      name: 'Meteor Cave'
    , pokes: ['Deoxys-A', 'Deoxys-D', 'Deoxys-S'] 
    , minLevel: 35 
    , maxLevel: 35
    , unlocked: true
    }
    , pmd30: {
      name: 'Fiery Field'
    , pokes: ['Vulpix', 'Numel', 'Ursaring', 'Slugma', 'Magmar', 'Charmander', 'Magby', 'Torkoal', 'Rapidash', 'Flareon', 'Ditto', 'Camerupt', 'Quilava', 'Machoke', 'Magcargo', 'Combusken', 'Charmeleon'] 
    , minLevel: 22 
    , maxLevel: 40
    , unlocked: true
    }
    , pmd31: {
      name: 'Lightning Field'
    , pokes: ['Mareep', 'Electrike', 'Magnemite', 'Pikachu', 'Flaaffy', 'Plusle', 'Minun', 'Jolteon', 'Cacturne', 'Electrode', 'Elekid', 'Ampharos', 'Magneton', 'Tropius', 'Manectric', 'Raichu'] 
    , minLevel: 12 
    , maxLevel: 35
    , unlocked: true
    }
    , pmd32: {
      name: 'Northwind Field'
    , pokes: ['Poliwag', 'Jynx', 'Volbeat', 'Azumarill', 'Crawdaunt', 'Delcatty', 'Vaporeon', 'Poliwhirl', 'Muk', 'Delibird', 'Poliwrath', 'Golduck', 'Politoed', 'Wartortle', 'Croconaw', 'Absol'] 
    , minLevel: 22 
    , maxLevel: 50
    , unlocked: true
    }
    , pmd33: {
      name: 'Mt. Faraway'
    , pokes: ['Lunatone', 'Hitmonchan', 'Snorunt', 'Solrock', 'Azumarill', 'Golem', 'Marshtomp', 'Vigoroth', 'Parasect', 'Castform', 'Granbull', 'Weezing', 'Dugtrio', 'Croconaw', 'Glalie'] 
    , minLevel: 15 
    , maxLevel: 50
    , unlocked: true
    }
    , pmd34: {
      name: 'Western Cave'
    , pokes: ['Murkrow', 'Butterfree', 'Beedrill', 'Venonat', 'Snubbull', 'Ekans', 'Meowth', 'Smeargle', 'Bellossom', 'Venomoth', 'Exploud', 'Primeape', 'Igglybuff', 'Tauros', 'Miltank', 'Shiftry', 'Kangaskhan', 'Espeon', 'Arbok', 'Dodrio', 'Ivysaur', 'Umbreon', 'Bayleef', 'Pinsir', 'Aggron', 'Persian', 'Swalot', 'Hariyama', 'Lickitung', 'Grovyle', 'Blaziken', 'Skarmory', 'Absol', 'Feraligatr', 'Venusaur', 'Alakazam', 'Tyranitar', 'Arcanine', 'Typhlosion', 'Sceptile', 'Ninetales', 'Swampert', 'Machamp', 'Meganium', 'Steelix', 'Charizard', 'Blastoise'] 
    , minLevel: 20 
    , maxLevel: 55
    , unlocked: true
    }
    , pmd35: {
      name: 'Buried Relic'
    , pokes: ['Golbat', 'Sneasel', 'Wynaut', 'Raticate', 'Machop', 'Whismur', 'Hoothoot', 'Hitmonlee', 'Hitmonchan', 'Porygon', 'Gastly', 'Drowzee', 'Abra', 'Porygon2', 'Aron', 'Gulpin', 'Geodude', 'Noctowl', 'Ditto', 'Meditite', 'Wobbuffet', 'Hypno', 'Hitmontop', 'Shedinja', 'Makuhita', 'Sandshrew', 'Kadabra', 'Elekid', 'Mr. Mime', 'Pupitar', 'Rhyhorn', 'Arbok', 'Shiftry', 'Mawile', 'Graveler', 'Machoke', 'Haunter', 'Golem'] 
    , minLevel: 10 
    , maxLevel: 35
    , unlocked: true
    }
    , pmd36: {
      name: 'Wish Cave'
    , pokes: ['Bellsprout', 'Magnemite', 'Sunkern', 'Jigglypuff', 'Cleffa', 'Caterpie', 'Marill', 'Rattata', 'Togepi', 'Aron', 'Voltorb', 'Ralts', 'Meditite', 'Baltoy', 'Geodude', 'Natu', 'Beldum', 'Machop', 'Swinub', 'Skarmory', 'Trapinch', 'Spinarak', 'Electrike', 'Gligar', 'Nidoran m', 'Electabuzz', 'Manectric', 'Tauros', 'Abra', 'Murkrow', 'Ariados', 'Dunsparce', 'Nincada', 'Bagon', 'Golbat', 'Kadabra', 'Nidorina', 'Nidorino', 'Magmar', 'Illumise', 'Electrode', 'Forretress', 'Dugtrio', 'Hitmonlee', 'Hitmonchan', 'Numel', 'Ditto', 'Magcorgo', 'Torkoal', 'Rhyhorn', 'Piloswine', 'Arbok', 'Pineco', 'Lairon', 'Metang', 'Shelgon', 'Zangoose', 'Koffing', 'Rhydon', 'Graveler', 'Magby', 'Nidoqueen', 'Golem', 'Nidoking', 'Porygon2', 'Grimer', 'Camerupt', 'Shuppet', 'Hitmontop', 'Solrock', 'Weezing', 'Dusclops', 'Scizor', 'Flygon', 'Metagross', 'Claydol', 'Salamence'] 
    , minLevel: 1 
    , maxLevel: 28
    , unlocked: true
    }
    , pmd37: {
      name: 'Murky Cave'
    , pokes: ['Cascoon', 'Zubat', 'Venonat', 'Seviper', 'Grimer', 'Dustox', 'Golbat', 'Shedinja', 'Shuppet', 'Crobat', 'Misdreavus', 'Muk', 'Swalot'] 
    , minLevel: 8 
    , maxLevel: 36
    , unlocked: true
    }
    , pmd38: {
      name: 'Desert Region'
    , pokes: ['Sandshrew', 'Shedinja', 'Nosepass', 'Trapinch', 'Hitmontop', 'Nidoqueen', 'Baltoy', 'Sandslash', 'Gligar', 'Dusclops'] 
    , minLevel: 30 
    , maxLevel: 35
    , unlocked: true
    }
    , pmd39: {
      name: 'Southern Cavern'
    , pokes: ['Geodude', 'Diglett', 'Seedot', 'Cubone', 'Nidoking', 'Phanpy', 'Vibrava', 'Baltoy', 'Gligar', 'Larvitar', 'Ariados', 'Dugtrio', 'Marowak', 'Graveler', 'Rhyhorn', 'Flygon', 'Donphan', 'Pupitar', 'Golem', 'Onix', 'Rhydon'] 
    , minLevel: 22 
    , maxLevel: 40
    , unlocked: true
    }
    , pmd40: {
      name: 'Wyvern Hill'
    , pokes: ['Bagon', 'Dratini', 'Jumpluff', 'Altaria', 'Totodile', 'Ludicolo', 'Shelgon', 'Vibrava', 'Dragonair', 'Oddish', 'Salamence', 'Flygon', 'Dragonite'] 
    , minLevel: 20 
    , maxLevel: 40
    , unlocked: true
    }
    , pmd41: {
      name: 'Darknight Relic'
    , pokes: ['Shuppet', 'Gastly', 'Misdreavus', 'Shedinja', 'Sableye', 'Banette', 'Haunter', 'Duskull', 'Gengar'] 
    , minLevel: 25 
    , maxLevel: 35
    , unlocked: true
    }
    , pmd42: {
      name: 'Grand Sea'
    , pokes: ['Wingull', 'Tentacool', 'Qwilfish', 'Kabuto', 'Corsola', 'Slowpoke', 'Horsea', 'Dragonite', 'Anorith', 'Krabby', 'Staryu', 'Vaporeon', 'Tentacruel', 'Kabutops', 'Slowbro', 'Kingler', 'Seadra', 'Mantine'] 
    , minLevel: 15 
    , maxLevel: 35
    , unlocked: true
    }
    , pmd43: {
      name: 'Waterfall Pond'
    , pokes: ['Mudkip', 'Lotad', 'Poliwag', 'Goldeen', 'Barboach', 'Wooper', 'Surskit', 'Totodile', 'Corphish', 'Magikarp', 'Squirtle', 'Poliwhirl', 'Masquerian', 'Lombre', 'Marshtomp', 'Quagsire', 'Whiscash', 'Feebas', 'Poliwrath'] 
    , minLevel: 24 
    , maxLevel: 40
    , unlocked: true
    }
    , pmd44: {
      name: 'Unown Relic'
    , pokes: ['Unown'] 
    , minLevel: 20 
    , maxLevel: 20
    , unlocked: true
    }
    , pmd45: {
      name: 'Joyous Tower'
    , pokes: [] 
    , minLevel: 1 
    , maxLevel: 40
    , unlocked: true
    }
    , pmd46: {
      name: 'Far-off Sea'
    , pokes: [] 
    , minLevel: 14 
    , maxLevel: 17
    , unlocked: true
    }
    , pmd47: {
      name: 'Purity Forest'
    , pokes: [] 
    , minLevel: 14 
    , maxLevel: 17
    , unlocked: true
    }
    , pmd48: {
      name: 'Oddity Cave'
    , pokes: [] 
    , minLevel: 14 
    , maxLevel: 17
    , unlocked: true
    }
    , pmd49: {
      name: 'Remains Island'
    , pokes: [] 
    , minLevel: 14 
    , maxLevel: 17
    , unlocked: true
    }
    , pmd50: {
      name: 'Marvelous Sea'
    , pokes: [] 
    , minLevel: 14 
    , maxLevel: 17
    , unlocked: true
    }
    , pmd51: {
      name: 'Fantasy Strait'
    , pokes: [] 
    , minLevel: 14 
    , maxLevel: 17
    , unlocked: true
    }
    , pmd52: {
      name: 'Mt. Thunder Peak F3'
    , pokes: ['Zapdos'] 
    , minLevel: 25 
    , maxLevel: 45
    , unlocked: true
    }
    , pmd53: {
      name: 'Mt. Blaze Peak F3'
    , pokes: ['Moltres'] 
    , minLevel: 33 
    , maxLevel: 52
    , unlocked: true
    }
    , pmd54: {
      name: 'Frosty Grotto F5'
    , pokes: ['Articuno'] 
    , minLevel: 33 
    , maxLevel: 53
    , unlocked: true
    }
    , pmd55: {
      name: 'Magma Cavern Pit F3'
    , pokes: ['Groudon'] 
    , minLevel: 27 
    , maxLevel: 37
    , unlocked: true
    }
    , pmd56: {
      name: 'Sky Tower Summit F9'
    , pokes: ['Rayquaza'] 
    , minLevel: 35 
    , maxLevel: 45
    , unlocked: true
    }
    , pmd57: {
      name: 'Stormy Sea F40'
    , pokes: ['Kyogre'] 
    , minLevel: 25 
    , maxLevel: 25
    , unlocked: true
    }
    , pmd58: {
      name: 'Northern Range F25'
    , pokes: ['Latios'] 
    , minLevel: 30 
    , maxLevel: 30
    , unlocked: true
    }
    , pmd59: {
      name: 'Pitfall Valley F26'
    , pokes: ['Latias'] 
    , minLevel: 30 
    , maxLevel: 30
    , unlocked: true
    }
    , pmd60: {
      name: 'Silver Trench F99'
    , pokes: ['Lugia'] 
    , minLevel: 30 
    , maxLevel: 30
    , unlocked: true
    }
    , pmd61: {
      name: 'Meteor Cave F20'
    , pokes: ['Deoxys'] 
    , minLevel: 35 
    , maxLevel: 35
    , unlocked: true
    }
    , pmd62: {
      name: 'Fiery Field F30'
    , pokes: ['Entei'] 
    , minLevel: 45 
    , maxLevel: 45
    , unlocked: true
    }
    , pmd63: {
      name: 'Lightning Field F30'
    , pokes: ['Raikou'] 
    , minLevel: 45 
    , maxLevel: 45
    , unlocked: true
    }
    , pmd64: {
      name: 'Northwind Field F30'
    , pokes: ['Suicune'] 
    , minLevel: 45 
    , maxLevel: 45
    , unlocked: true
    }
    , pmd65: {
      name: 'Mt Faraway F40'
    , pokes: ['Ho-Oh'] 
    , minLevel: 50 
    , maxLevel: 50
    , unlocked: true
    }
    , pmd66: {
      name: 'Western Cave F99'
    , pokes: ['Mewtwo'] 
    , minLevel: 40 
    , maxLevel: 40
    , unlocked: true
    }
    , pmd67: {
      name: 'Buried Relic F15'
    , pokes: ['Regirock'] 
    , minLevel: 18 
    , maxLevel: 18
    , unlocked: true
    }
    , pmd68: {
      name: 'Buried Relic F25'
    , pokes: ['Regice'] 
    , minLevel: 23 
    , maxLevel: 23
    , unlocked: true
    }
    , pmd69: {
      name: 'Buried Relic F35'
    , pokes: ['Registeel'] 
    , minLevel: 25 
    , maxLevel: 25
    , unlocked: true
    }
    , pmd70: {
      name: 'Buried Relic F36-98'
    , pokes: ['Mew'] 
    , minLevel: 40 
    , maxLevel: 40
    , unlocked: true
    }
    , pmd71: {
      name: 'Wish Cave F99'
    , pokes: ['Jirachi'] 
    , minLevel: 40 
    , maxLevel: 40
    , unlocked: true
    }
    , pmd60: {
      name: 'Purity Forest F99'
    , pokes: ['Celebi'] 
    , minLevel: 45 
    , maxLevel: 45
    , unlocked: true
    }
    , pmd60: {
      name: 'Mt Freeze Peak F5'
    , pokes: ['A-Ninetales'] 
    , minLevel: 100 
    , maxLevel: 100
    , unlocked: true
    }
    , friendarea: {
      name: 'Aged Chamber'
    , pokes: ['Unown'] 
    , minLevel: 1 
    , maxLevel: 1
    , unlocked: true
    }
    , friendarea1: {
      name: 'Ancient Relic'
    , pokes: ['Aerodactyl', 'Baltoy', 'Claydol', 'Regirock', 'Regice', 'Registeel'] 
    , minLevel: 1 
    , maxLevel: 1
    , unlocked: true
    }
},
  ExplorersOfSpace: {
      pmd52: {
      name: 'Personality Quiz'
    , pokes: ['Bulbasaur', 'Charmander', 'Squirtle', 'Pikachu', 'Vulpix', 'Eevee', 'Chikorita', 'Cyndaquil', 'Totodile', 'Phanpy', 'Treecko', 'Torchic', 'Mudkip', 'Skitty', 'Turtwig', 'Chimchar', 'Piplup', 'Shinx', 'Munchlax', 'Riolu'] 
    , minLevel: 5
    , maxLevel: 5  
    , unlocked: true
    }
},
  AdventureSquad: {
      pmdj: {
      name: 'Blazing Adventure Squad'
    , pokes: ['Charmander', 'Vulpix', 'Growlithe', 'Eevee', 'Cyndaquil', 'Teddiursa', 'Torchic', 'Chimchar', 'Buneary'] 
    , minLevel: 5
    , maxLevel: 5  
    , unlocked: true
    }
    ,  pmdj16: {
      name: 'Stormy Adventure Squad'
    , pokes: ['Squirtle', 'Totodile', 'Wooper', 'Phanpy', 'Mudkip', 'Azurill', 'Wynaut', 'Piplup', 'Riolu'] 
    , minLevel: 5
    , maxLevel: 5  
    , unlocked: true
    }
    ,  pmdj32: {
      name: 'Light Adventure Squad'
    , pokes: ['Pikachu', 'Meowth', 'Psyduck', 'Pichu', 'Togepi', 'Mareep', 'Elekid', 'Shinx', 'Pachirisu'] 
    , minLevel: 5
    , maxLevel: 5  
    , unlocked: true
    }
},
  GatesToInfinity: {
      pmd301: {
      name: 'Personality Quiz'
    , pokes: ['Pikachu', 'Snivy', 'Tepig', 'Oshawott', 'Axew'] 
    , minLevel: 5
    , maxLevel: 5  
    , unlocked: true
    }
},
  SuperMysteryDungeon: {
      pmd401: {
      name: 'Personality Quiz'
    , pokes: ['Bulbasaur', 'Charmander', 'Squirtle', 'Pikachu', 'Chikorita', 'Cyndaquil', 'Totodile', 'Treecko', 'Torchic', 'Mudkip', 'Turtwig', 'Chimchar', 'Piplup', 'Riolu', 'Snivy', 'Tepig', 'Oshawott', 'Chespin', 'Fennekin', 'Froakie'] 
    , minLevel: 5
    , maxLevel: 5  
    , unlocked: true
    }
},
  CustomEvents: {
      customevent1: {
      name: 'Adventure Squad'
    , pokes: ['Magikarp'] 
    , minLevel: 5
    , maxLevel: 5  
    , unlocked: true
    }
}
}
