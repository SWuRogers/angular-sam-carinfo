export class CarMake{
    carmakeId: number;
    carmakeName: string;
    carModels : CarModel[];
  }
  
  export class CarModel{
    carModelId: number;
    carModelName: string;
    carmake: CarMake;
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
  
  export class CarInfo{
    carId: number;
    carMakeName: string;
    carModelName: string;
    year: number;
    color: string;
    price: number;
    imageBase64: string; 
  }