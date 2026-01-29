import { defineRSSSource } from "#/utils/source"

export default defineSource({
  arstechnica: defineRSSSource("https://feeds.arstechnica.com/arstechnica/index"),
})
