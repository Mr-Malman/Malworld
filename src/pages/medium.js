import { parse } from 'rss-to-json';

export async function onRequest(context) {
  // Everyone can access this function
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    // IMPORTANT: Replace with your Medium username if different
    const rss = await parse('https://medium.com/feed/@arya.koner07');
    return new Response(JSON.stringify(rss), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}