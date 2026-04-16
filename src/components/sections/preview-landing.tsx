import Image from 'next/image';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import Link from 'next/link';

export default function PortifolioPreviewLanding() {
  return (
    <div className="pb-6 sm:pb-16 pt-10">
      <MaxWidthWrapper>
        <div className="space-y-4">
          {/* Main Hero Project Card */}
          <div className="group relative aspect-video overflow-hidden rounded-3xl border border-border/50 bg-muted/20 transition-all hover:border-border hover:bg-muted/40">
            <Link href="/project" className="block size-full relative">
              <Image
                className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                src="/_illustration/illu_device_dark.png"
                alt="Main Project Preview"
                width={2000}
                height={1000}
                priority={true}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/60 to-transparent p-8 opacity-0 transition-opacity group-hover:opacity-100">
                <h3 className="text-2xl font-bold text-foreground">
                  Featured Projects
                </h3>
                <p className="text-muted-foreground">
                  Explore my full portfolio of work.
                </p>
              </div>
            </Link>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
            {/* Bento Item 1 - PromptMaster */}
            <Link
              href="/project/prompt-master"
              className="group relative md:col-span-2 md:row-span-2 overflow-hidden rounded-3xl border border-border/50 bg-muted/20 p-1 flex flex-col md:flex-row transition-all hover:border-border hover:bg-muted/40"
            >
              <div className="flex-1 p-8 flex flex-col justify-center gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Prompt Engineering
                </span>
                <h3 className="text-3xl font-extrabold tracking-tight">
                  PromptMaster
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed line-clamp-3">
                  Enterprise-grade repository of high-performance prompt
                  engineering templates utilizing strict frameworks.
                </p>
                <div className="pt-2">
                  <span className="text-sm font-semibold underline underline-offset-4">
                    View Details →
                  </span>
                </div>
              </div>
              <div className="flex-1 relative min-h-[250px] overflow-hidden">
                <Image
                  src="/_illustration/illu_phone_light.png"
                  alt="PromptMaster"
                  fill
                  className="object-contain p-8 dark:hidden transition-transform duration-700 group-hover:scale-105"
                />
                <Image
                  src="/_illustration/illu_phone_dark.png"
                  alt="PromptMaster"
                  fill
                  className="object-contain p-8 hidden dark:block transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Bento Item 2 - AI-Net Platform */}
            <Link
              href="/project/ai-net-platform"
              className="group relative overflow-hidden rounded-3xl border border-border/50 bg-muted/20 p-6 flex flex-col justify-between transition-all hover:border-border hover:bg-muted/40"
            >
              <div className="relative aspect-square w-full mb-4">
                <Image
                  src="/_illustration/illu_device_light.png"
                  alt="AI-Net Platform"
                  fill
                  className="object-contain dark:hidden"
                />
                <Image
                  src="/_illustration/illu_device_dark.png"
                  alt="AI-Net Platform"
                  fill
                  className="object-contain hidden dark:block"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">AI-Net Platform</h4>
                <p className="text-sm text-muted-foreground">
                  Advanced AI features powered by .NET Core.
                </p>
              </div>
            </Link>

            {/* Bento Item 3 - Leap AI SDK */}
            <Link
              href="/project/leap-ai-sdk"
              className="group relative overflow-hidden rounded-3xl border border-border/50 bg-muted/20 p-6 flex flex-col justify-between transition-all hover:border-border hover:bg-muted/40"
            >
              <div className="relative z-10">
                <h4 className="font-bold text-lg mb-1">Leap AI SDK</h4>
                <p className="text-sm text-muted-foreground text-balance">
                  Toolkit for autonomous agents.
                </p>
              </div>
              <div className="relative aspect-video w-full mt-4 scale-110 translate-x-2">
                <Image
                  src="/_illustration/illu_phone_light.png"
                  alt="Leap AI SDK"
                  fill
                  className="object-contain dark:hidden"
                />
                <Image
                  src="/_illustration/illu_phone_dark.png"
                  alt="Leap AI SDK"
                  fill
                  className="object-contain hidden dark:block"
                />
              </div>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
