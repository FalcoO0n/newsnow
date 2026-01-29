import { defineRSSSource } from "#/utils/source"

export default defineSource({
  verge: defineRSSSource("https://www.theverge.com/rss/index.xml"),
})
