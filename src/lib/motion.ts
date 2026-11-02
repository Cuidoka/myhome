export const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

const running = new Set<Animation>();
const feedback = new WeakMap<Element, Animation>();

motionPreference.addEventListener('change', () => {
  if (motionPreference.matches) {
    running.forEach((animation) => animation.cancel());
    running.clear();
  }
});

export function animateMotion(element: Element, frames: Keyframe[], options: KeyframeAnimationOptions) {
  if (motionPreference.matches || typeof element.animate !== 'function') return;
  const animation = element.animate(frames, { easing: 'cubic-bezier(.22, 1, .36, 1)', ...options });
  running.add(animation);
  animation.finished.then(() => running.delete(animation), () => running.delete(animation));
  return animation;
}

export function animateFeedback(element: HTMLElement, distance = 0) {
  feedback.get(element)?.cancel();
  const animation = animateMotion(element, [
    { opacity: .6, translate: `0 ${distance}px` },
    { opacity: 1, translate: '0 0' },
  ], { duration: 200 });
  if (animation) feedback.set(element, animation);
}
