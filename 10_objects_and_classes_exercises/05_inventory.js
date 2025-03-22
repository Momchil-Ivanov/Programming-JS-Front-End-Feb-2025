function registerHeroes(input) {
    const heroes = [];

    input.forEach(heroString => {
        const [name, level, items] = heroString.split(' / ');
        heroes.push({
            name: name.trim(),
            level: Number(level.trim()),
            items: items ? items.split(',').map(item => item.trim()) : []
        });
    });

    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    });
}

// registerHeroes([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ]);

// registerHeroes([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
// ]);
