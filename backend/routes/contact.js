import express from 'express';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    
    // Di sini Anda bisa memproses data (misal: menyimpan ke database atau mengirim email)
    console.log('Received contact data in Express backend:', data);
    
    return res.status(200).json({ 
      message: 'Pesan berhasil diterima oleh backend Express.', 
      success: true 
    });
  } catch (error) {
    console.error('Error processing contact request:', error);
    return res.status(500).json({ 
      message: 'Terjadi kesalahan pada server.', 
      success: false 
    });
  }
});

export default router;
