import { defineRSSSource } from "#/utils/source"

export default defineSource({
  cnn: defineRSSSource("http://rss.cnn.com/rss/edition.rss"),
})
