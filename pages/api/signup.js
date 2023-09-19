import { connectToDatabase } from '../../util/mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { firstName, lastName, email, password } = req.body;

    // Validate input (you can add more validation as needed)
    if (!firstName || !lastName || !email || !password) {
      res.status(400).json({ message: 'Please provide all required fields' });
      return;
    }

    try {
      const { db } = await connectToDatabase();
      const users = db.collection('users');

      const newUser = {
        firstName,
        lastName,
        email,
        password,
      };

      // Insert the new user into the MongoDB collection
      await users.insertOne(newUser);

      res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Error registering user' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;