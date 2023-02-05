import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const animal = req.body.animal || ''; 
  if (animal.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Invalid input!",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(animal),
      temperature: 0,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `List medical hotlines for different traumas.

  Trauma: Allergy and Infectious Diseases
  Hotline: 866-284-4107
  Trauma: Suicide
  Hotline: 9-8-8
  Trauma: Domestic Abuse
  Hotline: 1-800-799-7233
  Trauma: Alcohol Abuse and Alcoholism	
  Hotline: 301-443-3860
  Trauma: ${capitalizedAnimal}
  Hotline:`;
}

//npm run dev to start application