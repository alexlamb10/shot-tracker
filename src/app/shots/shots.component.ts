import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { combineLatest, map, Observable, startWith, tap } from 'rxjs';

@Component({
  selector: 'st-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.css']
})
export class ShotsComponent implements OnInit {

  // combined$: Observable<number>;
  form: FormGroup = this._fb.group({
    ftMakes: [0, [Validators.required, Validators.min(0)]],
    ftMisses: [0, [Validators.required, Validators.min(0)]],
    spotMakes: [0, [Validators.required, Validators.min(0)]],
    spotMisses: [0, [Validators.required, Validators.min(0)]],
    midMakes: [0, [Validators.required, Validators.min(0)]],
    midMisses: [0, [Validators.required, Validators.min(0)]],
    threeMakes: [0, [Validators.required, Validators.min(0)]],
    threeMisses: [0, [Validators.required, Validators.min(0)]],
    finisher: [0, [Validators.required, Validators.min(0)]],
    hustlePoints: [0, [Validators.min(0)]]
  });

  formTotal$: Observable<any> = this.form.valueChanges.pipe(
    startWith(this.form.value),
    tap((data) => console.log(data)),
    map((formValue) => {
      const totalFtShots = formValue.ftMakes + formValue.ftMisses;
      const totalSpotShots = formValue.spotMakes + formValue.spotMisses;
      const totalMidShots = formValue.midMakes + formValue.midMisses;
      const totalThreeShots = formValue.threeMakes + formValue.threeMisses;
    return {
      ftMakes: formValue.ftMakes,
      ftMisses: formValue.ftMisses,
      percentage: totalFtShots > 0 ? 100 *(formValue.ftMakes / totalFtShots) : 0,
      spotMakes: formValue.spotMakes,
      spotMisses: formValue.spotMisses,
      spotPercentage: totalSpotShots > 0 ? 100 *(formValue.spotMakes / totalSpotShots) : 0,
      midMakes: formValue.midMakes,
      midMisses: formValue.midMisses,
      midPercentage: totalMidShots > 0 ? 100 *(formValue.midMakes / totalMidShots) : 0,
      threeMakes: formValue.threeMakes,
      threeMisses: formValue.threeMisses,
      threePercentage: totalThreeShots > 0 ? 100 *(formValue.threeMakes / totalThreeShots) : 0,
    }
  }))

  constructor(private _fb: FormBuilder) { }

   players = [
    {id: 1, name: 'Alex Lamb'},
    {id: 2, name: 'Preston Lamb'},
    {id: 3, name: 'Zack Lamb'},
    {id: 4, name: 'Blake Lamb'},
    {id: 5, name: 'Jaren Lamb'}
    
  ]

  stats = {
    practice: null,
    ftMakes: null,
    ftMisses: null,
    spotMakes: null,
    spotMisses: null,
    midMakes: null,
    midMisses: null,
    threeMakes: null,
    threeMisses: null,
    hustle: null
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log('in onSubmit ' + form.valid);
    
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ' + field.valid);
    
  }

}

// import { Component } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { combineLatest, map, Observable, startWith, tap } from 'rxjs';

// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
// })

// Reactive Forms

// export class AppComponent {
//   continentSelect = new FormControl();
//   currentSelection: string;
//   combined$: Observable<number>;
//   form: FormGroup = this._fb.group({
//     ftMakes: [0, [Validators.required, Validators.min(5)]],
//     ftMisses: 0
//   });
  // formTotal$: Observable<any> = this.form.valueChanges.pipe(
  //   startWith(this.form.value),
  //   tap((data) => console.log(data)),
  //   map((formValue) => {
  //     const totalFtShots = formValue.ftMakes + formValue.ftMisses;
  //   return {
  //     ftMakes: formValue.ftMakes,
  //     ftMisses: formValue.ftMisses,
  //     percentage: totalFtShots > 0 ? 100 *(formValue.ftMakes / totalFtShots) : 0
  //   }
  // }))

//   constructor(private _fb: FormBuilder) {
//     this.continentSelect.valueChanges.subscribe((newValue) => {
//       this.currentSelection = newValue;
//     });
//     this.numberSelect.valueChanges.subscribe((newNumber) => {
//       this.currentNumber = newNumber;
//     })
//     this.numberSelect2.valueChanges.subscribe((newNumber) => {
//       this.currentNumber2 = newNumber;
//     })

//     this.combined$ = combineLatest([this.numberSelect.valueChanges.pipe(startWith(10)), this.numberSelect2.valueChanges.pipe(startWith(0))]).pipe(
//       map(([num1, num2]) => num1 + num2),
//     )
//   }

//   currentNumber = 3;
//   currentNumber2 = 5;
//   addedNum = this.currentNumber + this.currentNumber2

//   numberSelect = new FormControl(0);
//   numberSelect2 = new FormControl(0);

// }
