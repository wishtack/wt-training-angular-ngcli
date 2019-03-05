/**
 *
 * (c) 2013-2019 Wishtack
 *
 */


enum SandwichConstraint {
    GlutenFree = 'gluten-free',
    Vegan = 'vegan',
    Vegetarian = 'vegetarian'
}

describe('SandwichStore', () => {

    let sandwichStore: SandwichStore;
    let sandwich1: Sandwich;
    let sandwich2: Sandwich;
    let sandwich3: Sandwich;

    beforeEach(() => {

        sandwichStore = new SandwichStore();

        sandwich1 = new Sandwich('Jambon beurre');
        sandwich2 = new Sandwich('Le vert', [
            SandwichConstraint.Vegetarian
        ]);
        sandwich3 = new Sandwich('Sans Gout', [
            SandwichConstraint.GlutenFree,
            SandwichConstraint.Vegan,
            SandwichConstraint.Vegetarian,
        ]);

    });

    xit('should add sandwiches', () => {

        sandwichStore.addSandwich(sandwich1);
        sandwichStore.addSandwich(sandwich2);
        sandwichStore.addSandwich(sandwich3);

        const sandwichList = sandwichStore.getSandwichList();

        expect(sandwichList).toEqual([
            sandwich1,
            sandwich2,
            sandwich3
        ]);

    });

    xit('should remove sandwiches', () => {

        sandwichStore.addSandwich(sandwich1);
        sandwichStore.addSandwich(sandwich2);
        sandwichStore.addSandwich(sandwich3);

        sandwichStore.removeSandwich(sandwich2);

        const sandwichList = sandwichStore.getSandwichList();

        expect(sandwichList).toEqual([
            sandwich1,
            sandwich3
        ]);

    });

    xit('should search a sandwich by constraints', () => {

        sandwichStore.addSandwich(sandwich1);
        sandwichStore.addSandwich(sandwich2);
        sandwichStore.addSandwich(sandwich3);

        const sandwichList = sandwichStore.searchSandwichesByConstraint([
            SandwichConstraint.Vegetarian
        ]);

        expect(sandwichList).toEqual([
            sandwich2,
            sandwich3
        ]);

    });

    xit('should like a sandwich', () => {
        throw new Error('😱 Not implemented yet!');
    });

});
