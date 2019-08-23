export interface Quote {
    id: string | number; //si sur mongoDB ou sur MySQL
    categories: string[];    
    icon_url: string;
    url: string;
    value: string;
    created_at: Date;
    updated_at: Date ;    
}

