export interface CarMake{
    carMakeId: number;
    carMakeName: string;
    carModels : CarModel[];
  }
  
  export interface CarModel{
    carModelId: number;
    carModelName: string;
    carmake: CarMake;
  }
  
  
  export class CarEntry1{
    carId: number;
    carModelId: number;
    year: number;
    color: string;
    price: number;
    imageBase64: string; 

    constructor(myObj:{carModelId?:number, year?:number, color?: string, price?: number, imageBase64?:string}={}){
      this.carId = 0;
      //this.carModelId = obj.carModelId || 0;

      
    }
  }

  export class CarEntry{
    constructor(obj?: any){
      this.carId = obj && obj.id || 0;
      this.carModelId = obj && obj.carModelId || 0;
      this.year = obj && obj.year || null;
      this.color = obj && obj.color || null;
      this.price = obj && obj.price || null;
      this.imageBase64 = obj && obj.imageBase64 || null;

      console.log(`${this.carModelId}|${this.year}|${this.color}|${this.price}`);
    }
    carId: number;
    carModelId: number;
    year: number;
    color: string;
    price: number;
    imageBase64: string; 

  }
  
  export interface CarInfo{
    carId: number;
    carMakeName: string;
    carModelName: string;
    year: number;
    color: string;
    price: number;
    imageBase64: string; 
  }