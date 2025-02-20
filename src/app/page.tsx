import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 pt-28 pb-32 bg-[#FBEBB5] place-items-center ">
        <div className="flex flex-col gap-10 -mr-40">
          <span className="md:text-5xl text-xl sm:text-3xl font-semibold whitespace-nowrap">
            Rocket single
            <br />
            <span className="mt-5 block">seater</span>
          </span>

          <Link
            href="/shop"
            className="font-medium shop-now border-b-[3px] pb-2 border-black max-w-fit whitespace-nowrap text-lg"
          >
            Shop now
          </Link>
        </div>
        <Image
          className="w-full drop-shadow-sm "
          src="/sofa3.png"
          alt="sofa img"
          width={1920}
          height={1080}
        />
      </div>
      <div className=" grid grid-cols-2 place-items-center gap-8">
        <div className="flex flex-col">
          <Image src='/sofa1.png' className="w-full" alt="sofa" width={1920} height={1080}/>
        </div>
          <Image src='/sofa2.png' className="w-full" alt="sofa" width={1920} height={1080} />
        <div className="flex flex-col"></div>
      </div>
    </>
  );
}
