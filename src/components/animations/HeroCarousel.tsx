"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const SOURCES = [
  "67e4a014036e8df650e2b7ac_Placeholder%20Image%201.webp",
  "67e4a0fea050760353221785_Placeholder%20Image%201.webp",
  "67e46cd9063007b7fadb4ba6_TourOffice_B_0003_2.webp",
  "67e46cd9f2dad60c993e1751_TourOffice_B_0005_4.webp",
  "67e46cd72f01f6d1e4c01256_TourOffice_B_0002_1.webp",
  "67e46ccf97ea749365e581ff_TourOffice_B_0006_8.webp",
  "67e4a074f25b291b836feec6_Placeholder%20Image%201.webp",
  "67e46ccf97ea749365e581ff_TourOffice_B_0006_8.webp",
].map((f) => `/img/${f}`);

/** three.js rotating image ring from the live hero (r149 port, pauses off-screen). */
export function HeroCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 40;
    const group = new THREE.Group();
    scene.add(group);

    const loader = new THREE.TextureLoader();
    const textures = SOURCES.map((s) => loader.load(s));
    const meshes: THREE.Mesh[] = [];
    let radius = 0;
    let verticalOffset = 0;
    let visible = true;
    let raf = 0;

    const build = () => {
      meshes.forEach((m) => {
        m.geometry.dispose();
        (m.material as THREE.Material).dispose();
      });
      group.clear();
      meshes.length = 0;
      const visibleH = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * camera.position.z;
      const visibleW = visibleH * camera.aspect;
      const mobile = window.innerWidth < 768;
      const width = visibleW * (mobile ? 0.95 : 1);
      const height = width / (mobile ? 1.1 : 16 / 10);
      radius = mobile ? width * 1.5 : SOURCES.length * (width * 0.18);
      verticalOffset = visibleH * 0.05;
      textures.forEach((map) => {
        const mesh = new THREE.Mesh(
          new THREE.PlaneGeometry(width, height),
          new THREE.MeshBasicMaterial({ map, transparent: true, side: THREE.DoubleSide }),
        );
        group.add(mesh);
        meshes.push(mesh);
      });
    };

    const tick = () => {
      if (!visible) return;
      const time = Date.now() * 0.001;
      meshes.forEach((m, i) => {
        const a = time * 0.1 + (i / meshes.length) * Math.PI * 2;
        m.position.set(Math.cos(a) * radius, verticalOffset, Math.sin(a) * radius);
        m.lookAt(camera.position);
      });
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      build();
    };

    const io = new IntersectionObserver(([e]) => {
      const was = visible;
      visible = e.isIntersecting;
      if (visible && !was) tick();
    });
    io.observe(canvas);
    window.addEventListener("resize", resize);
    resize();
    tick();

    return () => {
      visible = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      meshes.forEach((m) => {
        m.geometry.dispose();
        (m.material as THREE.Material).dispose();
      });
      textures.forEach((t) => t.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full aspect-[4/3] md:aspect-[2/1] max-h-[620px]" aria-hidden="true">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
