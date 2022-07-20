/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    await knex('fragrances').del();
    await knex('fragrances').insert([
        {
            id: 1,
            list_name: 'Xerjoff-40-Knots-2012',
            display_name: '40 Knots',
            house: 'Xerjoff',
            collection: 'Join the Club',
            release: '2012',
            in_production: "yes",
            notes: "sea breeze, seawater, woody notes, honey",
            accords: "woody-spicy",
            longevity: 4,
            sillage: 4,
            gender: 4,
            value: 1,
            presentation: 5,
        },
        {
            id: 2,
            list_name: 'Tom-Ford-Tobacco-Vanille-2007',
            display_name: 'Tobacco Vanille',
            house: 'Tom Ford',
            collection: 'Private Blend',
            release: '2007',
            in_production: "yes",
            notes: "tobacco leaf, spicy notes, vanilla, cacao, tonka bean, tobacco blossom, dried fruits, woody notes",
            top_notes: "tobacco leaf, spicy notes",
            mid_notes: "vanilla, cacao, tonka bean, tobacco blossom",
            base_notes: "dried fruits, woody notes",
            accords: "sweet-spicy",
            longevity: 5,
            sillage: 4,
            gender: 3,
            value: 4,
            presentation: 4,
        },
        {
            id: 3,
            list_name: 'Dior-Sauvage-2015',
            display_name: 'Sauvage',
            house: 'Dior',
            collection: 'Sauvage',
            release: '2015',
            in_production: "yes",
            notes: "calabrian bergamot, pepper, sichuan pepper, lavender, pink pepper, vetiver, patchouli, geranium, elemi, ambroxan, cedar, labdanum",
            top_notes: "calabrian bergamot, pepper",
            mid_notes: "sichuan pepper, lavender, pink pepper, vetiver, patchouli, geranium, elemi",
            base_notes: "ambroxan, cedar, labdanum",
            accords: "fresh-spicy",
            longevity: 4,
            sillage: 3,
            gender: 5,
            value: 3,
            presentation: 3,
        }
    ]);
};