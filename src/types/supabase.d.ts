export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      About_Affiliated_Companies: {
        Row: {
          company_description: string
          company_name: string
          id: number
          website: string
        }
        Insert: {
          company_description: string
          company_name: string
          id?: number
          website: string
        }
        Update: {
          company_description?: string
          company_name?: string
          id?: number
          website?: string
        }
        Relationships: []
      }
      About_Collage_Descriptions: {
        Row: {
          description: string
          id: number
        }
        Insert: {
          description: string
          id?: number
        }
        Update: {
          description?: string
          id?: number
        }
        Relationships: []
      }
      About_Timeline: {
        Row: {
          date: string
          description: string
          id: number
          title: string
        }
        Insert: {
          date: string
          description: string
          id?: number
          title: string
        }
        Update: {
          date?: string
          description?: string
          id?: number
          title?: string
        }
        Relationships: []
      }
      Contact_FAQs: {
        Row: {
          content: string
          header: string
          id: number
        }
        Insert: {
          content: string
          header: string
          id?: number
        }
        Update: {
          content?: string
          header?: string
          id?: number
        }
        Relationships: []
      }
      customers: {
        Row: {
          address1: string | null
          address2: string | null
          agreedToTandC: boolean | null
          datetime_submitted: string
          email: string
          id: number
          isOver18: boolean | null
          message_hash: string
          name: string
          phone: string | null
          postal_code: string | null
          redeem_tx_passed: boolean
          redemption_type: string
          selected_nfts: number[] | null
          wallet_address: string
        }
        Insert: {
          address1?: string | null
          address2?: string | null
          agreedToTandC?: boolean | null
          datetime_submitted?: string
          email: string
          id?: never
          isOver18?: boolean | null
          message_hash: string
          name: string
          phone?: string | null
          postal_code?: string | null
          redeem_tx_passed?: boolean
          redemption_type: string
          selected_nfts?: number[] | null
          wallet_address: string
        }
        Update: {
          address1?: string | null
          address2?: string | null
          agreedToTandC?: boolean | null
          datetime_submitted?: string
          email?: string
          id?: never
          isOver18?: boolean | null
          message_hash?: string
          name?: string
          phone?: string | null
          postal_code?: string | null
          redeem_tx_passed?: boolean
          redemption_type?: string
          selected_nfts?: number[] | null
          wallet_address?: string
        }
        Relationships: []
      }
      newsletter: {
        Row: {
          created_at: string
          email: string
          id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
        }
        Relationships: []
      }
      sales: {
        Row: {
          id: number
          order_date: string
          payment_method: string
          quantity: number
          redeemed: boolean
          total_price: number
          transaction_hash: string
          unit_price: number
        }
        Insert: {
          id?: number
          order_date?: string
          payment_method: string
          quantity: number
          redeemed?: boolean
          total_price: number
          transaction_hash: string
          unit_price: number
        }
        Update: {
          id?: number
          order_date?: string
          payment_method?: string
          quantity?: number
          redeemed?: boolean
          total_price?: number
          transaction_hash?: string
          unit_price?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
