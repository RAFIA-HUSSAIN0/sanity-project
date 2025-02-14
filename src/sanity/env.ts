import { error } from "console"

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-14'

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  'production'


export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  'mp6smxzm'


export const token =
  "skacl9ZIuQHsPdBxTrh1ll4s4iODNVhS5mbgnYnl2FPGXquIHNaHZMyvydnzjFM65Sr7Zd9zhtiWC7byPZS3wHn6YXIgJanEaCBMcTymvgr8flWpMvEpFDbdDUCy0O5owVKg0tmEP05LFKDnqQxHDd0kEUbxlMrMHeNQQAnyvAPnxdt0erKc"




function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}