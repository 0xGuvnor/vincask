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
      About_Affiliated_Companies: {
        Row: {
          company_description: string;
          company_name: string;
          id: number;
          website: string;
        };
        Insert: {
          company_description: string;
          company_name: string;
          id?: number;
          website: string;
        };
        Update: {
          company_description?: string;
          company_name?: string;
          id?: number;
          website?: string;
        };
        Relationships: [];
      };
      About_Collage_Descriptions: {
        Row: {
          description: string;
          id: number;
        };
        Insert: {
          description: string;
          id?: number;
        };
        Update: {
          description?: string;
          id?: number;
        };
        Relationships: [];
      };
      About_Timeline: {
        Row: {
          date: string;
          description: string;
          id: number;
          title: string;
        };
        Insert: {
          date: string;
          description: string;
          id?: number;
          title: string;
        };
        Update: {
          date?: string;
          description?: string;
          id?: number;
          title?: string;
        };
        Relationships: [];
      };
      Contact_FAQs: {
        Row: {
          content: string;
          header: string;
          id: number;
        };
        Insert: {
          content: string;
          header: string;
          id?: number;
        };
        Update: {
          content?: string;
          header?: string;
          id?: number;
        };
        Relationships: [];
      };
      customers: {
        Row: {
          address1: string | null;
          address2: string | null;
          datetime_submitted: string;
          email: string;
          id: number;
          message_hash: string;
          name: string;
          phone: string | null;
          postal_code: string | null;
          redeem_tx_passed: boolean;
          redemption_type: string;
          selected_nfts: number[] | null;
          wallet_address: string;
        };
        Insert: {
          address1?: string | null;
          address2?: string | null;
          datetime_submitted?: string;
          email: string;
          id?: never;
          message_hash: string;
          name: string;
          phone?: string | null;
          postal_code?: string | null;
          redeem_tx_passed?: boolean;
          redemption_type: string;
          selected_nfts?: number[] | null;
          wallet_address: string;
        };
        Update: {
          address1?: string | null;
          address2?: string | null;
          datetime_submitted?: string;
          email?: string;
          id?: never;
          message_hash?: string;
          name?: string;
          phone?: string | null;
          postal_code?: string | null;
          redeem_tx_passed?: boolean;
          redemption_type?: string;
          selected_nfts?: number[] | null;
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
