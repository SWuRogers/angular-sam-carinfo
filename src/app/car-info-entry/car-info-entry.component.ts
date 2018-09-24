import { Component, OnInit } from '@angular/core';
import { CarEntry, CarMake, CarinfoService } from '../core/carinfo-service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from '../core/notification-service/notification.service';
import { Router } from '@angular/router';


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
    private notiClient: NotificationService,
    private router: Router) { }

  ngOnInit() {
    this.carInfoClient.getCarmakes().subscribe(v => {
      this.lstCarMake = v;
      if (this.lstCarMake && this.lstCarMake.length > 0){
        this.currentSelectedCarMake = this.lstCarMake[0];
        this.carEntryForm.controls["makeObj"].setValue(this.currentSelectedCarMake);
        this.carEntryForm.controls["model"].setValue(this.currentSelectedCarMake.carModels[0].carModelId);
      }
    });
  }

  onMakeChanged(){
    this.currentSelectedCarMake = this.carEntryForm.controls["makeObj"].value;
    this.carEntryForm.controls["model"].setValue(this.currentSelectedCarMake.carModels[0].carModelId);
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
        ;
      };
  }
    
  }

  onSubmit(){
    this.submitted = true;

    console.log(this.carEntryForm.controls.imageSize.errors);
    if (this.carEntryForm.invalid){
      return;
    }

    this.carInfoClient.addCarEntry(
      new CarEntry({
        year: this.carEntryForm.get("year").value,
        carModelId: this.carEntryForm.get("model").value, 
        color: this.carEntryForm.get("color").value,
        price: this.carEntryForm.get("price").value, 
        imageBase64: this.carEntryForm.get("imageFile").value
      })
    ).subscribe(
        (v) => {
          console.log(v.carId);
          this.notiClient.notify('Car Info Added');
          this.router.navigateByUrl(`/display/${v.carId}`);
        } 
    )
  }

}
