export interface Product{
    id: number;
    name: string;
    price: number;
    imageParth: string
}

export interface CartItem {
    product: Product;
    qty: number;
}





