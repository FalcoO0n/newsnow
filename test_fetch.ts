import { ofetch } from "ofetch"
import { XMLParser } from "fast-xml-parser"

const myFetch = ofetch.create({
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
  },
  timeout: 10000,
  retry: 1,
  ignoreResponseError: true,
})

async function test() {
  console.log("Fetching TechCrunch with responseType: text...")
  try {
    const res = await myFetch("https://techcrunch.com/feed/", {
      responseType: "text",
    })
    console.log("Status: OK")
    // console.log("Content snippet:", res.slice(0, 100))

    const xml = new XMLParser({
      attributeNamePrefix: "",
      textNodeName: "$text",
      ignoreAttributes: false,
    })
    const result = xml.parse(res)
    if (result.rss && result.rss.channel) {
      console.log("  TechCrunch XML Valid. Title:", result.rss.channel.title)
    } else {
      console.log("  TechCrunch XML Invalid structure.")
    }
  } catch (e) {
    console.log("Fetch failed:", e.message)
  }
}

test()
