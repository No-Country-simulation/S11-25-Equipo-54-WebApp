export interface Cart{
    id?: number;
    user_id: number;
}

export interface CartItem{
    id?: number;
    cart_id: number;
    product_id: number;
    quantity: number ;
}