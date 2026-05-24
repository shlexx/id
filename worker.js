export default {
  async fetch(request) {
    const body = await request.text();
    const params = new URLSearchParams(body);
    const ids = [];
    for (const [key, value] of params) {
      if (key.trim().toLowerCase() === 'id') ids.push(value);
    }
    const last = ids.at(-1)?.replace(/\+/g, '').replace(/^0+/, '');
    const final = last ? (isNaN(last) ? String(parseInt(last, 16)) : last) : "none found";
    return new Response(final);
  }
}
