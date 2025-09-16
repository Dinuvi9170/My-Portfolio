declare module 'vanta/dist/vanta.topology.min' {
  interface VantaTopologyOptions {
    el: HTMLElement | null;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
  }

  interface VantaEffect {
    destroy(): void;
  }

  function TOPOLOGY(options: VantaTopologyOptions): VantaEffect;
  export default TOPOLOGY;
}
