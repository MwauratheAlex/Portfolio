"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Container from "./ui/container";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
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
    <section className="w-screen  lg:py-8" id="contact">
      <Container>
        <div className=" rounded-lg border px-8 py-6 lg:grid lg:grid-cols-2 lg:gap-4 lg:py-16">
          <div className="flex flex-col justify-start">
            <SectionHeading title={`Let's talk`} />
            <div className="mt-6 flex h-full flex-col  items-center gap-3  lg:mt-8 lg:gap-8">
              <div className="flex w-min gap-3 lg:gap-4">
                <AtSign className="h-5 w-5 lg:h-6 lg:w-6" />
                <p>mwaurambugua12@mail.com</p>
              </div>
              <div className="flex gap-3 lg:gap-4">
                <Phone className="h-5 w-5 lg:h-6 lg:w-6" />
                <p>+254 713 958 070</p>
              </div>
              <SocialMedia
                className="flex w-max gap-2 lg:gap-4"
                iconSize={24}
              />
            </div>
          </div>
          <div className=" mt-3">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="flex flex-col gap-4 lg:gap-8"
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
