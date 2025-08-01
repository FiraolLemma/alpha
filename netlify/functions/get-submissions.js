const fetch = require('node-fetch');

exports.handler = async (event) => {
  // Password protection
  const { password } = JSON.parse(event.body);
  if (password !== "YOUR_SECRET_PASSWORD") {
    return { statusCode: 401, body: "Unauthorized" };
  }

  try {
    const response = await fetch(
      `https://api.netlify.com/api/v1/sites/${process.env.SITE_ID}/submissions`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_AUTH_TOKEN}`
        }
      }
    );
    
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};