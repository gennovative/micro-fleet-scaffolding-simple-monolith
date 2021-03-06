const fs = require('fs')
const path = require('path')
const util = require('util')

const readFileAsync = util.promisify(fs.readFile)

exports.up = async function(knex) {
    const schema = knex.schema

    console.log('** Dropping tables **')
    await Promise.all([
        schema.dropTableIfExists('mcft_users'),
    ])

    const sql = await readFileAsync(path.resolve(__dirname, '../sql/functions.pgsql'), 'utf8')
    console.log('** Executing custom SQL **')
    await schema.raw(sql)

    console.log('** Creating tables **')
    await users()

    
    async function users() {
        await schema.createTable('mcft_users', tbl => {
            tbl.bigInteger('id')
                .primary()
                .defaultTo(knex.raw("public.next_id('mcft_users')"))
            tbl.bigInteger('tenant_id')

            tbl.string('name', 100).notNullable().index()
            tbl.string('status', 20).defaultTo('active').notNullable()
        })

        await schema.raw('ALTER TABLE public.mcft_users' +
            " ADD CONSTRAINT mcft_users_status CHECK (status::text = ANY (ARRAY['active'::text, 'locked'::text, 'deleted'::text]))")
    }

};

exports.down = function(knex) {
    
};
