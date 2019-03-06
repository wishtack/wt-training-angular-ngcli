import { Sandwich, SandwichConstraint } from './sandwich';

export class SandwichStore {

    private _sandwichList: Sandwich[] = [];

    addSandwich(sandwich: Sandwich) {
        this._sandwichList = [...this._sandwichList, sandwich];
    }

    getSandwichList(): Sandwich[] {
        return this._sandwichList;
    }

    removeSandwich(sandwichId: string) {
        this._sandwichList = this._sandwichList
            .filter(sandwich => sandwich.id !== sandwichId);
    }

    searchSandwichesByConstraint(sandwichConstraintList: SandwichConstraint[]): Sandwich[] {
        throw new Error('😱 Not implemented yet!');
    }

    likeSandwich(sandwichId: string) {

        this._sandwichList = this._sandwichList
            .map(sandwich => {

                if (sandwich.id === sandwichId) {
                    return new Sandwich({
                        ...sandwich,
                        score: sandwich.score + 1
                    });
                }

                return sandwich;

            });

    }
}
