import { defineRSSSource, defineSource } from "#/utils/source"

export default defineSource({
  guardian: defineRSSSource("https://www.theguardian.com/world/rss"),
})
