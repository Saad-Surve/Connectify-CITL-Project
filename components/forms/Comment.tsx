"use client"
import {useForm} from "react-hook-form";
import { Button } from "@nextui-org/react"
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
import { useState } from "react";


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

  const [isLoading, setIsLoading] = useState(false)

  const  onSubmit = async ( values : z.infer<typeof CommentValidation> ) => {
    setIsLoading(true)
    await addCommentToThread(threadId, values.thread, JSON.parse(currentUserId), pathname);
    setIsLoading(false)
    form.reset();
  }
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
          <Button className="bg-primary-500 hover:bg-primary-300 " isLoading={isLoading}  type="submit">
            {!isLoading?'Reply':'Replying...'}
          </Button>
      </form>
    </Form>
  )
}

export default Comment;