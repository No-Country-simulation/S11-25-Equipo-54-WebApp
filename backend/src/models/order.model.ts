export interface Order {
    id?: number;
    user_id: number;
    total: number;
}

export interface OrderItem{
    id?: number;
    order_id: number;
    product_id: number;
    quantity: number;
    price: number;
}