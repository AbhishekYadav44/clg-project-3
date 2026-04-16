let tempPosts = [];

export const postDetails = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Name is required"
            });
        }

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image is required"
            });
        }

        const newPost = {
            id: Date.now(),
            name,
            image: `http://localhost:3000/uploads/${req.file.filename}`
        };

        tempPosts.push(newPost);

        res.status(201).json({
            success: true,
            data: newPost
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getPosts = async (req, res) => {
    res.status(200).json({
        success: true,
        data: tempPosts
    });
};