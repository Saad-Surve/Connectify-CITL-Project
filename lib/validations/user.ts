import * as z from "zod";

export const UserValidation =  z.object({
  profile_photo: z.string().url().nonempty(),
  name: z.string().min(3, {message:'minimum 3 characters'}).max(30, {message:'30 characters max allowed'}),
  username: z.string().min(3, {message:'minimum 3 characters'}).max(30, {message:'30 characters max allowed'}),
  bio: z.string().min(3).max(1000, {message:'1000 characters max allowed'}),

})