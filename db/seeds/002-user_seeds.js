/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {username: 'cyborgNinja', user_email: 'cyborgninja@hothotmailmail.com', hashed_password: 'preBcrypt pass1'},
    {username: 'bigBoss1', user_email: 'mrBig_boss@dmail.com', hashed_password: 'preBcryptPass2'},
    {username: 'solidSnakeMan', user_email: 'notLiquidSnake@ggmail.com', hashed_password: 'preBcryptPASS3'},
  ]);
};
