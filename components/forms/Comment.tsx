"use client"
import {useForm} from "react-hook-form";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import { usePathname, useRouter } from "next/navigation";
import { CommentValidation } from "@/lib/validations/thread";
import {addCommentToThread} from "@/lib/actions/thread.actions";


interface Props{
  threadId: string;
  currentUserImg: string;
  currentUserId: string;
}

const Comment = ({threadId, currentUserImg, currentUserId}:Props) => {
  const pathname = usePathname();
  const form = useForm({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      thread:'',
    }
  })

  const  onSubmit = async ( values : z.infer<typeof CommentValidation> ) => {
    await addCommentToThread(threadId, values.thread, JSON.parse(currentUserId), pathname);
    form.reset();
  }
  console.log(currentUserId)
  return(
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="comment-form"
      >
        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex items-center gap-3 w-full">
              <FormLabel>
                <Image
                  src={currentUserImg}
                  alt="profile image"
                  width={48}
                  height={36}
                  className="rounded-full object-cover"
                />
              </FormLabel>
              <FormControl className="border-none bg-transparent">
                <Input
                  type="text"
                  placeholder="Comment.."
                  className="no-focus text-light-1 outline-none"
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="comment-form_btn" type="submit">
          Reply
        </Button>
      </form>
    </Form>
  )
}

export default Comment;