"use server";

import { createServerClient } from "@/lib/supabase";

export type FormState = {
  success: boolean;
  error: string | null;
};

const INQUIRY_TYPES = ["merchandise", "partnership", "general"] as const;

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const inquiryType = formData.get("inquiry_type") as string;
  const notes = formData.get("notes") as string;

  if (!name || !email || !company || !inquiryType) {
    return { success: false, error: "Please fill in all required fields." };
  }

  if (!INQUIRY_TYPES.includes(inquiryType as (typeof INQUIRY_TYPES)[number])) {
    return { success: false, error: "Invalid inquiry type." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    const supabase = createServerClient();
    const { error } = await supabase.from("contact_submissions").insert({
      name,
      email,
      company,
      inquiry_type: inquiryType,
      notes: notes || null,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return { success: false, error: "Something went wrong. Please try again." };
    }

    return { success: true, error: null };
  } catch (err) {
    console.error("Contact form error:", err);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
