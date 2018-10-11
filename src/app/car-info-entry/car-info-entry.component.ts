import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import { CarEntry, CarMake, CarinfoService } from '../core/carinfo-service';
import { FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from '../core/notification-service/notification.service';
import { Router } from '@angular/router';
import { Subject, Observable, BehaviorSubject, defer, of } from 'rxjs';
import { publish, refCount, multicast, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-car-info-entry',
  templateUrl: './car-info-entry.component.html',
  styleUrls: ['./car-info-entry.component.scss']
})
export class CarInfoEntryComponent implements OnInit {

  submitted: boolean = false;
  lstCarMake: CarMake[];
  currentSelectedCarMake: CarMake;
  imageSizeLimit = 1024*1024*4;

  private formState:any;

  carEntryForm = this.fb.group({
    year: [(new Date).getFullYear(), [Validators.required, Validators.min(1885), Validators.pattern('[0-9]{4}'), Validators.max((new Date).getFullYear()+1)]],
    makeObj: [''],
    model: ['', Validators.required],
    color: [''],
    price: ['', [Validators.required, Validators.min(0), Validators.max(200000), Validators.pattern('[0-9]{1,7}')]],
    imageSize: [0, Validators.max(this.imageSizeLimit)],
    imageFile: [null]
  });


  constructor(private fb: FormBuilder, 
    private carInfoClient: CarinfoService, 
    //private notiClient: NotificationService,
    //private router: Router
    ) { }

  ngOnInit() {

    this.onChanges();

    this.carInfoClient.getCarmakes().subscribe(v => {

      this.lstCarMake = v;
      if (this.lstCarMake && this.lstCarMake.length > 0){
        this.currentSelectedCarMake = this.lstCarMake[0];
        this.carEntryForm.controls["makeObj"].setValue(this.currentSelectedCarMake);
        this.carEntryForm.controls["model"].setValue(this.currentSelectedCarMake.carModels[0].carModelId);
      }
    this.formState = this.carEntryForm.value;

    });
  }

  onChanges(): void {
    this.carEntryForm.get('makeObj').valueChanges.subscribe( (val: CarMake) => {
      this.currentSelectedCarMake = val;
      this.carEntryForm.controls["model"].setValue(val.carModels[0].carModelId);
    });
  }

  onFileChanged(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      console.log(event.target.files[0].size);
      const fileSize = event.target.files[0].size;
      this.carEntryForm.controls["imageSize"].setValue(fileSize);
      if (fileSize > this.imageSizeLimit){
        return;
      }
      
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        this.carEntryForm.patchValue({
          imageFile: reader.result
        });
      };
    }else{
      this.carEntryForm.patchValue({
        imageSize: 0,
        imageFile: reader.result
      });
    }

    
  }
  undo(){
    this.carEntryForm.patchValue(this.formState);
  }

  onSubmit(){

    this.submitted = true;

    console.log(this.carEntryForm.controls.imageSize.errors);
    if (this.carEntryForm.invalid){
      return;
    }

    const reqFormData = Object.assign({}, this.formState, this.carEntryForm.value);

    console.log(reqFormData);
    //return;
    this.carInfoClient.addCarEntry(
      new CarEntry({
        year: reqFormData.year,
        carModelId: reqFormData.model, 
        color: reqFormData.color,
        price: reqFormData.price, 
        imageBase64: reqFormData.imageFile
      })
    ).subscribe(
        (v) => {
          console.log(v.carId);
          this.formState = reqFormData;
          //this.notiClient.notify('Car Info Added');
          //this.router.navigateByUrl(`/display/${v.carId}`);
        } 
    )
  }

}
