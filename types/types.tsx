// Product related types
export interface Product {
  id: string;
  sku: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice: number | null;
  category: string;
  brand: string;
  type: string;
  tags: string[];
  color: string;
  size: string;
  gender: string;
  material: string;
  weight: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  images: ProductImage[];
  variants: ProductVariant[];
  ratings: ProductRatings;
  isInStock: boolean;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductImage {
  url: string;
  alt: string;
}

export interface ProductVariant {
  sku: string;
  size: string;
  color: string;
  inventory: number;
}

export interface ProductRatings {
  average: number;
  count: number;
}

// User related types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string; // Hashed password
  role: UserRole;
  addresses: Address[];
  orders: Order[];
  wishlist: string[]; // Array of product IDs
  createdAt: string;
  updatedAt: string;
}

export enum UserRole {
  Customer = 'customer',
  Admin = 'admin',
}

export interface Address {
  id: string;
  userId: string;
  type: AddressType;
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  isDefault: boolean;
}

export enum AddressType {
  Billing = 'billing',
  Shipping = 'shipping',
}

// Order related types
export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  shippingAddress: Address;
  billingAddress: Address;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  productId: string;
  variantSku: string;
  quantity: number;
  price: number;
  total: number;
}

export enum OrderStatus {
  Pending = 'pending',
  Processing = 'processing',
  Shipped = 'shipped',
  Delivered = 'delivered',
  Cancelled = 'cancelled',
}

export enum PaymentStatus {
  Pending = 'pending',
  Paid = 'paid',
  Failed = 'failed',
  Refunded = 'refunded',
}

// Cart related types
export interface Cart {
  id: string;
  userId?: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  productId: string;
  variantSku: string;
  quantity: number;
  price: number;
  total: number;
}

// Review related types
export interface Review {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

// Coupon related types
export interface Coupon {
  id: string;
  code: string;
  type: CouponType;
  value: number;
  minPurchase: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

export enum CouponType {
  Percentage = 'percentage',
  FixedAmount = 'fixed_amount',
}

// Category related types
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parentId?: string;
  image?: string;
}

// Search related types
export interface SearchFilters {
  category?: string;
  brand?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  colors?: string[];
  sizes?: string[];
  tags?: string[];
  sortBy?: SortOption;
  page?: number;
  limit?: number;
}

export enum SortOption {
  PriceLowToHigh = 'price_asc',
  PriceHighToLow = 'price_desc',
  Newest = 'created_at_desc',
  Popularity = 'popularity_desc',
  Rating = 'rating_desc',
}

// Wishlist related types
export interface Wishlist {
  id: string;
  userId: string;
  products: string[]; // Array of product IDs
}

// Inventory related types
export interface InventoryItem {
  sku: string;
  quantity: number;
  lowStockThreshold: number;
  lastRestocked: string;
}

// Shipping related types
export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDeliveryDays: number;
}

// Payment related types
export interface PaymentMethod {
  id: string;
  type: PaymentType;
  cardBrand?: string;
  last4?: string;
  expiryMonth?: number;
  expiryYear?: number;
}

export enum PaymentType {
  CreditCard = 'credit_card',
  PayPal = 'paypal',
  BankTransfer = 'bank_transfer',
}

// SEO related types
export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
