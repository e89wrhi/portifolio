import Image from 'next/image';
import { portifolioTestimonials } from '@/config/landing';
import { Icons } from '@/components/shared/icons';

export default function Testimonials() {
  return (
    <section>
      <div className="container flex max-w-6xl flex-col gap-10 py-32 sm:gap-y-16">
        <h1 className="font-extrabold text-4xl md:text-5xl">Some Feedbacks</h1>
        <div className="overflow-hidden relative w-full my-5 md:my-10">
          <div className="flex animate-marquee space-x-5 md:space-x-8">
            {portifolioTestimonials.map((item) => (
              <div className="" key={item.name}>
                <div className="w-90 rounded-xl border bg-muted/25">
                  <div className="flex flex-col px-4 py-5 sm:p-6">
                    <div>
                      <div className="relative mb-4 flex items-center gap-3">
                        <span className="relative inline-flex size-10 shrink-0 items-center justify-center rounded-full">
                          <Image
                            width={100}
                            height={100}
                            className="size-full rounded-full border"
                            src={item.image}
                            alt={item.name}
                          />
                        </span>
                        <div>
                          <p className="truncate max-w-xs text-sm font-semibold text-foreground">
                            {item.name}
                          </p>
                          <p className="truncate text-sm text-muted-foreground">
                            {item.job}
                          </p>
                        </div>
                        <Icons.twitter className="h-4 w-4" />
                      </div>
                      <q className="text-muted-foreground">{item.review}</q>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
