
exports.seed = function(knex, Promise) {

  const text1 = [
    "Think about it: Dale has been using the pseudonym for years. It's one of the few things he's actually committed to, along with Joseph, Nancy and guns. The ONE time someone named 'Rusty Shackleford' comes along just HAPPENS to be the episode where he fakes his death? The REAL Shackleford - Dale - would know that the invading Mongolians of 2087 would try to take him out, so he had to fake his death in order to evade them.",
  ].join("\n")

  const text2 = [
    "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.",
    "The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.",
    "To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more",
  ].join("\n\n")

  const text3 = [
    "Who else loves Bill???",
  ].join("\n\n")

  return knex('comments').del()
    .then(() => knex('posts').del())
    .then(function () {
      return Promise.all([
        createPost(
          'Rusty Shackleford IS Dale. Dale is Rusty Shackleford!',
          text1,
          'Lady Bird',
          'http://cdn.niketalk.com/2/2e/200x400px-LL-2e78e088_80590900.jpeg',
          new Date(2004, 12, 17)
        ),
        createPost(
          'Favorite KOTH moments GO',
          text2,
          'PurseSnatcher',
          'https://uproxx.files.wordpress.com/2015/02/bobby-hill-king-of-the-hill.png?w=650&h=492',
          new Date(2011, 11, 11)
        ),
        createPost(
          "Bill is the best!!1!1",
          text3,
          'Definitely Not Bill',
          'https://pbs.twimg.com/profile_images/1646674059/image_400x400.jpg',
          new Date(2008, 5, 12)
        ),
      ])
    })
    .then(function (postIds) {
      return Promise.all([
        knex('comments').insert({post_id: postIds[0], content: 'Firsties!', image_url: 'https://s-media-cache-ak0.pinimg.com/originals/8f/4f/eb/8f4feb79103aec2f94ea126acd9e4bc7.jpg'}),
        knex('comments').insert({post_id: postIds[0], content: 'I did it for the lulz', image_url: 'https://s-media-cache-ak0.pinimg.com/originals/8f/4f/eb/8f4feb79103aec2f94ea126acd9e4bc7.jpg'}),
        knex('comments').insert({post_id: postIds[1], content: 'The best moment is by far the episode your author name references', image_url: 'https://s-media-cache-ak0.pinimg.com/originals/8f/4f/eb/8f4feb79103aec2f94ea126acd9e4bc7.jpg'}),
        knex('comments').insert({post_id: postIds[1], content: 'THAT\'S MY PURSE', image_url: 'https://pbs.twimg.com/profile_images/1203433008/image_400x400.jpg'}),
        knex('comments').insert({post_id: postIds[1], content: 'I DON\'T KNOW YOU!', image_url: 'http://unrealitymag.com/wp-content/uploads/2012/07/rsz_luanne-platter.jpg'}),
        knex('comments').insert({post_id: postIds[1], content: 'Any non-bill-centric episode works', image_url: 'http://movieboozer.com/wp-content/uploads/2013/07/boomhauer.png'}),
        knex('comments').insert({post_id: postIds[1], content: 'Dancing Dogs! Don\'t remember the name of the episode.', image_url: 'https://s-media-cache-ak0.pinimg.com/originals/8f/4f/eb/8f4feb79103aec2f94ea126acd9e4bc7.jpg'}),
        knex('comments').insert({post_id: postIds[1], content: 'The feels I get with that episode where Hank tells Mr Strickland he loves him...', image_url: 'https://s-media-cache-ak0.pinimg.com/originals/8f/4f/eb/8f4feb79103aec2f94ea126acd9e4bc7.jpg'}),
        knex('comments').insert({post_id: postIds[2], content: 'This comment thread is so lonely', image_url: 'https://s-media-cache-ak0.pinimg.com/originals/8f/4f/eb/8f4feb79103aec2f94ea126acd9e4bc7.jpg'}),
      ])
    })

  function createPost(title, body, author, image_url, created_at) {
    return knex('posts')
      .insert({title, body, author, image_url, created_at})
      .returning('id')
      .then(ids => ids[0])
  }
};
