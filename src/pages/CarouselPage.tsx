import { CarouselPlugin } from "../_components/carousel_photo";

export default function CarouselPage() {
  return (
    <main className="justify-center items-center flex flex-col p-8">
      <div className="w-full max-w-2xl">
        <CarouselPlugin />
      </div>
    </main>
  );
}
