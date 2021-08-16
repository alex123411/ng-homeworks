import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { FamilyService } from '../../services/family.service';

@Component({
  selector: 'lab-js-add-family',
  templateUrl: './add-family.component.html',
  styleUrls: ['./add-family.component.scss']
})
export class AddFamilyComponent implements OnInit {
  public familyForm: FormGroup;
  public get children() {
    return this.familyForm.get('children') as FormArray;
  }
  public constructor(
    private readonly familyService: FamilyService
  ) {

  }
  private createMember() {
    return new FormGroup({
      name: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required])
    });
  }

  public ngOnInit(): void {
    this.familyForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      father: this.createMember(),
      mother: this.createMember(),
      children: new FormArray([this.createMember()]) 
    })
  }
  public addChild() {
    const child = this.createMember()
    this.children.push(child)
  }
  public removeChild(index: number) {
    this.children.removeAt(index)
  }
  public submit() {
    this.familyService.addFamily$(this.familyForm.value);
  }
}
