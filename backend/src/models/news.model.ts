export interface News {
    id?: number;
    user_id: number;
    title: string;
    content: string;
    image_url?: string | null;
    status: "draft" | "published";
    created_at?: string;
    updated_at?: string;
}
