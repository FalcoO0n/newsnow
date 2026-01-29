import { defineRSSSource, defineSource } from "#/utils/source"

export default defineSource({
  techcrunch: defineRSSSource("https://techcrunch.com/feed/"),
})
