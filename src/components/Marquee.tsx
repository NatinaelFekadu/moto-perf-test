import { onCleanup, onMount } from "solid-js";

export default function Marquee() {
  let marqueeRef: HTMLDivElement | undefined;
  let animationId: number;

  onMount(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let offset = 0;
    const step = () => {
      if (marqueeRef) {
        offset -= 1;
        marqueeRef.style.transform = `translate3d(${offset}px, 0, 0)`;
        if (Math.abs(offset) > marqueeRef.scrollWidth / 2) offset = 0;
      }
      animationId = requestAnimationFrame(step);
    };
    step();

    onCleanup(() => cancelAnimationFrame(animationId));
  });

  return (
    <section class="w-full overflow-hidden bg-gray-100 py-6">
      <div
        ref={marqueeRef}
        class="flex space-x-12 whitespace-nowrap text-2xl font-semibold"
      >
        {/* Repeated Logos */}
        {[...Array(10)].map(() => (
          <>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React"
              class="h-12 w-auto"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="JS"
              class="h-12 w-auto"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
              alt="Node.js"
              class="h-12 w-auto"
            />
          </>
        ))}
      </div>
    </section>
  );
}
