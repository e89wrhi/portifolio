'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useTransition } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { submitContactFormAction } from '@/actions/contact';
import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

const FormSchema = z.object({
  email: z.string().email({
    message: 'Enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters long.',
  }),
});

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const t = useTranslations();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      message: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(async () => {
      const response = await submitContactFormAction(data);

      if (response.success) {
        form.reset();
        toast({
          title: t('portifolio.contact_success_title'),
          description: t('portifolio.contact_success_desc'),
        });
      } else {
        toast({
          type: 'error',
          title: t('portifolio.contact_error_title'),
          description:
            response.error || 'Something went wrong. Please try again.',
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 sm:max-w-md"
      >
        <div className="space-y-1 text-left">
          <h2 className="text-2xl font-bold tracking-tight">
            {t('portifolio.contact_business')}
          </h2>
          <p className="text-sm text-muted-foreground">
            {t('portifolio.contact_subtitle')}
          </p>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="text-left">
              <FormLabel>{t('portifolio.email_label')}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  className="rounded-lg"
                  placeholder="name@example.com"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="text-left">
              <FormLabel>{t('portifolio.message_label')}</FormLabel>
              <FormControl>
                <TextareaAutosize
                  minRows={4}
                  className="flex w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder={t('portifolio.message_placeholder')}
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="default"
          className="w-full rounded-lg"
          disabled={isPending}
        >
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {t('portifolio.submit')}
        </Button>
      </form>
    </Form>
  );
}
