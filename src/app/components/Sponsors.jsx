import Image from 'next/image';
import { sponsors } from './sponsorList';

export default function Sponsors() {
  return (
    <section>
      <h2 className="mt-40">Meet Our Sponsors</h2>
      <div className="flex flex-wrap justify-center gap-32 p-5">
        {sponsors.map((sponsor, index) => (
          <div
            style={{ width: '250px' }}
            key={index}
            className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] rounded-lg overflow-hidden mx-auto font-[sans-serif] "
          >
            <Image
              width={250}
              height={150}
              src={`/sponsors/${sponsor.src}.png`}
              alt={sponsor.name + ' Logo'}
              className="rounded-lg m-auto shadow-lg"
            />
            <div className="px-4 py-6">
              <h3 id="sponsors" className="mt-2">
                {sponsor.name}
              </h3>
              <p>{sponsor.description}</p>
              <p className="font-bold">{sponsor.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
//  <div
//     className="text-center flex justify-center flex-column"

//   >

//   </div>
