import { defineRSSSource } from "#/utils/source"

export default defineSource({
  wired: defineRSSSource("https://www.wired.com/feed/rss"),
})
