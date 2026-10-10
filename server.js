const {
refreshJellyfinLibrary
} = require("./jellyfin");

async function main() {
  const media = await refreshJellyfinLibrary();
  console.log("Jellyfin library refresh started");

  console.log("\nScan completed");

  console.log(JSON.stringify(media, null, 2));
  process.exit(0)
}

main().catch(console.error);