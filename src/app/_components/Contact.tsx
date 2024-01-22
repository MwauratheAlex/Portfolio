"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Container from "./ui/container";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { api } from "~/trpc/react";
import { messageFormSchema } from "../types";
import { Textarea } from "./ui/textarea";
import SectionHeading from "./ui/sectionHeading";
import { SocialMedia } from "./Header";
import { AtSign, Phone } from "lucide-react";

const Contact = () => {
  const form = useForm<z.infer<typeof messageFormSchema>>({
    resolver: zodResolver(messageFormSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      message: "",
    },
  });
  const createMessage = api.message.create.useMutation();
  const handleSubmit = (data: z.infer<typeof messageFormSchema>) => {
    createMessage.mutate(data);
  };
  return (
    <section className="py-8" id="contact">
      <Container>
        <div className="grid grid-cols-2 gap-4 rounded-lg border px-8 py-16">
          <div className="flex flex-col justify-between ">
            <SectionHeading title={`Let's talk`} />
            <p className="text-lg">
              I am always open to new opportunities and challenges. If you want
              to talk about a project, collaboration, or just want to say hi,
              feel free to contact me.
            </p>
            <div className="flex gap-4">
              <AtSign size={24} />
              <p>mwaurambugua12@mail.com</p>
            </div>
            <div className="flex gap-4">
              <Phone size={24} />
              <p>+254 713 958 070</p>
            </div>
            <SocialMedia className="flex w-max gap-8 border" />
          </div>
          <div className="">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="flex flex-col gap-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Name" type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="emailAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Type your message here."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
