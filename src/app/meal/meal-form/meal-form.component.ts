import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Meal, MealType } from '../meal';
import { createNameControl, rangeValidator } from '../meal-list/meal-list.component';

@Component({
    selector: 'wt-meal-form',
    templateUrl: './meal-form.component.html',
    styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent {

    @Output() mealSubmit = new EventEmitter<Meal>();

    mealForm = new FormGroup({
        name: createNameControl(),
        price: new FormControl(null, [
            rangeValidator(5, 10)
        ]),
        type: new FormControl(null)
    }, [
        (control) => {

            if (control.value.type === MealType.desert && control.value.price > 6) {
                return {
                    wtf: true
                };
            }

            return null;

        }
    ]);

    submitMeal() {
        const meal = new Meal(this.mealForm.value);
        this.mealSubmit.emit(meal);
        this.mealForm.reset();
    }

}
