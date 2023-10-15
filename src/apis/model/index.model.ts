import { Result } from './base.model';

export interface AuthReqData {
  email: string;
  password: string;
}

export interface AuthResData {
  iat: string;
  exp: string;
  token: string;
}

export interface Product {
  entity_id: number,
  Category: string;
  ETA: string;
  RRP: {
    Standard: string;
  },
  RrpPrice: string;
  Vendor_Product: number,
  brand: string;
  bulky_item: string;
  cbm: string; 
  colour: string;
  cost: string; 
  currency: string;
  desc: string; 
  discontinued: string;
  discontinuedproduct: string;
  eancode: string;
  height: string;
  in_stock: string;
  length: string;
  price: string;
  product_status: number,
  sku: string;
  special_price: string; 
  special_price_end_date: string; 
  special_price_from_date: string; 
  status: string;
  stock_qty: number,
  title: string;
  updated_at: number,
  vendor_id: null,
  website_url: string; 
  weight: string; 
  width: string;
  zone_rates: {
    sku: string;
    act: string;
    nsw_m: string;
    nsw_r: string;
    nt_m: string;
    nt_r: string;
    qld_m: string;
    qld_r: string;
    remote: string;
    sa_m: string;
    sa_r: string;
    tas_m: string;
    tas_r: string;
    vic_m: string;
    vic_r: string;
    wa_m: string;
    wa_r: string;
    nz: string;
    group_id: string;
    created_at: string;
  },
  gallery: string[],
  freeshipping: string
}

export interface ProductReqData {
  page_no: number;
  limit: number;
}
