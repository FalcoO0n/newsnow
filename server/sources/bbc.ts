import { defineRSSSource, defineSource } from "#/utils/source"

export default defineSource({
  bbc: defineRSSSource("https://feeds.bbci.co.uk/news/rss.xml"),
})
