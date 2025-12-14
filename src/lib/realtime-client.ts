"use client";

import { createRealtime } from "@upstash/realtime/client";
import type { RealtimeEvent } from "@/lib/realtime";

export const { useRealtime } = createRealtime<RealtimeEvent>();
