
require("dotenv").config();

const axios = require("axios");

const JELLYFIN_URL = process.env.JELLYFIN_URL;
const JELLYFIN_API_KEY = process.env.JELLYFIN_API_KEY;

if (!JELLYFIN_URL || !JELLYFIN_API_KEY) {
  throw new Error(
    "Missing JELLYFIN_URL or JELLYFIN_API_KEY in .env"
  );
}

const jellyfin = axios.create({
  baseURL: JELLYFIN_URL.replace(/\/$/, ""),
  headers: {
    "X-Emby-Token": JELLYFIN_API_KEY,
  },
});

/**
 * Scan Jellyfin libraries and return all media items.
 *
 * @returns {Promise<Array>}
 */


async function refreshJellyfinLibrary() {
  const response = await jellyfin.post(
    "/Library/Refresh"
  );
console.log(response.status)
  return response.status === 204;
}

module.exports = {
  refreshJellyfinLibrary,
};

