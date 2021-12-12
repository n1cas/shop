export interface Product {
    name: string;
    description: string;
    price: number;
    category: Category ;
    isAvailable: boolean;
  }
  

  export enum Category {
      table = 'table',
      phone = 'phone',
      laptop = 'laptop',
  }