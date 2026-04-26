export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const target = "https://api.bybit.com" + url.pathname + url.search;
    const newRequest = new Request(target, {
      method: request.method,
      headers: request.headers,
      body: request.method !== "GET" ? request.body : undefined,
    });
    return fetch(newRequest);
  }
};
