import { createSignal, onCleanup, onMount } from "solid-js";

export default function Hero() {
  const [isVisible, setIsVisible] = createSignal(false);

  let videoRef: HTMLVideoElement | undefined;
  let heroRef: HTMLDivElement | undefined;

  onMount(() => {
    if (!heroRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.25 }
    );

    observer.observe(heroRef);
    onCleanup(() => observer.disconnect());
  });

  return (
    <section ref={heroRef} class="relative w-full h-screen overflow-hidden">
      {/* Desktop video */}
      <video
        ref={videoRef}
        class="hidden md:block w-full h-full object-cover"
        autoplay
        muted
        loop
        playsinline
        preload="none"
        poster="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80"
      >
        {isVisible() && (
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            type="video/mp4"
          />
        )}
      </video>

      {/* Mobile poster */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80"
        alt="Hero poster"
        class="block md:hidden w-full h-full object-cover"
        loading="lazy"
      />

      {/* Overlay text centered */}
      <div class="absolute top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold text-center">
        Performance Test Hero
      </div>
    </section>
  );
}
