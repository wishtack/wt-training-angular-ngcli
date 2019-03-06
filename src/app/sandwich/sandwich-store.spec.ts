/**
 *
 * (c) 2013-2019 Wishtack
 *
 */


import { Sandwich, SandwichConstraint } from './sandwich';
import { SandwichStore } from './sandwich-store';

describe('SandwichStore', () => {

    let sandwichStore: SandwichStore;
    let sandwich1: Sandwich;
    let sandwich2: Sandwich;
    let sandwich3: Sandwich;

    beforeEach(() => {

        sandwichStore = new SandwichStore();

        sandwich1 = new Sandwich({
            id: 'jambon-beurre',
            name: 'Jambon beurre'
        });
        sandwich2 = new Sandwich({
            id: 'le-vert',
            name: 'Le vert',
            constraintList: [
                SandwichConstraint.Vegetarian
            ]
        });
        sandwich3 = new Sandwich({
            id: 'sans-gout',
            name: 'Sans Gout',
            constraintList: [
                SandwichConstraint.GlutenFree,
                SandwichConstraint.Vegan,
                SandwichConstraint.Vegetarian,
            ]
        });

    });

    it('should add sandwiches', () => {

        const emptySandwichList = sandwichStore.getSandwichList();

        sandwichStore.addSandwich(sandwich1);
        sandwichStore.addSandwich(sandwich2);
        sandwichStore.addSandwich(sandwich3);

        const sandwichList = sandwichStore.getSandwichList();

        expect(emptySandwichList).toEqual([]);

        expect(sandwichList).toEqual([
            sandwich1,
            sandwich2,
            sandwich3
        ]);

    });

    it('should remove sandwiches', () => {

        sandwichStore.addSandwich(sandwich1);
        sandwichStore.addSandwich(sandwich2);
        sandwichStore.addSandwich(sandwich3);

        sandwichStore.removeSandwich(sandwich2.id);

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

    it('should like a sandwich', () => {

        sandwichStore.addSandwich(sandwich1);
        sandwichStore.addSandwich(sandwich2);
        sandwichStore.addSandwich(sandwich3);

        sandwichStore.likeSandwich(sandwich1.id);
        sandwichStore.likeSandwich(sandwich1.id);

        const sandwichList = sandwichStore.getSandwichList();

        expect(sandwichList[0].score).toEqual(2);

    });

});
