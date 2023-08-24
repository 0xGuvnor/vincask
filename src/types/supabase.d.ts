export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      customers: {
        Row: {
          address1: string | null;
          address2: string | null;
          email: string;
          id: number;
          name: string;
          phone: string | null;
          postal_code: string | null;
          redemption_type: string;
          wallet_address: string;
        };
        Insert: {
          address1?: string | null;
          address2?: string | null;
          email: string;
          id?: never;
          name: string;
          phone?: string | null;
          postal_code?: string | null;
          redemption_type: string;
          wallet_address: string;
        };
        Update: {
          address1?: string | null;
          address2?: string | null;
          email?: string;
          id?: never;
          name?: string;
          phone?: string | null;
          postal_code?: string | null;
          redemption_type?: string;
          wallet_address?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
