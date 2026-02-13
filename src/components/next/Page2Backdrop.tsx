"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { assets } from "@/lib/assets";

/** Asset config: src and size (bigger and more scattered) */
const ASSETS = [
  { src: assets.twoHearts, size: 72 },
  { src: assets.heartWithWingsFront, size: 68 },
  { src: assets.heartWithLove, size: 76 },
  { src: assets.heartWithArrow, size: 64 },
  { src: assets.twoHearts, size: 70 },
  { src: assets.heartWithWingsAngle, size: 66 },
  { src: assets.gift, size: 62 },
  { src: assets.ring, size: 58 },
  { src: assets.chocolateFront, size: 60 },
  { src: assets.iLoveYou1, size: 74 },
  { src: assets.heartLock, size: 56 },
  { src: assets.envelopeFront, size: 60 },
];

const PADDING = 40;
const CENTER_ZONE_WIDTH_RATIO = 0.6;
const CENTER_ZONE_HEIGHT_RATIO = 0.45;
const MIN_SPEED = 0.4;
const MAX_SPEED = 1.2;
const BOUNCE_DAMP = 0.98;

type Vec = { x: number; y: number };

/**
 * Romantic backdrop for Landing Page 2: assets move around continuously,
 * bounce off viewport edges, off the center text zone, and off each other.
 * Bigger sizes and well scattered.
 */
export function Page2Backdrop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const positionsRef = useRef<Vec[]>([]);
  const velocitiesRef = useRef<Vec[]>([]);
  const sizesRef = useRef<number[]>(ASSETS.map((a) => a.size));
  const mountedRef = useRef(true);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    mountedRef.current = true;
    const container = containerRef.current;
    if (!container) return;

    const w = window.innerWidth;
    const h = window.innerHeight;
    const cx = w / 2;
    const cy = h / 2;
    const zoneW = w * CENTER_ZONE_WIDTH_RATIO;
    const zoneH = h * CENTER_ZONE_HEIGHT_RATIO;
    const zoneLeft = cx - zoneW / 2;
    const zoneRight = cx + zoneW / 2;
    const zoneTop = cy - zoneH / 2;
    const zoneBottom = cy + zoneH / 2;

    const positions = positionsRef.current;
    const velocities = velocitiesRef.current;
    const sizes = sizesRef.current;

    if (positions.length === 0) {
      for (let i = 0; i < ASSETS.length; i++) {
        const size = sizes[i];
        positions.push({
          x: PADDING + Math.random() * (w - 2 * PADDING - size),
          y: PADDING + Math.random() * (h - 2 * PADDING - size),
        });
        const angle = Math.random() * Math.PI * 2;
        const speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
        velocities.push({
          x: Math.cos(angle) * speed,
          y: Math.sin(angle) * speed,
        });
      }
      requestAnimationFrame(() => {
        itemRefs.current.forEach((el, i) => {
          if (el && positions[i]) {
            el.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px)`;
          }
        });
      });
    }

    function bounceOffEdges(i: number) {
      const pos = positions[i];
      const vel = velocities[i];
      const size = sizes[i];
      const r = size / 2;
      if (pos.x <= 0) {
        pos.x = 0;
        vel.x = Math.abs(vel.x) * BOUNCE_DAMP;
      }
      if (pos.x >= w - size) {
        pos.x = w - size;
        vel.x = -Math.abs(vel.x) * BOUNCE_DAMP;
      }
      if (pos.y <= 0) {
        pos.y = 0;
        vel.y = Math.abs(vel.y) * BOUNCE_DAMP;
      }
      if (pos.y >= h - size) {
        pos.y = h - size;
        vel.y = -Math.abs(vel.y) * BOUNCE_DAMP;
      }
    }

    function bounceOffCenterZone(i: number) {
      const pos = positions[i];
      const vel = velocities[i];
      const size = sizes[i];
      const centerX = pos.x + size / 2;
      const centerY = pos.y + size / 2;
      const insideX = centerX >= zoneLeft && centerX <= zoneRight;
      const insideY = centerY >= zoneTop && centerY <= zoneBottom;
      if (!insideX || !insideY) return;
      const fromLeft = centerX - zoneLeft;
      const fromRight = zoneRight - centerX;
      const fromTop = centerY - zoneTop;
      const fromBottom = zoneBottom - centerY;
      const minHor = Math.min(fromLeft, fromRight);
      const minVer = Math.min(fromTop, fromBottom);
      if (minHor < minVer) {
        vel.x *= -BOUNCE_DAMP;
        pos.x = centerX < cx ? zoneLeft - size : zoneRight;
        pos.x = Math.max(PADDING, Math.min(w - PADDING - size, pos.x));
      } else {
        vel.y *= -BOUNCE_DAMP;
        pos.y = centerY < cy ? zoneTop - size : zoneBottom;
        pos.y = Math.max(PADDING, Math.min(h - PADDING - size, pos.y));
      }
    }

    function bounceOffEachOther(i: number, j: number) {
      const posI = positions[i];
      const posJ = positions[j];
      const velI = velocities[i];
      const velJ = velocities[j];
      const rI = sizes[i] / 2;
      const rJ = sizes[j] / 2;
      const centerI = { x: posI.x + rI, y: posI.y + rI };
      const centerJ = { x: posJ.x + rJ, y: posJ.y + rJ };
      const dx = centerJ.x - centerI.x;
      const dy = centerJ.y - centerI.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const minDist = rI + rJ;
      if (dist < minDist && dist > 0.01) {
        const overlap = minDist - dist;
        const nx = dx / dist;
        const ny = dy / dist;
        posI.x -= (nx * overlap * 0.5);
        posI.y -= (ny * overlap * 0.5);
        posJ.x += (nx * overlap * 0.5);
        posJ.y += (ny * overlap * 0.5);
        const dvx = velJ.x - velI.x;
        const dvy = velJ.y - velI.y;
        const dvn = dvx * nx + dvy * ny;
        if (dvn > 0) {
          velI.x += nx * dvn * 0.5;
          velI.y += ny * dvn * 0.5;
          velJ.x -= nx * dvn * 0.5;
          velJ.y -= ny * dvn * 0.5;
        }
      }
    }

    function tick() {
      if (!mountedRef.current) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cx = w / 2;
      const cy = h / 2;
      const zoneW = w * CENTER_ZONE_WIDTH_RATIO;
      const zoneH = h * CENTER_ZONE_HEIGHT_RATIO;
      const zoneLeft = cx - zoneW / 2;
      const zoneRight = cx + zoneW / 2;
      const zoneTop = cy - zoneH / 2;
      const zoneBottom = cy + zoneH / 2;

      const positions = positionsRef.current;
      const velocities = velocitiesRef.current;
      const sizes = sizesRef.current;
      const n = positions.length;

      for (let i = 0; i < n; i++) {
        positions[i].x += velocities[i].x;
        positions[i].y += velocities[i].y;
      }
      for (let i = 0; i < n; i++) {
        bounceOffEdges(i);
        bounceOffCenterZone(i);
      }
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          bounceOffEachOther(i, j);
        }
      }

      for (let i = 0; i < n; i++) {
        const el = itemRefs.current[i];
        if (el) {
          el.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px)`;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      mountedRef.current = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,255,255,0.12) 0%, transparent 60%)",
        }}
      />
      {ASSETS.map((item, i) => (
        <div
          key={i}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          className="absolute left-0 top-0 w-[var(--size)] h-[var(--size)] opacity-85 drop-shadow-lg will-change-transform"
          style={
            {
              "--size": `${item.size}px`,
              width: item.size,
              height: item.size,
              transform: positionsRef.current[i]
                ? `translate(${positionsRef.current[i].x}px, ${positionsRef.current[i].y}px)`
                : "translate(0,0)",
            } as React.CSSProperties
          }
        >
          <Image
            src={item.src}
            alt=""
            width={item.size}
            height={item.size}
            className="object-contain w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}
