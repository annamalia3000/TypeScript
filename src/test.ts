import Cart from './cart';
import MovieInterface from './MovieInterface';
import Movie from './Movie';

test('new card schould be empty', () => {
    const cart = new Cart();

    expect(cart.items.length).toBe(0);
});

test('schould add items in the card', () => {
    const cart = new Cart();
    const movie = new Movie("Мстители", 2012, "США", "Avengers Assemble!", 12, "фантастика", 137);
    cart.add(movie);

    expect(cart.items.length).toBe(1);
});

test('schould return items', () => {
    const cart = new Cart();
    const movie = new Movie("Мстители", 2012, "США", "Avengers Assemble!", 12, "фантастика", 137);
    cart.add(movie);
    const items = cart.getAll();

    expect(items).toContainEqual(movie);
});

test('should calculate total sum correctly', () => {
    const cart = new Cart();
    const movie1 = new Movie("Мстители", 2012, "США", "Avengers Assemble!", 12, "фантастика", 137, 100);
    const movie2 = new Movie("Железный человек", 2008, "США", "Iron Man", 15, "фантастика", 126, 300);

    cart.add(movie1);
    cart.add(movie2);


    expect(cart.countSum()).toBe(400); 
});

test('should calculate discount correctly', () => {
    const cart = new Cart();
    const movie1 = new Movie("Мстители", 2012, "США", "Avengers Assemble!", 12, "фантастика", 137, 100);
    const movie2 = new Movie("Железный человек", 2008, "США", "Iron Man", 15, "фантастика", 126, 300);

    cart.add(movie1);
    cart.add(movie2);


    expect(cart.countDiscount(10)).toBe(360); 
});

test('should remove item by id', () => {
    const cart = new Cart();
    const movie = new Movie("Мстители", 2012, "США", "Avengers Assemble!", 12, "фантастика", 137);

    cart.add(movie);
    cart.removeById(12);

    expect(cart.getAll().length).toBe(0);
});

test('should throw new error if id is not existed', () => {
    const cart = new Cart();
    const movie = new Movie("Мстители", 2012, "США", "Avengers Assemble!", 12, "фантастика", 137);

    cart.add(movie);

    expect(() => cart.removeById(122)).toThrowError(`Item with id 122 not found in cart`);
});

