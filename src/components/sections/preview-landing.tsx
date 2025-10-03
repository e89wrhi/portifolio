import Image from 'next/image';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import Link from 'next/link';

export default function PortifolioPreviewLanding() {
  return (
    <div className="pb-6 sm:pb-16">
      <MaxWidthWrapper>
        <div className="rounded-xl  md:p-3.5">
          {' '}
          <h2 className="text-center text-sm my-5 font-semibold uppercase">
            LATEST WORK
          </h2>
          <div className="relative aspect-video overflow-hidden rounded-xl md:rounded-lg">
            <Link href="https://google.com">
              <Image
                className="size-full m-3 object-center"
                src="/_illustration/illu_device2_dark.png"
                alt="preview landing"
                width={2000}
                height={1000}
                priority={true}
              />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
