
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table => {
    table.increments()
    table.text("content")
    table.string("image_url").defaultTo('https://s-media-cache-ak0.pinimg.com/originals/8f/4f/eb/8f4feb79103aec2f94ea126acd9e4bc7.jpg')
    table.integer("post_id").index().references("id").inTable("posts").onDelete("cascade").notNull()
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
}
