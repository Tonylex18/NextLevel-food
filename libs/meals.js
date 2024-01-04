import sql from 'better-sqlite3';

const db = sql('meals.db');

export async  function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // throw new error('Fetching meals data failed!')
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {

    // return db.prepare('SELECT * FROM meal WHERE slug = slug') 
    // The above line of code will open you up to sql injection

    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) // The prefer way to avoid sql injection
}