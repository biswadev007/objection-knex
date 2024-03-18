/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // truncate all existing table
  await knex.raw('TRUNCATE TABLE "user" CASCADE');
  await knex.raw('TRUNCATE TABLE "channel" CASCADE');
  await knex.raw('TRUNCATE TABLE "video" CASCADE');

  await knex('channel').insert([
    {
      id: 1,
      name: 'Channel1',
    },
    {
      id: 2,
      name: 'Channel2',
    },
  ]);

  await knex('user').insert([
    {
      id: 1,
      name: 'John Deo',
      email: 'deo@yopmain.com',
      channelId: 1
    },
    {
      id: 2,
      name: 'Jackson Bird',
      email: 'bird@yopmail.com',
      channelId: 2
    },
    {
      id: 3,
      name: 'Biswajit Paul',
      email: 'paul@yopmail.com'
    },
  ]);

  return knex('video').insert([
    {
      id: 1,
      title: 'Test 1',
      channelId: 1
    },
    {
      id: 2,
      title: 'Testvideo 2',
      channelId: 1
    },
    {
      id: 3,
      title: 'Testvdo3',
      channelId: 2
    }
  ])
};
