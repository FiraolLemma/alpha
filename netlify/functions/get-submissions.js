// This function uses Netlify API to fetch form submissions
exports.handler = async function(event, context) {
  const NETLIFY_TOKEN = process.env.API_AUTH_TOKEN;

  const formName = "registration";
  const res = await fetch(`https://api.netlify.com/api/v1/forms?access_token=${NETLIFY_TOKEN}`);
  const forms = await res.json();
  const form = forms.find(f => f.name === formName);
  if (!form) {
    return { statusCode: 404, body: "Form not found" };
  }

  const submissionsRes = await fetch(`https://api.netlify.com/api/v1/forms/${form.id}/submissions?access_token=${NETLIFY_TOKEN}`);
  const submissions = await submissionsRes.json();

  return {
    statusCode: 200,
    body: JSON.stringify(submissions)
  };
};
