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
