
export interface TProduct {
    name: string;
    category: string;
    title: string;
    image: string[];
    shortDescription: string;
    description: string[];
    price: number;
    discount: number;
    rating: number;
    availability: "inStock" | "pre-order" | "upcoming";
    brand: string;
    type: string;
    color: string[];
    materials: string;
    quantity: number;
    order?: number;
    isDelete: boolean;
    specification: string;
    shoppingInfo: string;
    sellerProfile?:string
  }
  