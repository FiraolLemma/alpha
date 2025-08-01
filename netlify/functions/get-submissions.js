exports.handler = async (event) => {
  const { password } = JSON.parse(event.body);
  
  // Verify password (store this in environment variables!)
  if (password !== process.env.ADMIN_PW) {
    return { statusCode: 401, body: "Unauthorized" };
  }
  
  const response = await fetch(
    `https://api.netlify.com/api/v1/sites/${process.env.SITE_ID}/submissions`,
    { headers: { Authorization: `Bearer ${process.env.API_AUTH_TOKEN}` } }
  );
  
  return { statusCode: 200, body: JSON.stringify(await response.json()) };
};