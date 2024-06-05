// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//       const { email } = req.body;
  
//       try {
//         // Send the email to Listmonk or your email marketing service
//         // Example:
//         const response = await fetch('https://listmonk-production-1eb0.up.railway.app/subscription/form', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': null,
//           },
//           body: JSON.stringify({ email }),
//         });
//         if (response.ok) {
//           res.status(200).json({ message: 'Subscribed successfully!' });
//         } else {
//           res.status(500).json({ message: 'Failed to subscribe.' });
//         }
  
//         // For demonstration purposes, assume successful subscription
//         res.status(200).json({ message: 'Subscribed successfully!' });
//       } catch (error) {
//         console.error('Error subscribing:', error);
//         res.status(500).json({ message: 'Failed to subscribe.' });
//       }
//     } else {
//       res.setHeader('Allow', ['POST']);
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
//   }
  