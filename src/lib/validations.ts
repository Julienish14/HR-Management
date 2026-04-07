import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().default(false),
});

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(1, "Name is required")
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be less than 50 characters"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character",
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    acceptTerms: z
      .boolean()
      .refine(
        (val) => val === true,
        "You must accept the terms and conditions",
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;

// Password strength checker
export const checkPasswordStrength = (
  password: string,
): {
  score: number;
  strength: "Weak" | "Fair" | "Good" | "Strong";
  feedback: string[];
} => {
  const feedback: string[] = [];
  let score = 0;

  if (password.length >= 8) score += 1;
  else feedback.push("At least 8 characters");

  if (/[A-Z]/.test(password)) score += 1;
  else feedback.push("One uppercase letter");

  if (/[a-z]/.test(password)) score += 1;
  else feedback.push("One lowercase letter");

  if (/[0-9]/.test(password)) score += 1;
  else feedback.push("One number");
  if (/[A-Z]/.test(password)) score += 1;
  else feedback.push("One uppercase letter");

  if (/[a-z]/.test(password)) score += 1;
  else feedback.push("One lowercase letter");

  if (/[0-9]/.test(password)) score += 1;
  else feedback.push("One number");
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  else feedback.push("One special character");

  let strength: "Weak" | "Fair" | "Good" | "Strong";
  if (score >= 5) strength = "Strong";
  else if (score >= 4) strength = "Good";
  else if (score >= 3) strength = "Fair";
  else strength = "Weak";

  return { score, strength, feedback };
};
