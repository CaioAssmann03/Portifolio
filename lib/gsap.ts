"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

// Plugins are registered once here; client components import from this module
// instead of calling registerPlugin themselves.
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export { gsap, ScrollTrigger, SplitText, useGSAP };

export const NO_MOTION_PREF = "(prefers-reduced-motion: no-preference)";
