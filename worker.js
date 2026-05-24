export default {
  async fetch(request) {
    const body = await request.text();
    const params = new URLSearchParams(body);
    const ids = [];
    for (const [key, value] of params) {
      if (key.trim().toLowerCase() === 'id') ids.push(value);
    }
    const last = ids.at(-1)?.replace(/\+/g, '').replace(/^0+/, '') ?? "none found";
    return new Response(last);
  }
}
