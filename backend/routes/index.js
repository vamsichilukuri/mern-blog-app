const router = require("express").Router();
// controls
const {
	PostsList,
	CreatePost,
	EditPost,
	DeletePost,
	GetPost,
	UploadImage,
} = require("../controller/Post.controller");

const multer = require("multer");
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./public/images");
	},
	filename: (req, file, cb) => {
		cb(null, `${Date.now().toString()}${file.originalname}`);
	},
});
const upload = multer({ storage });

// all post routes
router.get("/posts", PostsList);
router.get("/posts/post/:postId", GetPost);
router.put("/posts/post/edit/:postId", EditPost);
router.post("/posts/new", CreatePost);
router.post("/posts/image/upload", upload.single("file"), UploadImage);
router.delete("/posts/post/remove/:postId", DeletePost);

module.exports = router;
