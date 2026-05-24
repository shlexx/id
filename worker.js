export default {
  async fetch(request) {
    const url = new URL(request.url);
    const ids = [];
    for (const [key, value] of url.searchParams) {
      if (key.trim().toLowerCase() === 'id') ids.push(value);
    }
    return new Response(ids.at(-1) ?? "none found");
  }
}
