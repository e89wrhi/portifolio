import { Icons } from '@/components/shared/icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CFASection() {
  return (
    <section>
      <div
        className="container flex max-w-6xl flex-col py-32
         gap-5 items-center text-center"
      >
        <div className="rounded-full bg-gray-200 dark:bg-gray-800 p-10">
          <Icons.handshake className="h-15 w-15" />
        </div>

        <h1 className="font-extrabold text-5xl md:text-6xl md:mb-6">
          Tell me about your next project
        </h1>
        <div className="flex flex-col md:flex-row sm:space-y-6 md:space-x-10">
          <Link href={''}>
            <Button className="rounded-full px-7 py-6">
              <div className="flex flex-row items-center space-x-2">
                <Icons.mail />
                <p>Email Me</p>
              </div>
            </Button>
          </Link>

          <Link href={''}>
            <Button variant="outline" className="rounded-full px-7 py-6">
              <div className="flex flex-row items-center space-x-2">
                <Icons.message />
                <p>WhatsApp</p>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
